import { h, Component } from "preact";
import style from "./style";
import LayoutGrid from "preact-material-components/LayoutGrid";
import "preact-material-components/LayoutGrid/style.css";

class ContentStyle extends Component {
  render() {
    const items = this.props.items;
    return (
      <LayoutGrid>
        <LayoutGrid.Inner>
          <LayoutGrid.Cell cols="4">
            <article>
              <a>
                <h3>
                  {items.total_odp} ODP <span>{items.diff_total_odp}</span>
                </h3>
                <section>
                  <div>
                    <strong class={style.sembuh}>
                      Sembuh {items.odp_selesai} {items.diff_odp_selesai}
                    </strong>
                    <strong class={style.pantau}>
                      Pemantauan {items.odp_proses} {items.diff_odp_proses}
                    </strong>
                    <strong class={style.meninggal}>
                      Meninggal {items.covid_meninggal} {items.diff_covid_meninggal}
                    </strong>
                  </div>
                </section>
              </a>
            </article>
          </LayoutGrid.Cell>
          <LayoutGrid.Cell cols="4">
            <article>
              <a>
                <h3>
                  {items.total_pdp} PDP <span>{items.diff_total_pdp}</span>
                </h3>
                <section>
                  <div>
                    <strong class={style.sembuh}>
                      Sembuh {items.pdp_sembuh} {items.diff_pdp_sembuh}
                    </strong>
                    <strong class={style.pengawasan}>
                      Pengawasan {items.pdp_rawat} {items.diff_pdp_rawat}
                    </strong>
                    <strong class={style.meninggal}>
                      Meninggal {items.pdp_meninggal} {items.diff_pdp_meninggal}
                    </strong>
                  </div>
                </section>
              </a>
            </article>
          </LayoutGrid.Cell>
          <LayoutGrid.Cell cols="4">
            <article>
              <a>
                <h3>
                  {items.total_covid} COVID <span>{items.diff_total_covid}</span>
                </h3>
                <section>
                  <div>
                    <strong class={style.sembuh}>
                      Sembuh {items.covid_sembuh} {items.diff_covid_sembuh}
                    </strong>
                    <strong class={style.pengawasan}>
                      Pengawasan {items.covid_pengawasan} {items.diff_covid_pengawasan}
                    </strong>
                    <strong class={style.meninggal}>
                      Meninggal {items.covid_meninggal} {items.diff_covid_meninggal}
                    </strong>
                  </div>
                </section>
              </a>
            </article>
          </LayoutGrid.Cell>
        </LayoutGrid.Inner>
      </LayoutGrid>
    );
  }
}

export default ContentStyle;
