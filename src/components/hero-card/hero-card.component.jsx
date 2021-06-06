import React, { useState } from "react";
import "./hero-card.styles.scss";
import Modal from "../modal/modal.component";

function HeroCard({ id, image, name, description, series }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div className='hero-card' key={id} onClick={openModal}>
        <img className='hero-image' src={`${image}.jpg`} alt={name} />
        <h2 className='hero-name'>{name}</h2>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} name={name} description={description} image={image} series={series} />
    </>
  );
}

export default HeroCard;
