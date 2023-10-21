import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styles from '../styles/modules/modal.module.scss';

function TodoModal({ modalOpen, closeModal }) {
  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <Modal
          className={styles.container}
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
