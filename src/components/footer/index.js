import { h } from 'preact';
import style from "./style";

export default function Footer() {
  return (
    <div class={style.footer}>
      <h3>Tentang Situs</h3>
      <p>
        Website yang menyajikan perkembangan COVID-19 di Banyuwangi dengan
        penampilan ringan dan sederhana agar tidak menghamburkan kuota data.
      </p>
      <p>
        Sumber data:{" "}
        <a href="https://corona.banyuwangikab.go.id/">Banyuwangikab.go.id</a>.
        Diperbarui setiap jam 12 malam.
      </p>
      <p>
        Untuk informasi lebih lengkap seputar covid di Indonesia:{" "}
        <a href="https://kawalcovid19.id/">Kawal COVID-19</a> dan{" "}
        <a href="https://bnpb.go.id/">BNPB</a>. Untuk penyebaran internasional:{" "}
        <a href="https://bing.com/covid">bing.com/covid</a> dan{" "}
        <a href="https://bing.com/covid">epidemic-stats.com</a>.
      </p>
      <p>
        <i>
          Situs ini terinspirasi dari{" "}
          <a href="https://kabarvirus.com/">Kabarvirus.com</a>{" "}
        </i>
      </p>
    </div>
  );
};

