import { useState } from 'react';
import { Task } from './Task';
import { getCurrentDate } from '../Utils';
import {
  addTask,
  getAllTasks,
  getActiveTasks,
  getCompletedTasks,
  toggleConfig,
} from '../Utils';
import { DEFAULT_TASKS } from '../Data/Defaults';
import { Button } from './Button';

import styled from 'styled-components';

const StyledContainer = styled.div`
  background-color: rgba(234, 235, 238, 255);
  padding: 25px;
  width: 50%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0 5px 40px rgb(16 30 54 / 30%);
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  .submit_button {
    color: white;
    background-color: #ef76c1;
    box-shadow: 0 7px 10px rgba(239, 187, 218, 255);
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    font-size: 20px;

    &:hover {
      cursor: pointer;
      background: #ee5673;
      transition: all 0.5s ease 0s;
      transform: translateY(-2px);
    }
  }

  label {
    width: 100%;
    input {
      width: 93%;
      height: 77%;
      border: 1px solid rgba(197, 193, 204, 255);
      padding: 3px 12px;
      box-shadow: 0 5px 10px rgb(16 30 54 / 15%);
    }
  }
`;

const StyledFilters = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    margin: 7px 0px 15px 10px;
  }
  button {
    background: white;
    border: 1px solid rgba(197, 193, 204, 255);
    border-radius: 4px;
    box-shadow: 0 5px 10px rgb(16 30 54 / 10%);
  }
`;

const StyledDate = styled.div`
  font-size: 15px;
  margin-bottom: 10px;
`;

export const TaskContainer = () => {
  const [task, setTask] = useState('');
  const [list, setList] = useState(DEFAULT_TASKS);
  const [taskState, setTaskState] = useState(toggleConfig.ALL_TASKS);

  const handleChange = e => setTask(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    addTask(task, list, setList);
    setTask('');
  };

  const renderTasks = () => {
    let newList = list;
    if (taskState.showActiveTasks)
      newList = list.filter(task => task.isActive === true);
    else if (taskState.showCompletedTasks)
      newList = list.filter(task => task.isActive === false);

    return newList.map(({ id, isEditing, isActive, task }) => {
      return (
        <Task
          key={id}
          id={id}
          isEditing={isEditing}
          isActive={isActive}
          task={task}
          setList={setList}
          list={list}
        />
      );
    });
  };

  return (
    <StyledContainer>
      <StyledDate>{getCurrentDate()}</StyledDate>
      <StyledForm onSubmit={handleSubmit}>
        <label>
          <input type="text" name="name" value={task} onChange={handleChange} />
        </label>
        <input className={'submit_button'} type="submit" value="+  Add Task" />
      </StyledForm>

      <StyledFilters>
        <Button
          handleClick={() => getAllTasks(setTaskState)}
          label={'All Tasks'}
        />
        <Button
          handleClick={() => getActiveTasks(setTaskState)}
          label={'Active Tasks'}
        />
        <Button
          handleClick={() => getCompletedTasks(setTaskState)}
          label={'Completed Tasks'}
        />
      </StyledFilters>
      {renderTasks()}
    </StyledContainer>
  );
};
