import { h } from 'preact';
import style from "./style";
import LayoutGrid from "preact-material-components/LayoutGrid";
import "preact-material-components/LayoutGrid/style.css";

const ContentStyle = (props) => {
  const {covid_pengawasan, covid_rawat, ...items} = props.items;
  const total_pengawasan = +covid_pengawasan + +covid_rawat
  return (
    <LayoutGrid>
      <LayoutGrid.Inner>
        <LayoutGrid.Cell cols="4">
          <article>
            <a>
              <h3>
                {items.total_odp} ODP <span>(Orang Dalam Pemantauan)</span>
              </h3>
              <section>
                <div>
                  <strong class={style.sembuh}>Sembuh <b>{items.odp_selesai}</b></strong>
                  <strong class={style.pantau}>Pemantauan <b>{items.odp_proses}</b></strong>
                  <strong class={style.meninggal}>Meninggal <b>{items.covid_meninggal}</b></strong>
                </div>
              </section>
            </a>
          </article>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <article>
            <a>
              <h3>
                {items.total_pdp} PDP <span>(Pasien Dalam Pengawasan)</span>
              </h3>
              <section>
                <div>
                  <strong class={style.sembuh}>Sembuh <b>{items.pdp_sembuh}</b></strong>
                  <strong class={style.pengawasan}>Pengawasan <b>{items.pdp_rawat}</b></strong>
                  <strong class={style.meninggal}>Meninggal <b>{items.pdp_meninggal}</b></strong>
                </div>
              </section>
            </a>
          </article>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <article>
            <a>
              <h3>
                {items.total_covid} COVID <span>(Positif Covid)</span>
              </h3>
              <section>
                <div>
                  <strong class={style.sembuh}>Sembuh <b>{items.covid_sembuh}</b></strong>
                  <strong class={style.pengawasan}>Pengawasan <b>{total_pengawasan}</b></strong>
                  <strong class={style.meninggal}>Meninggal <b>{items.covid_meninggal}</b></strong>
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
