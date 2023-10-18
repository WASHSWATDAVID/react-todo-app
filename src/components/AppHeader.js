import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/modules/app.module.scss';
import Button, { SelectButton } from './Button';
import TodoModal from './TodoModal';
import { updateFilterStatus } from '../slices/todoSlice';
import _ from 'lodash';

function AppHeader() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const todoList = useSelector((state) => state.todo.todoList);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(filterStatus);
  }, [filterStatus]);

  const handleSelectFilter = (e) => {
    const payload = {
      filterStatus: e.target.value,
    };
    dispatch(updateFilterStatus(payload));
  };

  return (
    <>
      <div className={styles.appHeader}>
        <Button onClick={() => setModalIsOpen(true)}>Add Task</Button>
        <SelectButton onChange={handleSelectFilter}>
          <option value='all'>All</option>
          <option value='incomplete'>Incomplete</option>
          <option value='complete'>Complete</option>
        </SelectButton>
      </div>
      <TodoModal
        type='add'
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        todo={null}
      />
    </>
  );
}

export default AppHeader;
