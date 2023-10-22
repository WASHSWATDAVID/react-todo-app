import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import styles from "../styles/modules/todoItem.module.scss";
import CheckButton from "./CheckButton";
import { updateFilterStatus, deleteTodo } from "../slices/todoSlice";
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
import TodoModal from "./TodoModal";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const [stateModal, setStateModal] = useState(false);

  function closeModal() {
    setStateModal(false);
  }

  function handleCheck() {
    dispatch(updateFilterStatus(todo));
  }

  function handleDelete() {
    dispatch(deleteTodo(todo));
  }

  return (
    <div className={styles.item}>
      <div className={styles.todoDetails}>
        <CheckButton
          checked={todo.status === "completed"}
          handleCheck={handleCheck}
        />
        <div>
          <p className={styles.todoText}>{todo.title}</p>
          <p className={styles.time}>{todo.time}</p>
        </div>
      </div>
      <div className={styles.todoActions}>
        <AiTwotoneDelete className={styles.icon} onClick={handleDelete} />
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
