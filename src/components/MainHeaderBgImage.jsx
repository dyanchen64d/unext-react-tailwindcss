import React, { useRef, useState, useEffect } from 'react';

const images = [
  'https://imgc.nxtv.jp/img/info/titspot/00066/SID0066846_fwxga.png?output-format=jpg&output-quality=70&resize=1000:*',
  'https://imgc.nxtv.jp/img/info/titspot/00072/SID0072632_fwxga.png?output-format=jpg&output-quality=70&resize=1000:*',
  'https://imgc.nxtv.jp/img/info/titspot/00029/SID0029295_fwxga.png?output-format=jpg&output-quality=70&resize=1000:*',
  'https://imgc.nxtv.jp/img/info/titspot/00037/SID0037677_fwxga.png?output-format=jpg&output-quality=70&resize=1000:*',
  'https://imgc.nxtv.jp/img/info/titspot/00010/SID0010909_fwxga.png?output-format=jpg&output-quality=70&resize=1000:*',
];

function MainHeaderBgImage() {
  const [imageIdx, setImageIdx] = useState(0);
  const timer = useRef();
  const currImageIdx = useRef(0);

  useEffect(() => {
    const func = () => {
      timer.current = setTimeout(() => {
        if (currImageIdx.current + 1 === images.length) {
          currImageIdx.current = 0;
          setImageIdx(0);
        } else {
          currImageIdx.current += 1;
          setImageIdx(currImageIdx.current);
        }
        // console.log('timeout..', currImageIdx.current);
        func();
      }, 1000 * 4);
    };

    func();

    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return (
    <div className="w-full h-[312px] sm:h-[540px] absolute top-0 left-0">
      {images.map((imgUrl, idx) => (
        <div
          className="w-full h-full bg-cover bg-center transition-opacity duration-700 absolute top-0 left-0"
          key={idx}
          style={{
            backgroundImage: `url(${imgUrl})`,
            opacity: `${imageIdx === idx ? 1 : 0}`,
          }}
        />
      ))}
      <div
        className="w-full h-full bg-blue-400 absolute top-0 left-0"
        style={{
          background:
            'linear-gradient(-180deg, rgba(0, 10, 23, 0.4) 0%, rgb(0, 10, 23) 100%)',
        }}
      ></div>
    </div>
  );
}

export default MainHeaderBgImage;
