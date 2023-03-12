import React from 'react';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MainHeaderBgImage from '../components/MainHeaderBgImage';

import MainHeaderInfo from '../components/MainHeaderInfo';
import Slider from '../components/Slider';

const data = [
  {
    url: 'https://imgc.nxtv.jp/img/info/titspot/00066/SID0066846_fwxga.png?output-format=jpg&output-quality=70&resize=1000:*',
  },
  {
    url: 'https://imgc.nxtv.jp/img/info/titspot/00072/SID0072632_fwxga.png?output-format=jpg&output-quality=70&resize=1000:*',
  },
  {
    url: 'https://imgc.nxtv.jp/img/info/titspot/00029/SID0029295_fwxga.png?output-format=jpg&output-quality=70&resize=1000:*',
  },
  {
    url: 'https://imgc.nxtv.jp/img/info/titspot/00037/SID0037677_fwxga.png?output-format=jpg&output-quality=70&resize=1000:*',
  },
  {
    url: 'https://imgc.nxtv.jp/img/info/titspot/00010/SID0010909_fwxga.png?output-format=jpg&output-quality=70&resize=1000:*',
  },
];

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <main className=" box-border lg:ml-[255px] bg-main-bg relative">
        <MainHeaderBgImage />
        <MainHeaderInfo />
        <Slider itemWidth="50%" items={data} />
        <div className="h-[2000px] box-border"></div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
