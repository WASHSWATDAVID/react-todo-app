import React, { useState }  from 'react';
import styles from '../styles/modules/app.module.scss';
import Button, {SelectButton} from './Button';
import TodoModal from './TodoModal'

function AppHeader() {
  const [stateModal, setStateModal] = useState(false);

  return (
    <div className={styles.appHeader}>
      <Button
          variant="primary"
          onClick={()=> setStateModal(true)}
      >
        Add Task
      </Button>
      <TodoModal modalOpen={stateModal}/>
      <SelectButton defaultValue='all'>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="completed">Completed</option>
      </SelectButton>
    </div>
  );
}

export default AppHeader;
