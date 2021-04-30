import React from 'react';
import Logo from '../logo/logo';

const Menu = () => {
  return (
    <nav className="menu">
        <Logo />
        <ul className="menu__list">
          <li className="menu__item">
            <a className="menu__link" href="#">
              Услуги
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Рассчитать кредит
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link menu__link--active" href="#">
              Конвертер валют
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Контакты
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Задать вопрос
            </a>
          </li>
      </ul>
    </nav>
  );
};

export default Menu;