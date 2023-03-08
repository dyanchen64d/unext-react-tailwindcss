import React from 'react';

import NavMainItem from './NavMainItem';
import NavUnextIcon from '../assets/NavUnextIcon';
import NavHelpIcon from '../assets/NavHelpIcon';
import NavHomeIcon from '../assets/NavHomeIcon';
import NavVideoIcon from '../assets/NavVideoIcon';
import NavBookIcon from '../assets/NavBookIcon';
import NavOtherIcon from '../assets/NavOtherIcon';

function NavbarContent() {
  return (
    <div className="nav-bg w-full h-full pt-[54px] pb-[90px]">
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
        <li className=" list-none mt-2 mb-4">
          <NavMainItem title="ビデオ" icon={<NavVideoIcon />} />
        </li>
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
