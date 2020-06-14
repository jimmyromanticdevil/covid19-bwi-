import { h } from 'preact';
import style from "./style";
import ContentStyle from "../../components/content-style"
import About from "../../components/about"
import Links from "../../components/links"

const Home = (props) => {
  return (
    <div class={style.home}>
      <p>Data terkini COVID-19 di Banyuwangi versi cepat & hemat kuota.</p>
      <ContentStyle items={props.value} />
      <Links/>
      <About/>
    </div>
  );
};

export default Home;
