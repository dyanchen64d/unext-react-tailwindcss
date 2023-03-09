import React from 'react';

import MainUnextIcon from '../assets/MainUnextIcon';

function MainHeaderInfo() {
  return (
    <div className="main-header-info flex flex-col items-center">
      <div className=" mt-[102px]">
        <MainUnextIcon />
      </div>
      <h1 className=" mt-4 text-xl text-white font-light">
        観るのも読むのも、これひとつ。
      </h1>
      <p
        className="mt-4 text-center w-[306px]"
        style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '13px' }}
      >
        映画 / ドラマ /
        アニメから、マンガや雑誌といった電子書籍まで。U-NEXTひとつで楽しめます。
      </p>
      <button className=" mt-8 w-[295px] h-[44px] bg-unext-blue rounded-sm flex justify-center items-center text-white font-bold text-sm">
        まず31日間 無料体験
      </button>
      <button className="w-[122px] h-[44px] text-white mt-6 text-sm">
        ログインはこちら
      </button>
      <div className=" my-[40px]">
        <p
          className="text-[13px] text-center"
          style={{ color: 'rgba(255, 255, 255, 0.5)' }}
        >
          キャンペーン・イチオシ作品の情報を発信中
        </p>
        <div className="flex mt-4 gap-x-[24px]">
          <div
            className="w-[130px] h-[24px] rounded flex justify-center items-center"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          >
            <svg width={24} viewBox="0 0 24 24">
              <path
                d="M17.473 9.563c0-.12 0-.242-.006-.363a5.746 5.746 0 001.408-1.462 5.716 5.716 0 01-1.622.445 2.838 2.838 0 001.242-1.562 5.61 5.61 0 01-1.793.682 2.815 2.815 0 00-2.057-.891 2.824 2.824 0 00-2.75 3.465 8.009 8.009 0 01-5.813-2.948 2.828 2.828 0 00.875 3.768 2.853 2.853 0 01-1.276-.353v.039c0 1.364.973 2.508 2.26 2.767a2.75 2.75 0 01-.742.098c-.182 0-.358-.016-.529-.049a2.82 2.82 0 002.635 1.958 5.657 5.657 0 01-4.175 1.171 8.022 8.022 0 004.318 1.26c5.186 0 8.024-4.301 8.024-8.025z"
                fill="#FFF"
                fillRule="nonzero"
              ></path>
            </svg>
            <div className="text-white" style={{ fontSize: 9 }}>
              フォローする
            </div>
          </div>
          <div
            className="w-[130px] h-[24px] rounded flex justify-center items-center"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          >
            <svg width={24} viewBox="0 0 24 24">
              <path
                d="M18 12.037C18 8.706 15.31 6 12 6s-6 2.706-6 6.037c0 3.016 2.197 5.511 5.065 5.963v-4.223H9.532v-1.746h1.533V10.7c0-1.511.892-2.353 2.258-2.353.659 0 1.335.13 1.335.13V9.95h-.75c-.745 0-.985.471-.985.948v1.133h1.668l-.265 1.746H12.93V18A6.026 6.026 0 0018 12.037"
                fill="#FFF"
                fillRule="nonzero"
              ></path>
            </svg>
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
