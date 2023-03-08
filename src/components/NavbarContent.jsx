import React, { useState } from 'react';

import NavMainItem from './NavMainItem';
import NavSubItem from './NavSubItem';

import NavUnextIcon from '../assets/NavUnextIcon';
import NavHelpIcon from '../assets/NavHelpIcon';
import NavHomeIcon from '../assets/NavHomeIcon';
import NavVideoIcon from '../assets/NavVideoIcon';
import NavBookIcon from '../assets/NavBookIcon';
import NavOtherIcon from '../assets/NavOtherIcon';

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

function NavbarContent() {
  const [videoIsOpen, setVideoIsOpen] = useState(true);

  const videoItemClickHandler = () => {
    setVideoIsOpen(!videoIsOpen);
  };

  return (
    <div className="nav-bg w-full h-full pt-[54px] pb-[90px] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
      <div className=" mb-[16px]">
        <div className="w-full flex flex-col items-center mb-[38px]">
          <a href="#">
            <div className=" bg-nav-register text-white w-[200px] h-[48px] rounded-lg flex items-center justify-center text-lg font-bold">
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
        <li className=" list-none mt-2 mb-4">
          <NavMainItem title="ブック" icon={<NavBookIcon />} />
        </li>
        <li className=" list-none mt-2 mb-4">
          <NavMainItem title="その他♡" icon={<NavOtherIcon />} />
        </li>
      </ul>
    </div>
  );
}

export default NavbarContent;
