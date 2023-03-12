import React, { useEffect, useState, useRef } from 'react';

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
        <Slider
          items={data}
          containerWidth={containerWidth}
          title="スタッフおすすめ見放題傑作選！"
          subtitle="見放題でこんなに楽しめる！各ジャンルから選りすぐりの名作、傑作、話題の新着をピックアップ。"
        />
        <Slider
          items={data}
          containerWidth={containerWidth}
          title="スタッフおすすめ見放題傑作選！"
          subtitle="見放題でこんなに楽しめる！各ジャンルから選りすぐりの名作、傑作、話題の新着をピックアップ。"
        />
        <Slider
          items={data}
          containerWidth={containerWidth}
          title="スタッフおすすめ見放題傑作選！"
          subtitle="見放題でこんなに楽しめる！各ジャンルから選りすぐりの名作、傑作、話題の新着をピックアップ。"
        />
        <Slider
          items={data}
          containerWidth={containerWidth}
          title="スタッフおすすめ見放題傑作選！"
          subtitle="見放題でこんなに楽しめる！各ジャンルから選りすぐりの名作、傑作、話題の新着をピックアップ。"
        />
        <Slider
          items={data}
          containerWidth={containerWidth}
          title="スタッフおすすめ見放題傑作選！"
          subtitle="見放題でこんなに楽しめる！各ジャンルから選りすぐりの名作、傑作、話題の新着をピックアップ。"
        />
        <Slider
          items={data}
          containerWidth={containerWidth}
          title="スタッフおすすめ見放題傑作選！"
          subtitle="見放題でこんなに楽しめる！各ジャンルから選りすぐりの名作、傑作、話題の新着をピックアップ。"
        />
        <Slider
          items={data}
          containerWidth={containerWidth}
          title="スタッフおすすめ見放題傑作選！"
          subtitle="見放題でこんなに楽しめる！各ジャンルから選りすぐりの名作、傑作、話題の新着をピックアップ。"
        />
        <Slider
          items={data}
          containerWidth={containerWidth}
          title="スタッフおすすめ見放題傑作選！"
          subtitle="見放題でこんなに楽しめる！各ジャンルから選りすぐりの名作、傑作、話題の新着をピックアップ。"
        />
        <Slider
          items={data}
          containerWidth={containerWidth}
          title="スタッフおすすめ見放題傑作選！"
          subtitle="見放題でこんなに楽しめる！各ジャンルから選りすぐりの名作、傑作、話題の新着をピックアップ。"
        />
      </main>
      <Footer />
    </>
  );
}

export default Home;
