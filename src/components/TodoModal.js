import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#yourAppElement');

function TodoModal({ type, modalIsOpen, setModalIsOpen, todo }) {
  let subtitle;

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button type="button" onClick={setModalIsOpen(false)}>
          close
        </button>
        <div>I am a modal</div>
        <form>
          <input />
        </form>
      </Modal>
    </div>
  );
}

export default TodoModal;
