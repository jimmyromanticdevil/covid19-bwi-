import { h } from 'preact';
import style from "./style";
import LayoutGrid from "preact-material-components/LayoutGrid";
import "preact-material-components/LayoutGrid/style.css";

const ContentStyle = (props) => {
  const items = props.items;
  return (
    <LayoutGrid>
      <LayoutGrid.Inner>
        <LayoutGrid.Cell cols="4">
          <article>
            <a>
              <h3>
                {items.jumlah_odp} ODP <span>(ORANG DALAM PEMANTAUAN)</span>
              </h3>
              <section>
                <div>
                  <date>Sembuh: {items.jumlah_odp_selesai}</date>
                  <strong>Pemantauan: {items.jumlah_odp_pantau}</strong>
                </div>
              </section>
            </a>
          </article>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <article>
            <a>
              <h3>
                {items.jumlah_pdp} PDP <span>(PASIEN DALAM PENGAWASAN)</span>
              </h3>
              <section>
                <div>
                  <date>Sembuh: {items.jumlah_pdp_sembuh}</date>
                  <strong>Dirawat: {items.jumlah_pdp_rawat}</strong>
                  <strong>Meninggal: {items.jumlah_pdp_meninggal}</strong>
                </div>
              </section>
            </a>
          </article>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <article>
            <a>
              <h3>
                {items.jumlah_covid} COVID <span>(POSITIF COVID)</span>
              </h3>
              <section>
                <div>
                  <date>Sembuh: {items.jumlah_covid_sembuh}</date>
                  <strong>Dirawat: {items.jumlah_covid_rawat}</strong>
                  <strong>Pengawasan: {items.jumlah_covid_isolasi}</strong>
                  <strong>Meninggal: {items.jumlah_covid_meninggal}</strong>
                </div>
              </section>
            </a>
          </article>
        </LayoutGrid.Cell>
      </LayoutGrid.Inner>
    </LayoutGrid>
  );
};

export default ContentStyle;
