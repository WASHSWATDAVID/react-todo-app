import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "../styles/modules/modal.module.scss";
import Button from "./Button";
import { useDispatch } from "react-redux/es/exports";
import { addTodo, updateTodo } from "./../slices/todoSlice";

function TodoModal({ modalType, todo, modalOpen, closeModal }) {
  console.log("modalType");
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    status: "incomplete",
  });

  useEffect(() => {
    if (modalType === "edit" && todo.title) {
      // 수정 모달일 경우 todo 데이터로 초기화
      setFormData(todo);
    } else if (modalType === "add") {
      console.log(modalType);
      // 새로운 항목 추가 모달일 경우 초기 데이터 설정
      setFormData({
        title: "",
        status: "incomplete",
      });
    }
  }, [modalType, todo]);

  const handleSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    if (modalType === "edit") {
      dispatch(updateTodo(formData));
    } else {
      dispatch(addTodo(formData));
    }
    closeModal();
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
              console.log(e.target);
              setFormData({ ...formData, status: e.target.value });
            }}
            defaultValue={formData.status}
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
