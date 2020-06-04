import { h, Component } from "preact";
import style from "./style";
import LayoutGrid from "preact-material-components/LayoutGrid";
import "preact-material-components/LayoutGrid/style.css";
import Snackbar from "preact-material-components/Snackbar";
import "preact-material-components/Snackbar/style.css";

class ContentStyle extends Component {
  render() {
    const items = this.props.items;
    return (
      <LayoutGrid>
        <LayoutGrid.Inner>
          <LayoutGrid.Cell cols="4">
            <article>
              <a
                raised={true}
                onClick={() => {
                  this.bar.MDComponent.show({
                    message: `ODP ${items.total_odp} (+${items.diff_total_odp}) = S ${items.odp_selesai}(+${items.diff_odp_selesai}), P ${items.odp_proses}(+${items.diff_odp_proses}), M ${items.covid_meninggal}(+${items.diff_covid_meninggal})`,
                  });
                }}
              >
                <h3>
                  {items.total_odp} ODP <span>(Orang Dalam Pemantauan)</span>
                </h3>
                <section>
                  <div>
                    <strong class={style.sembuh}>
                      Sembuh <b>{items.odp_selesai}</b>
                    </strong>
                    <strong class={style.pantau}>
                      Pemantauan <b>{items.odp_proses}</b>
                    </strong>
                    <strong class={style.meninggal}>
                      Meninggal <b>{items.covid_meninggal}</b>
                    </strong>
                  </div>
                </section>
              </a>
            </article>
          </LayoutGrid.Cell>
          <LayoutGrid.Cell cols="4">
            <article>
              <a
                raised={true}
                onClick={() => {
                  this.bar.MDComponent.show({
                    message: `PDP ${items.total_pdp} (+${items.diff_total_pdp}) = S ${items.pdp_sembuh}(+${items.diff_pdp_sembuh}), P ${items.pdp_rawat}(+${items.diff_pdp_rawat}), M ${items.pdp_meninggal}(+${items.diff_pdp_meninggal})`,
                  });
                }}
              >
                <h3>
                  {items.total_pdp} PDP <span>(Pasien Dalam Pengawasan)</span>
                </h3>
                <section>
                  <div>
                    <strong class={style.sembuh}>
                      Sembuh <b>{items.pdp_sembuh}</b>
                    </strong>
                    <strong class={style.pengawasan}>
                      Pengawasan <b>{items.pdp_rawat}</b>
                    </strong>
                    <strong class={style.meninggal}>
                      Meninggal <b>{items.pdp_meninggal}</b>
                    </strong>
                  </div>
                </section>
              </a>
            </article>
          </LayoutGrid.Cell>
          <LayoutGrid.Cell cols="4">
            <article>
              <a
                raised={true}
                onClick={() => {
                  this.bar.MDComponent.show({
                    message: `COVID ${items.total_covid} (+${items.diff_total_covid}) = S ${items.covid_sembuh}(+${items.diff_covid_sembuh}), P ${items.covid_pengawasan}(+${items.diff_covid_pengawasan}), M ${items.covid_meninggal}(+${items.diff_covid_meninggal})`,
                  });
                }}
              >
                <h3>
                  {items.total_covid} COVID <span>(Positif Covid)</span>
                </h3>
                <section>
                  <div>
                    <strong class={style.sembuh}>
                      Sembuh <b>{items.covid_sembuh}</b>
                    </strong>
                    <strong class={style.pengawasan}>
                      Pengawasan <b>{items.covid_pengawasan}</b>
                    </strong>
                    <strong class={style.meninggal}>
                      Meninggal <b>{items.covid_meninggal}</b>
                    </strong>
                  </div>
                </section>
              </a>
            </article>
          </LayoutGrid.Cell>
        </LayoutGrid.Inner>
        <Snackbar
          ref={(bar) => {
            this.bar = bar;
          }}
        />
      </LayoutGrid>
    );
  }
}

export default ContentStyle;
