import '../styles/navbar.scss'
import { Link } from "react-router-dom";

const Nav = () => {
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
      </ul>
    </nav>
  );
};

export default Nav;
