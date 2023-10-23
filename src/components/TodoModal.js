import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "../styles/modules/modal.module.scss";
import Button from "./Button";
import { useDispatch } from "react-redux/es/exports";
import { addTodo, updateTodo } from "./../slices/todoSlice";
import { todoStatus, modalState } from "../slices/todoAction";

function TodoModal({ modalType, todo, modalOpen, showModal }) {
  const dispatch = useDispatch();

  // form data
  const [formData, setFormData] = useState(todo);

  const handleSubmit = (e) => {
    // 특정 이벤트를 막는 용도
    e.preventDefault();
    // edit 모달일 경우 updateTodo
    if (modalType === modalState.EDIT) {
      dispatch(updateTodo(formData));
    } else {
      // add 모달일 경우 addTodo
      dispatch(addTodo(formData));
      setFormData({
        title: "",
        status: todoStatus.INCOMPLETE
      });
    }
    showModal();
  };

  return (
    <>
      <Modal
        appElement={document.getElementById("root")}
        className={styles.container}
        isOpen={modalOpen}
        onRequestClose={() => showModal()}
      >
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <h1 className={styles.formTitle}>{modalType} ToDo</h1>
          <label>
            Title
            <input
              className={styles.form}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              value={formData.title}
            />
          </label>
          <label>
            Status
            <select
              className={styles.form}
              style={{ marginBottom: "40px" }}
              onChange={(e) => {
                setFormData({ ...formData, status: e.target.value });
              }}
              defaultValue={formData.status}
            >
              <option value={todoStatus.INCOMPLETE}>Incomplete</option>
              <option value={todoStatus.COMPLETED}>Completed</option>
            </select>
          </label>
          <Button variant="primary" type="submit">
            Add Task
          </Button>
          <Button
            variant="secondary"
            style={{ marginLeft: "10px" }}
            onClick={() => showModal()}
          >
            Cancle
          </Button>
        </form>
      </Modal>
    </>
  );
}

export default TodoModal;
