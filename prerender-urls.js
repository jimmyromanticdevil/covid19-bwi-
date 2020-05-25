module.exports = async function () {
  const pages = []
  const response = await fetch(
    "https://corona.banyuwangikab.go.id/api/covid19"
  );
  const resp = await response.json();
  pages.push({
    url: "/",
    title: "Data terkini COVID-19 di Banyuwangi versi cepat & hemat kuota.",
    data: resp.data,
  });
  return pages;
};
