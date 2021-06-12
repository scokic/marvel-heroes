import React from "react";
import "./page-header.styles.scss";

function PageHeader({ name, description }) {
  return (
    <div className='page-header'>
      <div className='page-header-wrapper'>
        <span className='page-header-title'>{name}</span>
        <p className='page-header-subtitle'>{description}</p>
      </div>
    </div>
  );
}

export default PageHeader;
