import React from "react";
import "./footer.styles.scss";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <p className='footer-info'>Made in Belgrade - June 2021</p>
        <p className='copyright-info'>
          We are not affiliated with Marvel Studios. All data shown on this website is property of Marvel Studios. <span className='copyright-span'>Data provided by Marvel. © 2014 Marvel</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
