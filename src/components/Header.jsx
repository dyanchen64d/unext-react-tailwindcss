import React, { useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { closeNav, openNav } from '../store/navSlice';

import { ReactComponent as HeaderUnext } from '../assets/header_unext.svg';
import { ReactComponent as HeaderSearch } from '../assets/header_search.svg';

function Header() {
  const [showHeaderBg, setShowHeaderBg] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const headerScrollHandler = () => {
      const scrolly = window.scrollY;

      if (scrolly > 56) {
        setShowHeaderBg(true);
      } else {
        setShowHeaderBg(false);
      }
    };

    addEventListener('scroll', headerScrollHandler);

    return () => {
      removeEventListener('scroll', headerScrollHandler);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 items-center justify-center  w-full h-[56px] lg:h-[76px] ${
        showHeaderBg ? 'bg-slate-800' : 'bg-transparent'
      }  flex transition-colors z-20`}
    >
      <div
        className="absolute top-0 left-0 menu-wrapper w-[56px] h-[56px] flex justify-center items-center lg:hidden"
        onClick={() => dispatch(openNav())}
      >
        <HiMenu color="white" fontSize="28px" />
      </div>
      <a href="#" className=" scale-70 lg:hidden">
        <HeaderUnext />
      </a>
      <div className=" absolute lg:hidden top-0 right-[14px] search-wrapper w-[56px] h-[56px] flex justify-center items-center">
        <div className="w-[32px] h-[32px] text-white">
          <HeaderSearch />
        </div>
      </div>
      <div className="hidden lg:absolute top-[16px] right-[44px] w-[324px] h-[44px] border-[1.5px] border-white rounded-[22px] lg:flex pl-[10px] pr-[16px] justify-center items-center bg-search-input">
        <div className="w-[32px] h-[32px] text-white">
          <HeaderSearch />
        </div>
        <input
          type="text"
          className="flex-1 bg-transparent ml-2 placeholder:text-search-placeholder text-base"
          placeholder="作品名、人名で検索"
        />
      </div>
    </div>
  );
}

export default Header;
