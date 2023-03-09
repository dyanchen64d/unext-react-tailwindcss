import React from 'react';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import MainHeaderInfo from '../components/MainHeaderInfo';

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="app-main lg:ml-[256px] bg-main-bg">
        <div className="main-header">
          <div className="main-header-bg"></div>
          <MainHeaderInfo />
        </div>
        <div className="h-[2000px]"></div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
