import { h } from 'preact';
import style from "./style";
import ContentStyle from "../../components/content-style"
import Footer from "../../components/footer"

const Home = (props) => {
  return (
    <div class={style.home}>
      <p>Data Terkini COVID-19 Di Banyuwangi Versi Cepat & Hemat Kuota</p>
      <ContentStyle items={props.value} />
      <Footer/>
    </div>
  );
};

export default Home;
