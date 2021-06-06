import React, { useRef, useEffect, useCallback } from "react";
import MarvelLogo from "../../img/Marvel-Studios-Symbol.png";

import "./modal.styles.scss";

const Modal = ({ name, description, image, series, showModal, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keypress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keypress);
    return () => document.removeEventListener("keydown", keypress);
  }, [keypress]);

  return (
    <>
      {showModal ? (
        <div className='modal-background' ref={modalRef} onClick={closeModal}>
          <div className='modal-container'>
            <img className='hero-image' src={`${image}.jpg`} alt={name} />
            <div className='hero-info-container'>
              <h2>{name}</h2>
              <p>{description}</p>
              <h4>{name} has been part of the following comic book series:</h4>
              <ul className='hero-series'>
                {series.map((series) => (
                  <li>{series.name}</li>
                ))}
              </ul>
              <button className='close-button' onClick={() => setShowModal((prev) => !prev)}>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-x-lg' viewBox='0 0 16 16'>
                  <path d='M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z' />
                </svg>
              </button>
            </div>
            <img className='marvel-logo' src={MarvelLogo} alt='Marvel logo' />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
