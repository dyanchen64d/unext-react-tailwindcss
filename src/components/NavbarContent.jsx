import React, { useState } from 'react';

import NavMainItem from './NavMainItem';
import NavSubItem from './NavSubItem';

import { ReactComponent as HeaderUnext } from '../assets/header_unext.svg';
import { ReactComponent as NavUnextIcon } from '../assets/nav_unext.svg';
import { ReactComponent as NavHelpIcon } from '../assets/nav_help.svg';
import { ReactComponent as NavHomeIcon } from '../assets/nav_home.svg';
import { ReactComponent as NavVideoIcon } from '../assets/nav_video.svg';
import { ReactComponent as NavBookIcon } from '../assets/nav_book.svg';
import { ReactComponent as NavOtherIcon } from '../assets/nav_other.svg';
import { ReactComponent as NavItemArrow } from '../assets/nav_item_arrow.svg';

const videosItems = [
  'ランキング',
  '洋画',
  '邦画',
  '海外ドラマ',
  '韓流・アジア',
  '国内ドラマ',
  'アニメ',
  'キッズ',
  'ドキュメンタリー',
  '音楽・ライブ',
  'エンタメ・スポーツ',
  '舞台・演劇',
];

const bookItems = ['読み放題雑誌', 'マンガ', 'ラノベ', '書籍'];

function NavbarContent() {
  const [videoIsOpen, setVideoIsOpen] = useState(true);

  const [bookIsOpen, setBookIsOpen] = useState(true);

  const videoItemClickHandler = () => {
    setVideoIsOpen(!videoIsOpen);
  };

  const bookItemClickHandler = () => {
    setBookIsOpen(!bookIsOpen);
  };

  return (
    <div className="nav-bg w-full h-full pt-[54px] lg:pt-[32px] pb-[90px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      <div className="hidden lg:flex justify-center">
        <HeaderUnext />
      </div>
      <div className=" mb-[16px] lg:pt-[32px]">
        <div className="w-full flex flex-col items-center mb-[38px]">
          <a href="#">
            <div className=" bg-unext-blue text-white w-[200px] h-[48px] rounded-lg flex items-center justify-center text-lg font-bold mt-[8px]">
              無料でお試し
            </div>
          </a>
          <a href="#">
            <div className=" bg-nav-login w-[200px] h-[48px] border rounded-lg flex items-center justify-center text-lg font-bold box-border mt-[8px] text-nav-text">
              ログイン
            </div>
          </a>
        </div>
        <ul>
          <li className=" list-none ">
            <NavMainItem title="U-NEXTの特長" icon={<NavUnextIcon />} />
          </li>
          <li className=" list-none">
            <NavMainItem title="ヘルプ" icon={<NavHelpIcon />} />
          </li>
        </ul>
      </div>
      <ul>
        <li className=" list-none mt-2 mb-4">
          <NavMainItem title="ホーム" icon={<NavHomeIcon />} />
        </li>
        <li
          className=" list-none mt-2 mb-2 relative"
          onClick={videoItemClickHandler}
        >
          <NavMainItem
            title="ビデオ"
            icon={<NavVideoIcon />}
            isOpen={videoIsOpen}
          />
        </li>
        <ul
          className={`overflow-hidden transition-height ease-in-out duration-300 `}
          style={{
            height: videoIsOpen ? `${videosItems.length * 48}px` : '0px',
          }}
        >
          {videosItems.map((v, idx) => (
            <li className=" list-none mb-2" key={idx}>
              <NavSubItem title={v} />
            </li>
          ))}
        </ul>
        <li className=" list-none mt-2 mb-4" onClick={bookItemClickHandler}>
          <NavMainItem
            title="ブック"
            icon={<NavBookIcon />}
            isOpen={bookIsOpen}
          />
        </li>
        <ul
          className={`overflow-hidden transition-height ease-in-out duration-300 `}
          style={{
            height: bookIsOpen ? `${bookItems.length * 48}px` : '0px',
          }}
        >
          {bookItems.map((v, idx) => (
            <li className=" list-none mb-2" key={idx}>
              <NavSubItem title={v} />
            </li>
          ))}
        </ul>
        <li className=" list-none mt-2 mb-4">
          <NavMainItem title="その他♡" icon={<NavOtherIcon />} />
        </li>
      </ul>
      <div
        className="absolute bottom-0 left-0 w-full p-[19px] pl-[32px] box-border text-[13px]"
        style={{
          backgroundColor: 'rgb(20, 30, 43)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <li
          className="list-none mb-[6px] flex justify-between items-center"
          style={{ color: 'rgba(255, 255, 255, 0.5)' }}
        >
          U-NEXTの特長
          <NavItemArrow className="w-[20px] h-[20px] rotate-90" />
        </li>
        <li
          className="list-none flex justify-between items-center"
          style={{ color: 'rgba(255, 255, 255, 0.5)' }}
        >
          SMART USEN
          <NavItemArrow className="w-[20px] h-[20px] rotate-90" />
        </li>
      </div>
    </div>
  );
}

export default NavbarContent;
