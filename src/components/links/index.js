import { h, Component } from "preact";
import LayoutGrid from "preact-material-components/LayoutGrid";
import "preact-material-components/LayoutGrid/style.css";
import style from "./style.css";

const ItemCard = (props) => {
  return props.links.map((item) => (
    <LayoutGrid.Cell cols="4">
      <a class={style.link} href={item.link} title={item.seo_title}>
        <div class={style.links}>{item.title}</div>
      </a>
    </LayoutGrid.Cell>
  ));
};

class Links extends Component {
  render() {
    const items = this.props.items
    return (
      <div>
        <h3>Shortcut Info Banyuwangi</h3>
        <LayoutGrid>
          <LayoutGrid.Inner>
            <ItemCard links={items.pemda} />
          </LayoutGrid.Inner>
        </LayoutGrid>
        <br />
        <h3>SOP Bisnis Banyuwangi</h3>
        <LayoutGrid>
          <LayoutGrid.Inner>
            <ItemCard links={items.sop} />
          </LayoutGrid.Inner>
        </LayoutGrid>
        <br />
        <h3>Pranala-pranala Penting</h3>
        <LayoutGrid>
          <LayoutGrid.Inner>
            <ItemCard links={items.other} />
          </LayoutGrid.Inner>
        </LayoutGrid>
      </div>
    );
  }
}

export default Links;
