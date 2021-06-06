import React from "react";
import "./page-header.styles.scss";

function PageHeader({ name, description }) {
  return (
    <div className='page-header'>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default PageHeader;
