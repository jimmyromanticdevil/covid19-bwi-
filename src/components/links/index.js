import { h } from "preact";
import LayoutGrid from "preact-material-components/LayoutGrid";
import "preact-material-components/LayoutGrid/style.css";
import style from "./style.css";

function Pemda() {
  return (
    <LayoutGrid>
      <LayoutGrid.Inner>
        <LayoutGrid.Cell cols="4">
          <a
            class={style.link}
            href="https://corona.banyuwangikab.go.id/#peta-sebaran"
          >
            <div class={style.links}>Peta sebaran covid di Banyuwangi</div>
          </a>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <a
            class={style.link}
            href="https://corona.banyuwangikab.go.id/#kesehatan"
          >
            <div class={style.links}>
              Fasilitas Kesehatan & Rumah Isolasi
            </div>
          </a>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <a
            class={style.link}
            href="https://corona.banyuwangikab.go.id/front/kebijakan"
          >
            <div class={style.links}>
              Kebijakan pemerintah daerah dan pusat
            </div>
          </a>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <a
            class={style.link}
            href="https://corona.banyuwangikab.go.id/pelaporanbansosbanyuwangi"
          >
            <div class={style.links}>Pelaporan online bansos COVID19</div>
          </a>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <a class={style.link} href="tel:112">
            <div class={style.links}>Call center 112</div>
          </a>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <a
            class={style.link}
            href="https://web.facebook.com/InformasiTentangBanyuwangi"
          >
            <div class={style.links}>Informasi Banyuwangi di Facebook</div>
          </a>
        </LayoutGrid.Cell>
      </LayoutGrid.Inner>
    </LayoutGrid>
  );
}

function OtherLinks() {
  return (
    <LayoutGrid>
      <LayoutGrid.Inner>
        <LayoutGrid.Cell cols="4">
          <a
            class={style.link}
            href="https://covid19.go.id/"
          >
            <div class={style.links}>
               Situs Resmi Pemerintah untuk COVID-19
            </div>
          </a>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <a class={style.link} href="https://kawalcovid19.id/">
            <div class={style.links}>
              Informasi Terkini COVID-19 di Indonesia
            </div>
          </a>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <a
            class={style.link}
            href="https://turnbackhoax.id/2020/02/06/kompilasi-post-periksa-fakta-mafindo-berkaitan-dengan-virus-corona/"
          >
            <div class={style.links}>Kompilasi TurnBackHoax COVID-19</div>
          </a>
        </LayoutGrid.Cell>
      </LayoutGrid.Inner>
    </LayoutGrid>
  );
}
const Links = () => {
  return (
    <div>
      <h3>Shortcut Info Di Banyuwangi</h3>
      <Pemda />
      <br/>
      <h3>Pranala-pranala Penting</h3>
      <OtherLinks/>
    </div>
  );
};

export default Links;
