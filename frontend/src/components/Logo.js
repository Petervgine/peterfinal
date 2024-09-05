import React from 'react';
import jamboLogo from '../assest/jambo.png'; // Adjust the path if necessary

const Logo = ({ w = 100, h = 100 }) => {
  return (
    <img
      src={jamboLogo}
      alt="Jambo Logo"
      width={w}
      height={h}
      className="logo"
      style={{ width: `${w}px`, height: `${h}px` }} // Inline style for optional control
    />
  );
};

export default Logo;
