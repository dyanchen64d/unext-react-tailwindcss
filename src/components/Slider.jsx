import React, { useCallback, useRef, useState } from 'react';

function Slider({ items, title, subtitle, itemWidth }) {
  const { url } = items;

  const [sliderIdx, setSliderIdx] = useState(0);

  // const sliderIdx = useRef(0);

  const leftHandler = useCallback(
    (idx) => {
      console.log('leftHandler', idx);
      setSliderIdx(idx);
    },
    [setSliderIdx]
  );

  const rightHandler = useCallback(
    (idx) => {
      console.log('rightHandler', idx);
      setSliderIdx(idx);
    },
    [setSliderIdx]
  );

  return (
    <div className="w-full">
      <div className="title"></div>
      <div className="subtitle"></div>
      <div className="w-full overflow-hidden flex">
        <div
          className="left-handler min-w-[21px] transition transition-text bg-slider-handler hover:bg-slider-handler-hover mr-[6px] cursor-pointer z-10 flex justify-center items-center text-white text-xl hover:text-3xl"
          onClick={() => leftHandler(sliderIdx - 1)}
        >
          <span>&#8249;</span>
        </div>
        <div
          className="slider flex flex-1 transition-transform"
          style={{ transform: `translateX(-${100 * sliderIdx}%)` }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className=" px-[6px]"
              style={{ width: itemWidth, minWidth: itemWidth }}
            >
              <div className="w-full h-full bg-teal-700 aspect-video flex items-center justify-center text-white text-lg">
                {idx}
              </div>
            </div>
          ))}
        </div>
        <div
          className="right-handler min-w-[21px] transition transition-text bg-slider-handler hover:bg-slider-handler-hover ml-[6px] cursor-pointer z-10 flex justify-center items-center text-white text-xl hover:text-3xl"
          onClick={() => rightHandler(sliderIdx + 1)}
        >
          <span>&#8250;</span>
        </div>
      </div>
    </div>
  );
}

export default Slider;
