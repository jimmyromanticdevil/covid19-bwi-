module.exports = async function () {
  const pages = []
  const response = await fetch(
    "https://corona.banyuwangikab.go.id/api/covid19"
  );
  const resp = await response.json();
  pages.push({
    url: "/",
    data: resp.data,
  });
  return pages;
};
