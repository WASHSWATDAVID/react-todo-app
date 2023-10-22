import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/modules/app.module.scss";
import TodoItem from "./TodoItem";
import { todoStatus } from "../slices/todoAction";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  const filterStatus = useSelector((state) => state.filter.filterStatus);

  // 추가(업데이트) 순으로 정렬
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  // filter 적용
  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === todoStatus.ALL) {
      return true;
    }
    return item.status === filterStatus;
  });

  // todo list
  return (
    <motion.div
      className={styles.content__wrapper}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {filteredTodoList.length === 0 ? (
        <div className={styles.emptyText}>No Todos</div>
      ) : (
        filteredTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </motion.div>
  );
}

export default AppContent;
