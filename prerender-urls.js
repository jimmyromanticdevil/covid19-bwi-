"use strict";

const headers = {
  "cache-control": "no-cache",
  "x-apikey": "5ed5a3cc2032862ff2ce27d9",
  "content-type": "application/json",
};
const domain = "https://covid19bwi-2d80.restdb.io";
const coronaBwiUrl = "https://corona.banyuwangikab.go.id/api/covid19";

let fetchData = async (data) => {
  let options = {
    method: data.method,
    headers: headers,
    json: true,
    ...(data.body && { body: data.body }),
  };
  let response = await fetch(data.url, options);
  return data.return_type == "json" ? await response.json() : true;
};

async function writeToDatabase(responses) {
  let writeOpt = {
    url: `${domain}/rest/case`,
    method: "POST",
    body: JSON.stringify({
      covid_cases: responses,
      last_updated: responses.last_updated,
    }),
    return_type: "bol",
  };
  return await fetchData(writeOpt);
}

async function updateToDatabase(responses, todayDate) {
  const checkUpdateOpt = {
    url: `${domain}/rest/case?q={"last_updated":"${todayDate}"}`,
    method: "GET",
    return_type: "json",
  };
  let resultCheck = await fetchData(checkUpdateOpt);
  if (resultCheck.length > 0) {
    console.log("[*] Update");
    const UpdateOpt = {
      url: `${domain}/rest/case/${resultCheck[0]._id}`,
      method: "PUT",
      body: JSON.stringify({ covid_cases: responses }),
      return_type: "bol",
    };
    return await fetchData(UpdateOpt);
  }
  console.log("[*] Update New Data");
  return await writeToDatabase(responses);
}

async function readData(responses) {
  let todayDate = new Date().toJSON().slice(0, 10);
  const caseResult = await updateToDatabase(responses, todayDate);
  if (caseResult) {
    const allOpt = {
      url: `${domain}/rest/case`,
      method: "GET",
      return_type: "json",
    };
    let getAllCases = await fetchData(allOpt);
    const yesterday = ((d) => new Date(d.setDate(d.getDate() - 1)))(new Date())
      .toISOString()
      .slice(0, 10);

    let yesterdayCase = getAllCases.find(
      (el) => el.covid_cases.last_updated === yesterday
    );
    console.log(yesterdayCase);
    var newObj = {};
    for (let [key, value] of Object.entries(responses)) {
      if (key != "last_updated") {
        let diff = value - yesterdayCase.covid_cases[key];
        newObj[`diff_${key}`] = diff
          ? diff < 0
            ? `(${diff})`
            : `(+${diff})`
          : "";
      }
    }
    console.log(newObj);
    return newObj;
  }
}

module.exports = async function () {
  //sorry guys this is hardcode, because I got deadline :p will fix it later.
  const pages = [];
  const response = await fetch(coronaBwiUrl);
  let resp = await response.json();
  let result = await readData(resp.data);
  let data = { ...result, ...resp.data };
  pages.push({
    url: "/",
    title: "Data terkini COVID-19 di Banyuwangi versi cepat & hemat kuota.",
    data: data,
  });
  return pages;
};
