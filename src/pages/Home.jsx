import React, { useEffect, useState, useRef } from 'react';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MainHeaderBgImage from '../components/MainHeaderBgImage';

import MainHeaderInfo from '../components/MainHeaderInfo';
import Slider from '../components/Slider';
import { useSelector, useDispatch } from 'react-redux';

import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { updateData } from '../store/homeSlice';

function Home() {
  const { data } = useSelector((state) => state.home);

  const dispatch = useDispatch();

  const mainRef = useRef();

  const [containerWidth, setContainerWidth] = useState('');

  const { setLastNode } = useIntersectionObserver(updateDataList);

  function updateDataList() {
    // console.log('updateDataList');
    dispatch(updateData());
  }

  useEffect(() => {
    const node = mainRef.current.children;
    const lastNode = node[node.length - 1];
    // console.log('mainRef.current.children', node);
    setLastNode(lastNode);
  }, [data]);

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

        {data.map((d, idx) => (
          <Slider
            items={d.items}
            containerWidth={containerWidth}
            title={d.title}
            subtitle={d.subtitle}
            key={idx}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default Home;
