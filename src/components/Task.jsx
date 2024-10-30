// src/components/Task.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
        disabled={task.completed} // Disable if task is completed
      />
      <span>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default Task;
