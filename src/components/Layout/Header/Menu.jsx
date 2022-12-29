import React from 'react';

const Menu = () => {
  return (
    <div className='flex relative mt-1'>
      <div className='after:absolute after:top-3 after:right-1 after:h-0.5 after:w-5 after:bg-black before:absolute before:top-1 before:right-1 before:h-0.5 before:w-5 before:bg-black '></div>
      <p className='mt-4 pt-1 text-xxs'>MENU</p>
    </div>
  );
};

export default Menu;
