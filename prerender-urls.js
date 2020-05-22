function sumProperty(arr, type) {
  return arr.reduce((total, obj) => {
    if (typeof obj[type] === "string") {
      return total + Number(obj[type]);
    }
    return total + obj[type];
  }, 0);
}

module.exports = async function () {
  const pages = []
  const response = await fetch(
    "https://corona.banyuwangikab.go.id/front/data_sebaran"
  );
  const resp = await response.json();
  const properties = resp.features.map((content) => content.properties);

  const jumlah_covid = sumProperty(properties, "jumlah_covid");
  const jumlah_covid_sembuh = sumProperty(properties, "jumlah_covid_sembuh");
  const jumlah_covid_meninggal = sumProperty(properties, "jumlah_covid_meninggal");
  const jumlah_covid_isolasi = sumProperty(properties, "jumlah_covid_isolasi");
  const jumlah_covid_rawat = sumProperty(properties, "jumlah_covid_rawat");

  const jumlah_odp = sumProperty(properties, "jumlah_odp") - jumlah_covid;
  const jumlah_odp_pantau = sumProperty(properties, "jumlah_odp_pantau") - jumlah_covid;
  const jumlah_odp_selesai = sumProperty(properties, "jumlah_odp_selesai");

  const jumlah_pdp = sumProperty(properties, "jumlah_pdp") - jumlah_covid_rawat;
  const jumlah_pdp_rawat = sumProperty(properties, "jumlah_pdp_rawat") - jumlah_covid_rawat;
  const jumlah_pdp_sembuh = sumProperty(properties, "jumlah_pdp_sembuh");
  const jumlah_pdp_meninggal = sumProperty(properties, "jumlah_pdp_meninggal");

  const result = {
    jumlah_odp,
    jumlah_odp_pantau, 
    jumlah_odp_selesai,
    jumlah_pdp, 
    jumlah_pdp_rawat, 
    jumlah_pdp_sembuh,
    jumlah_pdp_meninggal,
    jumlah_covid,
    jumlah_covid_sembuh, 
    jumlah_covid_meninggal,
    jumlah_covid_isolasi,
    jumlah_covid_rawat
  }
  pages.push({
    url: "/",
    data: result,
  });
  return pages;
};
