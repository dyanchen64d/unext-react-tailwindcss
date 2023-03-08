import React from 'react';
import NavItemArrow from '../assets/NavItemArrow';

function NavMainItem({ title, icon, isOpen }) {
  return (
    <>
      <a
        href="#"
        className="w-full h-[40px] text-nav-text pl-[28px] flex items-center text-lg font-bold"
      >
        <div className=" w-[28px] h-[28px] mr-[16px] ">{icon}</div>
        <div className=" flex-1">{title}</div>
        {typeof isOpen === 'boolean' && (
          <div
            className={`w-[22px] h-[22px] mr-[16px] text-white transition-transform duration-300 ${
              isOpen ? '' : 'rotate-180'
            }`}
          >
            <NavItemArrow />
          </div>
        )}
      </a>
    </>
  );
}

export default NavMainItem;
