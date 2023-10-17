import React, { useEffect, useState } from 'react';
import styles from '../styles/modules/app.module.scss';
import Button, { SelectButton } from './Button';
import TodoModal from './TodoModal';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';

function AppHeader() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const todoList = useSelector(state => state.todo.todoList)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(todoList)
  }, [])

  return (
    <>
      <div className={styles.appHeader}>
        <Button onClick={() => setModalIsOpen(true)}>Add Task</Button>
        <SelectButton onChange={(e) => console.log(e.target.value)}>
          <option value='all'>All</option>
          <option value='incomplete'>Incomplete</option>
          <option value='complete'>Complete</option>
        </SelectButton>
      </div>
      <TodoModal
        type='add'
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </>
  );
}

export default AppHeader;
