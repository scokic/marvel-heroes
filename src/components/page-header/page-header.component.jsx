import React from "react";
import "./page-header.styles.scss";
import Logo from "../../img/Marvel-Studios-Symbol.png";

function PageHeader({ name, description }) {
  return (
    <div className='page-header'>
      <img className='marvel-header-logo' src={Logo} alt='MarvelLogo' />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default PageHeader;
