import React, { useEffect, useState } from "react";
import Modal from "react-modal";

function TodoModal({ modalOpen, closeModal }) {
  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => closeModal()}
        contentLabel="Example Modal"
      >
        <h1>1234</h1>
      </Modal>
    </div>
  );
}

export default TodoModal;
