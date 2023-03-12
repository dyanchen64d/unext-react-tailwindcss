import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  useMemo,
} from 'react';

function Slider({ items, title, subtitle, containerWidth }) {
  const [sliderIdx, setSliderIdx] = useState(0);
  const [countPerSlider, setCountPerSlider] = useState(2);

  const ref = useRef();

  const leftHandler = useCallback(
    (currIdx, count) => {
      if (currIdx - count < 0) {
        setSliderIdx(0);
      } else {
        setSliderIdx(currIdx - count);
      }
    },
    [setSliderIdx]
  );

  const rightHandler = useCallback(
    (currIdx, count) => {
      if (currIdx + count > items.length - count) {
        setSliderIdx(items.length - count);
      } else {
        setSliderIdx(currIdx + count);
      }
    },
    [setSliderIdx]
  );

  useEffect(() => {
    const w = containerWidth.slice(0, containerWidth.length - 2);
    const wInt = parseInt(w);

    if (wInt <= 900) {
      setCountPerSlider(2);
      return;
    }

    if (wInt <= 1167) {
      setCountPerSlider(3);
      return;
    }

    setCountPerSlider(4);
  }, [containerWidth]);

  const translateX = useMemo(() => {
    return (100 / countPerSlider) * sliderIdx;
  }, [sliderIdx, countPerSlider]);

  return (
    <div className="w-full mb-[48px]" ref={ref}>
      <div className="title text-white font-bold text-[17px] px-[33px] sm:px-[60px] mb-2">
        {title}
      </div>
      <div
        className="subtitle text-[13px] sm:text-[15px] mb-[16px] sm:mb-6 px-[33px] sm:px-[60px]"
        style={{ color: 'rgba(255, 255, 255, 0.5)' }}
      >
        {subtitle}
      </div>
      <div className="w-full overflow-hidden flex">
        <div
          className="left-handler min-w-[21px] sm:min-w-[48px] transition transition-text bg-slider-handler hover:bg-slider-handler-hover mr-[6px] cursor-pointer z-10 flex justify-center items-center text-white text-xl hover:text-3xl"
          onClick={() => leftHandler(sliderIdx, countPerSlider)}
        >
          <span>&#8249;</span>
        </div>
        <div
          className="slider flex flex-1 transition-transform"
          style={{ transform: `translateX(-${translateX}%)` }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className=" px-[6px]"
              style={{
                width: `${100 / countPerSlider}%`,
                minWidth: `${100 / countPerSlider}%`,
              }}
            >
              <div
                className="w-full h-full aspect-video flex items-center justify-center text-white text-lg bg-contain"
                style={{ backgroundImage: `url('${item.url}')` }}
              ></div>
            </div>
          ))}
        </div>
        <div
          className="right-handler min-w-[21px] sm:min-w-[48px] transition transition-text bg-slider-handler hover:bg-slider-handler-hover ml-[6px] cursor-pointer z-10 flex justify-center items-center text-white text-xl hover:text-3xl"
          onClick={() => rightHandler(sliderIdx, countPerSlider)}
        >
          <span>&#8250;</span>
        </div>
      </div>
    </div>
  );
}

export default Slider;
