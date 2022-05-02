import { useState } from 'react';
import { Button } from './Button';
import { setEditingState, saveEditedTask } from '../Utils';

export const EditModal = ({ task, id, list, setList }) => {
  const [newTask, setNewTask] = useState('');

  const handleChange = e => setNewTask(e.target.value);
  const handleClick = (string, id) => saveEditedTask(string, id, list, setList);

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder={task}
        value={newTask}
        onChange={handleChange}
      />

      <Button
        handleClick={() => handleClick(newTask, id, list)}
        label={'Save'}
      />
      <Button
        handleClick={() => setEditingState(id, list, setList)}
        label={'Cancel'}
      />
    </div>
  );
};
