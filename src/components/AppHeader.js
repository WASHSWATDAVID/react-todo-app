import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/modules/app.module.scss';
import Button, { SelectButton } from './Button';
import { updateFilterStatus, handleModal } from '../slices/todoSlice';
import _ from 'lodash';

function AppHeader() {
  const filterList = useSelector((state) => state.todo.filterList);
  const dispatch = useDispatch();

  const handleSelectFilter = (e) => {
    const payload = {
      filterStatus: e.target.value,
    };
    dispatch(updateFilterStatus(payload));
  };

  const handleOpenModal = () => {
    const payload = {
      type: 'add',
      isOpen: true,
    };
    dispatch(handleModal(payload));
  };

  return (
    <>
      <div className={styles.appHeader}>
        <Button onClick={handleOpenModal}>Add Task</Button>
        <SelectButton onChange={handleSelectFilter}>
          {filterList.map((filter, index) => {
            return (
              <option key={index} value={filter.value}>
                {filter.label}
              </option>
            );
          })}
        </SelectButton>
      </div>
    </>
  );
}

export default AppHeader;
