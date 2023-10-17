import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Modal from 'react-modal';
import styles from '../styles/modules/modal.module.scss';
import Button from './Button';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../slices/todoSlice';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '35%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#ecedf6',
    border: 'none',
  },
};

Modal.setAppElement('#root');

function TodoModal({ type, modalIsOpen, setModalIsOpen, todo }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplte');
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === 'update') {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle('');
      setStatus('incomplte');
    }
  }, []);

  const handleSelectStatus = (e) => {
    setStatus(e.target.value);
    console.log(e.target.value);
  };

  const handleInputTitle= (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const handleAddTask = () => {
    const payload = {
      title,
      status
    }
    dispatch(addTodo(payload));

    setModalIsOpen(false)
  };

  return (
    <>
      {modalIsOpen && (
        <Modal isOpen={true} style={customStyles} contentLabel='Example Modal'>
          <div>
            <h1 style={{ display: 'inline-block' }}>
              {type === 'add' ? 'ADD' : 'UPDATE'} TODO
            </h1>
            <form className={styles.form__content}>
              <label htmlFor='inputField' className={styles.label__text}>
                Title
              </label>
              <input
                type='text'
                id='inputField'
                name='inputField'
                className={styles.input__field}
                value={title}
                onChange={handleInputTitle}
              />
              <label htmlFor='selectField' className={styles.label__text}>
                Status
              </label>
              <select
                id='selectField'
                name='selectField'
                className={styles.select__field}
                value={status}
                onChange={handleSelectStatus}
              >
                <option value='incomplte'>Incomplete</option>
                <option value='complte'>Complete</option>
              </select>
            </form>
            <Button variant='primary' style={{ marginRight: '15px' }} onClick={handleAddTask}>
            {type === 'add' ? 'Add' : 'Update'} Task
            </Button>
            <Button variant='secondary' onClick={() => setModalIsOpen(false)}>
              Cancel
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default TodoModal;
