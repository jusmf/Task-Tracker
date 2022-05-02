import { Button } from './Button';
import { EditModal } from './EditModal';
import { EditSymbol } from '../Images/EditSymbol';
import { TrashSymbol } from '../Images/TrashSymbol';

import {
  setEditingState,
  deleteTask,
  setAsComplete,
  setAsActive,
} from '../Utils';

import styled from 'styled-components';

const StyledTask = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin: 7px 0px;
  padding: 17px 10px;
  border: 1px solid rgba(197, 193, 204, 255);
  border-radius: 4px;
  box-shadow: 0 5px 10px rgb(16 30 54 / 10%);

  div:first-child {
    margin-left: 10px;
    font-size: 20px;
  }

  div {
    display: flex;
    align-content: center;

    .symbol {
      border: none;
      background: none;
      padding: 0px;
      margin: 0px 15px 0px -5px;

      &:hover {
        cursor: pointer;
        transition: all 0.5s ease 0s;
        transform: translateY(-2px);
      }
    }
  }

  &:hover {
    cursor: pointer;
    transition: all 0.5s ease 0s;
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgb(16 30 54 / 30%);
  }
`;

export const Task = ({ id, isEditing, task, setList, list }) => {
  return isEditing ? (
    <EditModal id={id} task={task} list={list} setList={setList} />
  ) : (
    <StyledTask>
      <div>{task}</div>
      <div>
        <Button
          className="symbol"
          handleClick={() => setEditingState(id, list, setList)}
          label={<EditSymbol />}
        />
        <Button
          className="symbol"
          handleClick={() => deleteTask(id, list, setList)}
          label={<TrashSymbol />}
        />
        <Button
          handleClick={() => setAsComplete(id, list, setList)}
          label={'Set As Complete'}
        />
        <Button
          handleClick={() => setAsActive(id, list, setList)}
          label={'Set As Active'}
        />
      </div>
    </StyledTask>
  );
};
