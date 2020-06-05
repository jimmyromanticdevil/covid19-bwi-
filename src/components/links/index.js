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
            href="https://rebrand.ly/covid-19bwi-peta-sebaran"
            title="Peta sebaran covid di Banyuwangi"
          >
            <div class={style.links}>Peta sebaran covid di Banyuwangi</div>
          </a>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <a
            class={style.link}
            href="https://rebrand.ly/covid-19bwi-fasilitas-kesehatan"
            title="Fasilitas Kesehatan & Rumah Isolasi di banyuwangi"
          >
            <div class={style.links}>Fasilitas Kesehatan & Rumah Isolasi</div>
          </a>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <a
            class={style.link}
            href="https://rebrand.ly/covid-19bwi-kebijakan"
            title="Kebijakan pemerintah daerah dan pusat Banyuwangi"
          >
            <div class={style.links}>Kebijakan pemerintah daerah dan pusat</div>
          </a>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <a
            class={style.link}
            href="https://rebrand.ly/covid-19bwi-bansos"
            title="Pelaporan online bansos COVID-19 Banyuwangi"
          >
            <div class={style.links}>Pelaporan online bansos COVID19</div>
          </a>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <a
            class={style.link}
            href="tel:112"
            title="Call center 112 banyuwangi"
          >
            <div class={style.links}>Call center 112</div>
          </a>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <a
            class={style.link}
            href="https://rebrand.ly/covid-19bwi-infobwi"
            title="Facebook Informasi Banyuwangi"
          >
            <div class={style.links}>Facebook Informasi Banyuwangi</div>
          </a>
        </LayoutGrid.Cell>
      </LayoutGrid.Inner>
    </LayoutGrid>
  );
}

function SOP() {
  return (
    <LayoutGrid>
      <LayoutGrid.Inner>
        <LayoutGrid.Cell cols="4">
          <a
            class={style.link}
            href="https://rebrand.ly/sop-pariwisata"
            title="New normal SOP destinasi wisata di banyuwangi"
          >
            <div class={style.links}>Destinasi Wisata</div>
          </a>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <a
            class={style.link}
            href="https://rebrand.ly/sop-hotel-homestay"
            title="New normal SOP hotel dan homestay di banyuwangi"
          >
            <div class={style.links}>Hotel / Homestay</div>
          </a>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <a
            class={style.link}
            href="https://rebrand.ly/sop-restoran-rumah-makan"
            title="New normal SOP restoran dan rumah makan di banyuwangi"
          >
            <div class={style.links}>Restoran / Rumah Makan</div>
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
            href="https://rebrand.ly/situs-covid-pemerintah"
            title="Situs resmi pemerintah indonesia untuk covid-19"
          >
            <div class={style.links}>Situs Resmi Pemerintah untuk COVID-19</div>
          </a>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <a
            class={style.link}
            href="https://rebrand.ly/kawalcovid"
            title="Kawalcovid - Informasi Terkini COVID-19 di Indonesia"
          >
            <div class={style.links}>
              Informasi Terkini COVID-19 di Indonesia
            </div>
          </a>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <a class={style.link} href="https://rebrand.ly/turnbackhoax-id"  title="Kompilasi TurnBackHoax COVID-19">
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
      <h3>Shortcut Info Banyuwangi</h3>
      <Pemda />
      <br />
      <h3>SOP Bisnis Banyuwangi</h3>
      <SOP />
      <br />
      <h3>Pranala-pranala Penting</h3>
      <OtherLinks />
    </div>
  );
};

export default Links;
