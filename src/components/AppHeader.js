import React, { useState, useEffect } from "react";
import styles from "../styles/modules/app.module.scss";
import Button, { SelectButton } from "./Button";
import TodoModal from "./TodoModal";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../slices/filterSlice";
import { todoStatus, modalState } from "../slices/todoAction";

function AppHeader() {
  // action을 발생시키기 위한 useDispatch를 사용할 수 있음
  const dispatch = useDispatch();
  // 모달 상태 관리
  const [stateModal, setStateModal] = useState(false);

  // 모달 닫는 함수
  function closeModal() {
    setStateModal(false);
  }

  // 선택한 filter 가져오기
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
            status: todoStatus.INCOMPLETE
          }}
          modalType={modalState.ADD}
          modalOpen={stateModal}
          closeModal={closeModal}
        />
        <SelectButton
          defaultValue={filterStatus}
          onChange={(e) => {
            dispatch(changeFilter(e.target.value));
          }}
        >
          <option value={todoStatus.ALL}>All</option>
          <option value={todoStatus.INCOMPLETE}>Incomplete</option>
          <option value={todoStatus.COMPLETED}>Completed</option>
        </SelectButton>
      </div>
    </div>
  );
}

export default AppHeader;
