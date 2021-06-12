import React, { useState } from "react";
import "./hero-card.styles.scss";
import Modal from "../modal/modal.component";

function HeroCard({ id, image, name, description, series, imageExtension }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div className='hero-card' key={id} onClick={openModal}>
        <img className='hero-image' src={`${image}.${imageExtension}`} alt={name} />
        <div className='hero-info-container'>
          <h2 className='hero-name'>{name}</h2>
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} name={name} description={description} image={image} series={series} />
    </>
  );
}

export default HeroCard;
