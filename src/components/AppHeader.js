import React, { useState, useEffect } from "react";
import styles from "../styles/modules/app.module.scss";
import Button, { SelectButton } from "./Button";
import TodoModal from "./TodoModal";

function AppHeader() {
  const [stateModal, setStateModal] = useState(false);

  function closeModal() {
    setStateModal(false);
  }

  useEffect(() => {
    console.log(stateModal); // stateModal이 변경될 때마다 호출
  }, [stateModal]);

  return (
    <div>
      <div className={styles.appHeader}>
        <Button variant="primary" onClick={() => setStateModal(true)}>
          Add Task
        </Button>
        <TodoModal modalOpen={stateModal} closeModal={closeModal} />
        <SelectButton defaultValue="all">
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="completed">Completed</option>
        </SelectButton>
      </div>
    </div>
  );
}

export default AppHeader;
