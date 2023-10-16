import React, { useEffect, useState } from 'react';
import styles from '../styles/modules/app.module.scss';
import Button, { SelectButton } from './Button';
import TodoModal from './TodoModal';

function AppHeader() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    <div className={styles.appHeader}>
      <Button onClick={() => setModalIsOpen(true)}>Add Task</Button>
      <SelectButton>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </div>
  );
}

export default AppHeader;
