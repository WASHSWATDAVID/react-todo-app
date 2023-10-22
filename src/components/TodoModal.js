import React, { useState } from "react";
import Modal from "react-modal";
import styles from "../styles/modules/modal.module.scss";
import Button from "./Button";
import { useDispatch } from "react-redux/es/exports";
import { addTodo } from "./../slices/todoSlice";

function TodoModal({ modalOpen, closeModal }) {
  const dispatch = useDispatch();
  const initForm = {
    title: "",
    status: "incomplete",
  };

  const [formData, setFormData] = useState(initForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 데이터를 사용하세요
    console.log("Form Data:", formData);
    dispatch(addTodo(formData));
    setFormData(initForm);
    closeModal();
    // 여기에서 데이터를 처리하거나 API로 보낼 수 있습니다.
  };

  return (
    <Modal
      className={styles.container}
      isOpen={modalOpen}
      onRequestClose={() => closeModal()}
      shouldCloseOnOverlayClick={true}
      contentLabel="Example Modal"
    >
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <h1 className={styles.formTitle}>Add ToDo</h1>
        <label>
          Title
          <input
            className={styles.form}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </label>
        <label>
          Status
          <select
            className={styles.form}
            style={{ marginBottom: "40px" }}
            onChange={(e) => {
              console.log(e.target);
              setFormData({ ...formData, status: e.target.value });
            }}
          >
            <option value="incomplete">Incomplete</option>
            <option value="completed">Completed</option>
          </select>
        </label>
        <Button variant="primary" type="submit">
          Add Task
        </Button>
        <Button
          variant="secondary"
          style={{ marginLeft: "10px" }}
          onClick={() => closeModal()}
        >
          Cancle
        </Button>
      </form>
    </Modal>
  );
}

export default TodoModal;
