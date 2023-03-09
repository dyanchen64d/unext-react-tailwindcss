import React from 'react';

import { ReactComponent as MainUnextIcon } from '../assets/main_unext.svg';
import { ReactComponent as MainUnextIconLarge } from '../assets/unext_large.svg';
import { ReactComponent as TwitterIcon } from '../assets/twitter.svg';
import { ReactComponent as FacebookIcon } from '../assets/facebook.svg';

function MainHeaderInfo() {
  return (
    <div className="main-header-info flex flex-col items-center relative">
      <div className=" mt-[102px] sm:hidden">
        <MainUnextIcon className="w-[72px]" />
      </div>
      <div className=" hidden mt-[154px] sm:block">
        <MainUnextIconLarge className="w-[286px] h-[54px]" />
      </div>
      <h1 className=" mt-4 sm:mt-[42px] sm:font-bold text-xl sm:text-[28px] text-white font-light">
        観るのも読むのも、これひとつ。
      </h1>
      <p
        className="mt-4 sm:mt-[28px] text-center w-[306px] text-[13px] sm:text-[17px] sm:w-[484px]"
        style={{ color: 'rgba(255, 255, 255, 0.75)' }}
      >
        映画 / ドラマ /
        アニメから、マンガや雑誌といった電子書籍まで。U-NEXTひとつで楽しめます。
      </p>
      <button className=" mt-8 w-[295px] sm:w-[360px] h-[44px] sm:h-[48px] bg-unext-blue rounded-sm flex justify-center items-center text-white font-bold text-sm">
        まず31日間 無料体験
      </button>
      <button className="w-[122px] h-[44px] sm:h-auto text-white mt-6 text-sm">
        ログインはこちら
      </button>
      <div className=" my-[40px] sm:mt-[44px] sm:mb-[26px] sm:self-end sm:mr-[40px]">
        <p
          className="text-[13px] text-center"
          style={{ color: 'rgba(255, 255, 255, 0.5)' }}
        >
          キャンペーン・イチオシ作品の情報を発信中
        </p>
        <div className="flex mt-[10px] gap-x-[24px] sm:gap-x-[8px]">
          <div
            className="w-[130px] h-[24px] rounded flex justify-center items-center"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          >
            <TwitterIcon className="w-6" />
            <div className="text-white" style={{ fontSize: 9 }}>
              フォローする
            </div>
          </div>
          <div
            className="w-[130px] h-[24px] rounded flex justify-center items-center"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          >
            <FacebookIcon className="w-6" />
            <div className="text-white" style={{ fontSize: 9 }}>
              Facebookでチェック
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeaderInfo;
