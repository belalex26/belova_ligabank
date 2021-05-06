import React from 'react';

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <h1 className="promo__title">Лига Банк</h1>
        <p className="promo__subtitle">Кредиты на любой случай</p>
        <a className="promo__btn" href="/credit">Рассчитать кредит</a>
      </div>  
    </section>
  );
};

export default Promo;