import React from 'react';
import Menu from '../menu/menu';

const Header = () => {
  return (
    <header className="header">
        <Menu />
        <a className="header__navigation-bar" href="#">
            Войти в Интернет-банк
        </a>
    </header>
  );
};

export default Header;