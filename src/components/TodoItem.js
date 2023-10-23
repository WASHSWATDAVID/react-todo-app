import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import styles from "../styles/modules/todoItem.module.scss";
import CheckButton from "./CheckButton";
import { updateFilterStatus, deleteTodo } from "../slices/todoSlice";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
import TodoModal from "./TodoModal";
import { todoStatus, modalState } from "../slices/todoAction";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  // 모달 상태 변수
  const [stateModal, setStateModal] = useState(false);

  // 모달 닫는 함수
  const showModal = () => setStateModal((prevState) => !prevState);

  // 투두 아이템 체크 버튼 클릭시 실행
  function handleCheck() {
    dispatch(updateFilterStatus(todo));
  }

  //
  function handleDelete() {
    dispatch(deleteTodo(todo));
  }

  return (
    <div className={styles.item}>
      <div className={styles.todoDetails}>
        <CheckButton
          checked={todo.status === todoStatus.COMPLETED}
          handleCheck={handleCheck}
        />
        <div>
          <p className={styles.todoText}>{todo.title}</p>
          <p className={styles.time}>{todo.time}</p>
        </div>
      </div>
      <div className={styles.todoActions}>
        <AiTwotoneDelete className={styles.icon} onClick={handleDelete} />
        <AiTwotoneEdit className={styles.icon} onClick={() => showModal()} />
      </div>
      <TodoModal
        todo={todo}
        modalType={modalState.EDIT}
        modalOpen={stateModal}
        showModal={showModal}
      />
    </div>
  );
}

export default TodoItem;
