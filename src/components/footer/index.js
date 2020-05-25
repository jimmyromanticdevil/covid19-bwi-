import { h } from 'preact';
import style from "./style";

export default function Footer() {
  return (
    <div class={style.footer}>
      <h3>Tentang Situs</h3>
      <p>
        Website yang menyajikan perkembangan COVID-19 di Banyuwangi dengan
        penampilan ringan dan sederhana agar tidak menghamburkan kuota data. {" "}<br/>Kode sumber: <a href="https://github.com/jimmyromanticdevil/covid19-bwi">github.com/jimmyromanticdevil/covid19-bwi</a>.
      </p>
      <p>
        Sumber data:{" "}
        <a href="https://corona.banyuwangikab.go.id/">corona.banyuwangikab.go.id</a>.
        Diperbarui setiap jam 7.10 malam.
      </p>
      <p>
        Untuk informasi lebih lengkap seputar covid di Indonesia:{" "}
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
      <p>
        <a href="https://api.whatsapp.com/send?phone=6282338632990&text=Halo">Contact me </a>
      </p>
    </div>
  );
};

