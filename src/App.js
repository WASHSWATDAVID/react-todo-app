import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';
import TodoModal from '../src/components/TodoModal';
import { useSelector, useDispatch } from 'react-redux';
import { handleModal } from '../src//slices/todoSlice';

function App() {
  const { type, isOpen, title, status } = useSelector(
    (state) => state.todo.modalValue
  );
  const dispatch = useDispatch();
  return (
    <>
      <div className='container'>
        <PageTitle>TODO List</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
          <TodoModal />
        </div>
      </div>
      <Toaster
        position='bottom-right'
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  );
}

export default App;
