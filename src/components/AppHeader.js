import React, { useState, useEffect } from "react";
import styles from "../styles/modules/app.module.scss";
import Button, { SelectButton } from "./Button";
import TodoModal from "./TodoModal";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "./../slices/filterStatus";

function AppHeader() {
  const dispatch = useDispatch();
  const [stateModal, setStateModal] = useState(false);

  function closeModal() {
    setStateModal(false);
  }

  const filterStatus = useSelector((state) => state.filter.filterStatus);

  return (
    <div>
      <div className={styles.appHeader}>
        <Button variant="primary" onClick={() => setStateModal(true)}>
          Add Task
        </Button>
        <TodoModal
          todo={{
            title: "",
            status: "incomplete",
          }}
          modalType="add"
          modalOpen={stateModal}
          closeModal={closeModal}
        />
        <SelectButton
          defaultValue={filterStatus}
          onChange={(e) => {
            dispatch(changeFilter(e.target.value));
          }}
        >
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="completed">Completed</option>
        </SelectButton>
      </div>
    </div>
  );
}

export default AppHeader;
