import React from 'react';


const SocialBar = () => {
  return (
    <ul className="social-bar">
        <li className="social-bar__item">
            <a className="social-bar__link social-bar__fb" href="#" aria-label="Facebook"></a>
        </li>
        <li className="social-bar__item">
            <a className="social-bar__link social-bar__insta" href="#" aria-label="Instagram"></a>
        </li>
        <li className="social-bar__item">
            <a className="social-bar__link social-bar__tw" href="#" aria-label="Twitter"></a>
        </li>
        <li className="social-bar__item">
            <a className="social-bar__link social-bar__youtube" href="#" aria-label="Youtube"></a>
        </li>
    </ul>
  );
};

export default SocialBar;