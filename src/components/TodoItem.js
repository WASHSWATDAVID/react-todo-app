import React, { useEffect, useState } from 'react';
import styles from '../styles/modules/todoItem.module.scss';
import CheckButton from './CheckButton';

function TodoItem({ todo }) {
  return (
    <div className={styles.item}>
      <div className={styles.todoDetails}>
        <CheckButton />
        <div className={styles.texts}>
          <p className={styles.todoText}>{todo.title}</p>
          <p className={styles.time}>{todo.time}</p>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
