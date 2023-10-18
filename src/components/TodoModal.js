import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/modules/modal.module.scss';
import Button from './Button';
import { addTodo, updateTodo } from '../slices/todoSlice';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '35%',
    height: '48%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#ecedf6',
    border: 'none',
    overflow: 'hidden',
  },
};

Modal.setAppElement('#root');

function TodoModal({ type, modalIsOpen, setModalIsOpen, todo }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplte');
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === 'add') {
      setTitle('');
      setStatus('incomplete');
    } else if (type === 'update' && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    }
  }, [type, todo, modalIsOpen]);
  // modalIsOpen을 의존성에 넣어주지 않으면 Add Task 버튼 클릭 후 Edit 다시 클릭해도 title, status 변경되지 않음

  const handleSelectStatus = (e) => {
    setStatus(e.target.value);
    console.log(e.target.value);
  };

  const handleInputTitle = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const handleTask = () => {
    if (type === 'add') {
      const payload = {
        title,
        status,
      };
      dispatch(addTodo(payload));
    } else {
      const payload = {
        title,
        status,
        id: todo.id,
      };
      dispatch(updateTodo(payload));
    }
    setModalIsOpen(false);

    // 초기화
    setTitle('');
    setStatus('incomplete');
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setTitle('');
    setStatus('incomplete');
  };

  return (
    <div>
      {modalIsOpen && (
        <Modal isOpen style={customStyles} onRequestClose={handleCloseModal}>
          <h1 style={{ display: 'inline-block' }}>
            {type === 'add' ? 'Add' : 'Update'} TODO
          </h1>
          <form className={styles.form__content}>
            <label htmlFor="inputField" className={styles.label__text}>
              Title
            </label>
            <input
              type="text"
              id="inputField"
              name="inputField"
              className={styles.input__field}
              value={title}
              onChange={handleInputTitle}
            />
            <label htmlFor="selectField" className={styles.label__text}>
              Status
            </label>
            <select
              id="selectField"
              name="selectField"
              className={styles.select__field}
              value={status}
              onChange={handleSelectStatus}
            >
              <option value="incomplete">Incomplete</option>
              <option value="complete">Complete</option>
            </select>
          </form>
          <Button
            variant="primary"
            style={{ marginRight: '15px' }}
            onClick={handleTask}
          >
            {type === 'add' ? 'Add' : 'Update'} Task
          </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
        </Modal>
      )}
    </div>
  );
}

export default TodoModal;
