import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import styles from "../styles/modules/todoItem.module.scss";
import CheckButton from "./CheckButton";
import { updateFilterStatus } from "../slices/todoSlice";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
import TodoModal from "./TodoModal";

function TodoItem({ todo }) {
  const [stateModal, setStateModal] = useState(false);

  function closeModal() {
    setStateModal(false);
  }

  const dispatch = useDispatch();

  function handleCheck() {
    dispatch(updateFilterStatus(todo.id));
  }

  console.log(todo.status);

  return (
    <div className={styles.item}>
      <div className={styles.todoDetails}>
        <CheckButton
          checked={todo.status == "completed"}
          handleCheck={handleCheck}
        />
        <div>
          <text className={styles.todoText}>{todo.title}</text>
          <text className={styles.time}>{todo.time}</text>
        </div>
      </div>
      <div className={styles.todoActions}>
        <AiTwotoneDelete className={styles.icon} />
        <AiTwotoneEdit
          className={styles.icon}
          onClick={() => setStateModal(true)}
        />
      </div>
      <TodoModal
        todo={todo}
        modalType="edit"
        modalOpen={stateModal}
        closeModal={closeModal}
      />
    </div>
  );
}

export default TodoItem;
