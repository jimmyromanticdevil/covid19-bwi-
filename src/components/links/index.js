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
            title="Peta sebaran covid di Banyuwangi"
          >
            <div class={style.links}>Peta sebaran covid</div>
          </a>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <a
            class={style.link}
            href="https://corona.banyuwangikab.go.id/#kesehatan"
            title="Fasilitas Kesehatan & Rumah Isolasi di banyuwangi"
          >
            <div class={style.links}>Fasilitas Kesehatan & Rumah Isolasi</div>
          </a>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <a
            class={style.link}
            href="https://corona.banyuwangikab.go.id/front/kebijakan"
            title="Kebijakan pemerintah daerah dan pusat Banyuwangi"
          >
            <div class={style.links}>Kebijakan pemerintah daerah dan pusat</div>
          </a>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <a
            class={style.link}
            href="https://corona.banyuwangikab.go.id/pelaporanbansosbanyuwangi"
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
            href="https://www.facebook.com/InformasiTentangBanyuwangi"
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
            href="https://drive.google.com/file/d/1NPXcwliZnXqskjB2KNu6Ck-GnrYTXVjz/view"
            title="New normal SOP destinasi wisata di banyuwangi"
          >
            <div class={style.links}>Destinasi Wisata</div>
          </a>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <a
            class={style.link}
            href="https://drive.google.com/file/d/1NHt8m2iyaXA8HiKuwCVhQcN83Osr8Hvl/view?fbclid=IwAR1tDG9ZopPuDl1-0WKG2d_EMw0NhqEHgZiGwHX6neyNdm67uuLOxIa_kGc"
            title="New normal SOP hotel dan homestay di banyuwangi"
          >
            <div class={style.links}>Hotel / Homestay</div>
          </a>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <a
            class={style.link}
            href="https://drive.google.com/file/d/1N8VAHo0URkTY1XaoXNN__yujXHnYFCgN/view?fbclid=IwAR0ZId6qKKfaM9BY0qIqiENSmyAr6_LlyBWWw4NH6rXbZCSWxh_T1BQA0rk"
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
            href="https://covid19.go.id/"
            title="Situs resmi pemerintah indonesia untuk covid-19"
          >
            <div class={style.links}>Situs Resmi Pemerintah untuk COVID-19</div>
          </a>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <a
            class={style.link}
            href="https://kawalcovid19.id/"
            title="Kawalcovid - Informasi Terkini COVID-19 di Indonesia"
          >
            <div class={style.links}>
              Informasi Terkini COVID-19 di Indonesia
            </div>
          </a>
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <a class={style.link} href="https://turnbackhoax.id/2020/02/06/kompilasi-post-periksa-fakta-mafindo-berkaitan-dengan-virus-corona/"  title="Kompilasi TurnBackHoax COVID-19">
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
