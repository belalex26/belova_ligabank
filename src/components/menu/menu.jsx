import React from 'react';
import Logo from '../logo/logo';

const Menu = () => {
  return (
    <nav className="menu">
        <Logo />
        <ul className="menu__list">
          <li className="menu__item">
            <a className="menu__link" href="/services">
              Услуги
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/credit">
              Рассчитать кредит
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link menu__link--active" href="/">
              Конвертер валют
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/contacts">
              Контакты
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/support">
              Задать вопрос
            </a>
          </li>
      </ul>
      <a className="menu__navigation-bar" href="/login">
            Войти в Интернет-банк
      </a>
    </nav>
  );
};

export default Menu;