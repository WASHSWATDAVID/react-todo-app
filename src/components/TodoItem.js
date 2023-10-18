import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/modules/todoItem.module.scss';
import CheckButton from './CheckButton';
import { deleteTodo, updateTodo } from '../slices/todoSlice';
import TodoModal from './TodoModal';

function TodoItem({ todo }) {
  const [checked, setChecked] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    
    if (todo.status === 'incomplete') {
      console.log(todo)
      setChecked(false);
    } else {
      setChecked(true);
    }
  }, [todo, checked]);

  const handleCheck = () => {
    const payload = {
      ...todo,
      status: todo.status === 'incomplete' ? 'complete' : 'incomplete',
    };

    dispatch(updateTodo(payload));
  };

  const handleDeleteTodo = () => {
    const payload = {
      id: todo.id,
    };
    dispatch(deleteTodo(payload));
  };
  return (
    <>
      <div className={styles.item}>
        <div className={styles.todoDetails}>
          <CheckButton checked={checked} handleCheck={handleCheck} />
          <div className={styles.texts}>
            <p className={!checked ? styles.todoText : styles.complete__text}>
              {todo.title}
            </p>
            <p className={styles.time}>{todo.time}</p>
          </div>
        </div>
        <div className={styles.todoActions}>
          <button
            type="button"
            className={styles.edit__btn}
            onClick={() => setModalIsOpen(true)}
          >
            Edit
          </button>
          <button
            type="button"
            className={styles.delete__btn}
            onClick={handleDeleteTodo}
          >
            Delete
          </button>
        </div>
      </div>
      <TodoModal
        type="update"
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        todo={todo}
      />
    </>
  );
}

export default TodoItem;
