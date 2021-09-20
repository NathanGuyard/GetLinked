import './styles.scss';

import { useDispatch } from 'react-redux';

import logo from './images/logo.png';
import menuClosed from './images/menu_closed.png';

const Header = () => {
  const dispatch = useDispatch();
  const handleMenu = () => {
    dispatch({
      type: 'TOGGLE_MENU',
    });
  };

  return (
    <div className="header">
      <div className="header__menu">
        <img src={logo} alt="logo" className="header__menu__logo" />
        <img src={menuClosed} alt="menu_logo" className="header__menu__burger" onClick={handleMenu} />
      </div>
    </div>
  );
};

export default Header;
