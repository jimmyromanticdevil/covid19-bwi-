import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>COVID19-BWI</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<a href="https://corona.banyuwangikab.go.id/">BanyuwangiKab</a>
			<a href="https://github.com/jimmyromanticdevil/covid19-bwi">Github</a>
		</nav>
	</header>
);

export default Header;
