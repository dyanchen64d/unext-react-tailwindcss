import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeNav } from '../store/navSlice';
import NavbarContent from './NavbarContent';

function Navbar() {
  const { isOpen } = useSelector((state) => state.nav);

  const dispatch = useDispatch();

  const bg = useRef();

  const bgClickHandler = () => {
    dispatch(closeNav());
  };

  return (
    <>
      <div
        className={`fixed z-10 lg:hidden top-0 left-0 w-screen h-screen bg-yellow-500 nav-glassmorphism ${
          isOpen ? '' : 'hidden'
        }`}
        onClick={bgClickHandler}
        ref={bg}
      ></div>
      <div
        className={`fixed z-10 lg:hidden h-full w-[256px] -translate-x-full transition-transform ${
          isOpen ? ' translate-x-0' : ''
        }`}
      >
        <NavbarContent />
      </div>
      <div className="hidden lg:block lg:fixed lg:z-10 top-0 left-0 h-screen w-[256px] ">
        <NavbarContent />
      </div>
    </>
  );
}

export default Navbar;
