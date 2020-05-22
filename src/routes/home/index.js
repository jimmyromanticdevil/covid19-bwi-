import style from "./style";
import ContentStyle from "../../components/content-style"

const Home = (props) => {
  return (
    <div class={style.home}>
      <h1></h1>
      <p>Data Terkini COVID-19 Di Banyuwangi Versi Akses Cepat</p>
      <ContentStyle items={props.value} />
    </div>
  );
};

export default Home;
