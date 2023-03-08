import React, { useEffect, useState } from 'react';
import HeaderUnext from '../assets/HeaderUnextSvg.jsx';
import { HiMenu } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { closeNav, openNav } from '../store/navSlice';

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
      className={`fixed top-0 left-0 items-center justify-center  w-full h-[56px] ${
        showHeaderBg ? 'bg-slate-800' : 'bg-transparent'
      }  flex transition-colors`}
    >
      <div
        className="absolute top-0 left-0 menu-wrapper w-[56px] h-[56px] flex justify-center items-center lg:hidden"
        onClick={() => dispatch(openNav())}
      >
        <HiMenu color="white" fontSize="28px" />
      </div>
      <a href="#" className=" scale-70 lg:scale-100">
        <HeaderUnext />
      </a>
      <div className=" absolute top-0 right-0 search-wrapper w-[56px] h-[56px] flex justify-center items-center">
        <BiSearch color="white" fontSize="28px" />
      </div>
    </div>
  );
}

export default Header;
