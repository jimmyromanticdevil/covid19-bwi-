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
                {items.jumlah_odp} ODP <span>(Orang Dalam Pemantauan)</span>
              </h3>
              <section>
                <div>
                  <strong class={style.sembuh}><b>{items.jumlah_odp_selesai}</b> sembuh</strong>
                  <strong class={style.pantau}><b>{items.jumlah_odp_pantau}</b> dalam pemantauan</strong>
                </div>
              </section>
            </a>
          </article>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <article>
            <a>
              <h3>
                {items.jumlah_pdp} PDP <span>(Pasien Dalam Pengawasan)</span>
              </h3>
              <section>
                <div>
                  <strong class={style.sembuh}><b>{items.jumlah_pdp_sembuh}</b> sembuh</strong>
                  <strong class={style.dirawat}><b>{items.jumlah_pdp_rawat}</b> dirawat</strong>
                  <strong class={style.meninggal}><b>{items.jumlah_pdp_meninggal}</b> meninggal</strong>
                </div>
              </section>
            </a>
          </article>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <article>
            <a>
              <h3>
                {items.jumlah_covid} COVID <span>(Positif Covid)</span>
              </h3>
              <section>
                <div>
                  <strong class={style.sembuh}><b>{items.jumlah_covid_sembuh}</b> sembuh</strong>
                  <strong class={style.dirawat}><b>{items.jumlah_covid_rawat}</b> dirawat</strong>
                  <strong class={style.meninggal}><b>{items.jumlah_covid_meninggal}</b> meninggal</strong>
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
