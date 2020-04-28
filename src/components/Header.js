import React from 'react';
import GoogleAuth from './GoogleAuth';

const Header = ({ onLogOut }) => {
  console.log(onLogOut);
  return (
    <div className='ui grey mini borderless inverted menu'>
      <div className='header item'>Srikantham LLC.</div>
      <a className='item'>About Us</a>
      {/* <a className='item'></a> */}
      <a className='item'>Locations</a>
      {/* <div class='ui mini icon input right menu'>
          <input type='text' placeholder='Search mini...' />
          <i class='search icon'></i>
        </div> */}
      <div className='ui mini right menu'>
        <GoogleAuth onLogOut={onLogOut} />
      </div>
    </div>
  );
};

export default Header;
