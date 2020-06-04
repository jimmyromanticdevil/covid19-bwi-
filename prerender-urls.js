"use strict";

const headers = {
  "cache-control": "no-cache",
  "x-apikey": "5ed5a3cc2032862ff2ce27d9",
  "content-type": "application/json",
};
const domain = "https://covid19bwi-2d80.restdb.io";
const coronaBwiUrl = "https://corona.banyuwangikab.go.id/api/covid19";

async function writeData(responses) {
  const url = `${domain}/rest/case`;
  const response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      covid_cases: responses,
      last_updated: responses.last_updated,
    }),
    json: true,
  });
  let resp = await response.json();
  return true || {};
}

async function updateData(responses, response_rest) {
  const url = `${domain}/rest/case/${response_rest._id}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify({ covid_cases: responses }),
  });
  let resp = await response.json();
  console.log(resp);
  return true || {};
}

async function readData(responses) {
  const fetchAllCases = await fetch(`${domain}/rest/case`, {
    method: "GET",
    headers: headers,
  });

  let getAllCases = await fetchAllCases.json();
  const yesterday = ((d) => new Date(d.setDate(d.getDate() - 2)))(new Date())
    .toISOString()
    .slice(0, 10);

  let yesterdayCase = getAllCases.find(
    (el) => el.covid_cases.last_updated === yesterday
  );
  let todayCase = getAllCases.find(
    (el) => el.covid_cases.last_updated === responses.last_updated
  );
  if (todayCase) {
    console.log("update data");
    // first we need to update the data because gov API doesn't work like normal API
    updateData(responses, todayCase);
  } else {
    console.log("insert data");
    writeData(responses);
  }

  var myObj = {};
  for (let [key, value] of Object.entries(responses)) {
    if (key != "last_updated") {
      myObj[`diff_${key}`] = value - yesterdayCase.covid_cases[key];
    }
  }
  return myObj
}

module.exports = async function () {
  //sorry guys this is hardcode, because I got deadline :p will fix it later.
  const pages = [];
  const response = await fetch(coronaBwiUrl);
  let resp = await response.json();
  let result = await readData(resp.data);
  const data = {...result, ...resp.data}
  pages.push({
    url: "/",
    title: "Data terkini COVID-19 di Banyuwangi versi cepat & hemat kuota.",
    data: data,
  });
  return pages;
};
