import React, { useEffect, useState, useRef } from 'react';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MainHeaderBgImage from '../components/MainHeaderBgImage';

import MainHeaderInfo from '../components/MainHeaderInfo';
import Slider from '../components/Slider';

const d = [
  {
    title: 'スタッフおすすめ見放題傑作選！',
    subtitle:
      '見放題でこんなに楽しめる！各ジャンルから選りすぐりの名作、傑作、話題の新着をピックアップ。',
    items: [
      {
        url: 'https://imgc.nxtv.jp/img/info/tit/00066/SID0066846.png?output-format=webp&output-quality=60&resize=336:*',
      },
      {
        url: 'https://imgc.nxtv.jp/img/info/tit/00072/SID0072632.png?output-format=webp&output-quality=60&resize=336:*',
      },
      {
        url: 'https://imgc.nxtv.jp/img/info/tit/00029/SID0029295.png?output-format=webp&output-quality=60&resize=336:*',
      },
      {
        url: 'https://imgc.nxtv.jp/img/info/tit/00060/SID0060944.png?output-format=webp&output-quality=60&resize=336:*',
      },
      {
        url: 'https://imgc.nxtv.jp/img/info/tit/00019/SID0019823.png?output-format=webp&output-quality=60&resize=336:*',
      },
      {
        url: 'https://imgc.nxtv.jp/img/info/tit/00062/SID0062103.png?output-format=webp&output-quality=60&resize=336:*',
      },
    ],
  },
  {
    title: '劇場公開＆放送から間もない最新作',
    subtitle: 'ジャンルを問わず、ハイクオリティな最新作が勢揃い！',
    items: [
      {
        url: 'https://imgc.nxtv.jp/img/info/tit/00079/SID0079345.png?output-format=webp&output-quality=60&resize=336:*',
      },
      {
        url: 'https://imgc.nxtv.jp/img/info/tit/00079/SID0079057.png?output-format=webp&output-quality=60&resize=336:*',
      },
      {
        url: 'https://imgc.nxtv.jp/img/info/tit/00079/SID0079000.png?output-format=webp&output-quality=60&resize=336:*',
      },
      {
        url: 'https://imgc.nxtv.jp/img/info/tit/00078/SID0078824.png?output-format=webp&output-quality=60&resize=336:*',
      },
      {
        url: 'https://imgc.nxtv.jp/img/info/tit/00078/SID0078173.png?output-format=webp&output-quality=60&resize=336:*',
      },
      {
        url: 'https://imgc.nxtv.jp/img/info/tit/00079/SID0079005.png?output-format=webp&output-quality=60&resize=336:*',
      },
    ],
  },
  {
    title: '「小説家になろう」発アニメがすごい！',
    subtitle:
      'あの作品も、この作品も、小説投稿WEBサイトで発表された!?ノリにのってる「なろう小説」アニメ',
    items: [
      {
        url: 'https://imgc.nxtv.jp/img/info/tit/00077/SID0077288.png?output-format=webp&output-quality=60&resize=336:*',
      },
      {
        url: 'https://imgc.nxtv.jp/img/info/tit/00077/SID0077104.png?output-format=webp&output-quality=60&resize=336:*',
      },
      {
        url: 'https://imgc.nxtv.jp/img/info/tit/00076/SID0076909.png?output-format=webp&output-quality=60&resize=336:*',
      },
      {
        url: 'https://imgc.nxtv.jp/img/info/tit/00076/SID0076899.png?output-format=webp&output-quality=60&resize=336:*',
      },
      {
        url: 'https://imgc.nxtv.jp/img/info/tit/00073/SID0073161.png?output-format=webp&output-quality=60&resize=336:*',
      },
      {
        url: 'https://imgc.nxtv.jp/img/info/tit/00073/SID0073142.png?output-format=webp&output-quality=60&resize=336:*',
      },
    ],
  },
];

function Home() {
  const mainRef = useRef();

  const [containerWidth, setContainerWidth] = useState('');

  useEffect(() => {
    const onResize = () => {
      const { width } = getComputedStyle(mainRef.current);
      setContainerWidth(width);
    };

    onResize();

    addEventListener('resize', onResize);
    return () => {
      removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <main
        className=" box-border lg:ml-[255px] bg-main-bg relative pb-[50px]"
        ref={mainRef}
      >
        <MainHeaderBgImage />
        <MainHeaderInfo />
        {d.map((data, idx) => (
          <Slider
            items={data.items}
            containerWidth={containerWidth}
            title={data.title}
            subtitle={data.subtitle}
            key={idx}
          />
        ))}
        {d.map((data, idx) => (
          <Slider
            items={data.items}
            containerWidth={containerWidth}
            title={data.title}
            subtitle={data.subtitle}
            key={idx}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default Home;
