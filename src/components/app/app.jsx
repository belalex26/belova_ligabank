import React from 'react';
import Header from '../header/header';
import Promo from '../promo/promo';
import Convert from '../converter/converter';
import Footer from '../footer/footer';

const App = () => {
    return (
      <>
        <Header />
        <Promo />
        <Convert />
        <Footer />
      </>
    );
  };

export default App;