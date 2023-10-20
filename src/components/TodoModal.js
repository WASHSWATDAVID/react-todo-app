import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/modules/modal.module.scss';
import Button from './Button';
import { addTodo, updateTodo, handleModal } from '../slices/todoSlice';

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

function TodoModal() {
  const {
    type,
    isOpen,
    todoData: { id, title, status },
  } = useSelector((state) => state.todo.modalValue);
  const filterList = useSelector((state) => state.todo.filterList);
  const dispatch = useDispatch();

  const [modalTitle, setModalTitle] = useState('');
  const [modalStatus, setModalStatus] = useState('incomplete');

  useEffect(() => {
    console.log('effect');
    if (type === 'update') {
      setModalTitle(title);
      setModalStatus(status);
    }
  }, [type, id, title, status]);

  const handleSelectStatus = (e) => {
    setModalStatus(e.target.value);
    console.log(e.target.value);
  };

  const handleInputTitle = (e) => {
    setModalTitle(e.target.value);
    console.log(e.target.value);
  };

  const handleTask = () => {
    console.log();
    if (type === 'add') {
      const payload = {
        title: modalTitle,
        status: modalStatus,
      };
      dispatch(addTodo(payload));
    } else {
      const payload = {
        title: modalTitle,
        status: modalStatus,
        id: id,
      };
      dispatch(updateTodo(payload));
    }
    const payload = {
      isOpen: false,
    };
    dispatch(handleModal(payload));

    // 초기화
    setModalTitle('');
    setModalStatus('incomplete');
  };

  const handleCloseModal = () => {
    const payload = {
      type: 'close',
      isOpen: false,
    };
    dispatch(handleModal(payload));
  };

  return (
    <div>
      {isOpen && (
        <Modal isOpen style={customStyles} onRequestClose={handleCloseModal}>
          <h1 style={{ display: 'inline-block' }}>
            {type === 'add' ? 'Add' : 'Update'} TODO
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
              value={modalTitle}
              onChange={handleInputTitle}
            />
            <label htmlFor='selectField' className={styles.label__text}>
              Status
            </label>
            <select
              id='selectField'
              name='selectField'
              className={styles.select__field}
              value={modalStatus}
              onChange={handleSelectStatus}
            >
              {filterList.map((filter, index) => {
                if (filter.value !== 'all') {
                  return (
                    <option key={index} value={filter.value}>
                      {filter.label}
                    </option>
                  );
                }
              })}
            </select>
          </form>
          <Button
            variant='primary'
            style={{ marginRight: '15px' }}
            onClick={handleTask}
          >
            {type === 'add' ? 'Add' : 'Update'} Task
          </Button>
          <Button variant='secondary' onClick={handleCloseModal}>
            Cancel
          </Button>
        </Modal>
      )}
    </div>
  );
}

export default TodoModal;
