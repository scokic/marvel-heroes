import React, { useState } from "react";
import "./hero-card.styles.scss";
import Modal from "react-modal";

Modal.setAppElement("#root");

function HeroCard({ id, image, name, description }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className='hero-card' key={id} onClick={() => setModalIsOpen(true)}>
      <img className='hero-image' src={`${image}.jpg`} alt={name} />
      <h2 className='hero-name'>{name}</h2>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>{name}</h2>
        <p>{description}</p>
        <div>
          <span>Press escape to quit</span>
        </div>
      </Modal>
    </div>
  );
}

export default HeroCard;
