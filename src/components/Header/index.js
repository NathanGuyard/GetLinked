import './styles.scss';
import logo from './images/logo.png';
import menuClosed from './images/menu_closed.png';

const Header = () => (
  <div className="header">
    <div className="header__menu">
      <img src={logo} alt="logo" className="header__menu__logo" />
      <img src={menuClosed} alt="menu_logo" className="header__menu__burger" />
    </div>
  </div>
);

export default Header;
