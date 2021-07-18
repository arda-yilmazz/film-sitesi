import '../styles/navbar.scss'
import Search from './Search'
import { Link } from "react-router-dom";

const Nav = ({search, setSearch}) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Anasayfa</Link>
        </li>
        <li>
          <Link to="/hakkinda">Hakkında</Link>
        </li>
        <li>
          <Link to="/filmler">Filmler</Link>
        </li>
        <li>
          <Link to="/kategoriler">Kategoriler</Link>
        </li>
        <li>
          <Search search={search} setSearch={setSearch} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
