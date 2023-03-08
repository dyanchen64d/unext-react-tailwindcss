import React from 'react';

function NavMainItem({ title, icon }) {
  return (
    <>
      <a
        href=""
        className="w-full h-[40px] text-nav-text pl-[28px] flex items-center text-lg font-bold"
      >
        <div className=" w-[28px] h-[28px] mr-[16px] ">{icon}</div>
        <div>{title}</div>
      </a>
    </>
  );
}

export default NavMainItem;
