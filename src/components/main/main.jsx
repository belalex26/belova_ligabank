import React from 'react';

import Header from '../header/header';
import Promo from '../promo/promo';
import Convert from '../converter/converter';
import Footer from '../footer/footer';

const Main = () => {
  return (
      <>
        <Header />
        <main className="main">
            <Promo />
            <Convert />
        </main>
        <Footer />
    </>
  );
};

export default Main;