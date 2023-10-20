import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/modules/app.module.scss';
import TodoItem from './TodoItem';
import _ from 'lodash';
import Button from './Button';

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  const filterStatus = useSelector((state) => state.todo.filterStatus);

  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredTodoList =
    filterStatus !== 'all'
      ? _.filter(sortedTodoList, { status: filterStatus })
      : sortedTodoList;

  return (
    <motion.div
      className={styles.content__wrapper}
      variants={container}
      initial='hidden'
      animate='visible'
    >
      {filteredTodoList.length > 0 ? (
        filteredTodoList.map((item, index) => (
          <TodoItem todo={item} key={index} />
        ))
      ) : (
        <div
          className={styles.emptyText}
        >
          No todo List
        </div>
      )}
    </motion.div>
  );
}

export default AppContent;
