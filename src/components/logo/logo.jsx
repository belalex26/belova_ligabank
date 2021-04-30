import React from 'react';
import logo from '../../images/logo.svg';

const Logo = () => {
  return (
    <a className="logo">
      <img className="logo__image" src={logo} alt="Лига-Ьанк" width="149" height="25" />
    </a>
  );
};

export default Logo;