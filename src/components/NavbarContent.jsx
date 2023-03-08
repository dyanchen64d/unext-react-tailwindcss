import React from 'react';

import NavMainItem from './NavMainItem';
import NavUnextIcon from '../assets/NavUnextIcon';
import NavHelpIcon from '../assets/NavHelpIcon';

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
    </div>
  );
}

export default NavbarContent;
