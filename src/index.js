// Modal.js

import React, { useState } from "react";
import PropTypes from "prop-types";
import "./modal.css";

const ModalOpenerComponent = (props) => {
  const {
    buttonLabel,
    btnStyle,
    overlayStyle,
    modalStyle,
    onClose,
    onOpen,
    children,
  } = props;
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);

    if (onOpen) {
      onOpen();
    }
  };

  const closeModal = () => {
    setModalOpen(false);

    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="moc-container">
      <button onClick={openModal} className="moc-btn" style={btnStyle}>
        {buttonLabel || "Open Modal"}
      </button>

      {isModalOpen && (
        <div className="moc-modal-overlay" style={overlayStyle}>
          <div className="moc-modal" style={modalStyle}>
            <span className="moc-close-btn" onClick={closeModal}>
              &times;
            </span>
            <div className="moc-modal-content">{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

ModalOpenerComponent.propTypes = {
  buttonLabel: PropTypes.string,
  btnStyle: PropTypes.object,
  overlayStyle: PropTypes.object,
  modalStyle: PropTypes.object,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
};

export default ModalOpenerComponent;
