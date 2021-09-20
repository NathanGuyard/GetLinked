import './styles.scss';

import { useSelector, useDispatch } from 'react-redux';

import logo from './images/logo.png';
import menuClosed from './images/menu_closed.png';
import menuOpenedIcon from './images/menu_opened.png';

const Header = () => {
  const dispatch = useDispatch();
  const handleMenu = () => {
    dispatch({
      type: 'TOGGLE_MENU',
    });
  };

  const menuOpened = useSelector((state) => state.menuOpened);

  return (
    <div className="header">
      <div className="header__menu">
        <img src={logo} alt="logo" className="header__menu__logo" />
        {!menuOpened && (<img src={menuClosed} alt="menu_logo" className="header__menu__burger" onClick={handleMenu} />)}
        {menuOpened && (<img src={menuOpenedIcon} alt="menu_logo" className="header__menu__burger header__menu__burger__cross" onClick={handleMenu} />)}
      </div>
      {menuOpened && (
        <div className="header__menu-opened">
          <ul className="header__menu-opened__ul">
            <li className="header__menu-opened__ul__li header__menu-opened__ul__li__active">Accueil</li>
            <li className="header__menu-opened__ul__li">Artistes</li>
            <li className="header__menu-opened__ul__li">Evenements</li>
            <li className="header__menu-opened__ul__li">Organisateurs</li>
            <li className="header__menu-opened__ul__li">Connexion</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
