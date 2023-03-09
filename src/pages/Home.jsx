import React from 'react';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MainHeaderBgImage from '../components/MainHeaderBgImage';

import MainHeaderInfo from '../components/MainHeaderInfo';

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <main className=" box-border lg:ml-[255px] bg-main-bg relative">
        <MainHeaderBgImage />
        <MainHeaderInfo />
        <div className="h-[2000px] box-border"></div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
