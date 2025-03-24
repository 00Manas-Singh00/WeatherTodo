import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/Actions/taskActions';
import './TaskInput.css';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('medium');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask({
        id: Date.now(),
        text: task,
        priority,
        completed: false,
        createdAt: new Date().toISOString()
      }));
      setTask('');
      // Keep the same priority for next task
    }
  };

  return (
    <div className="task-input-container">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <div className="input-group">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="What needs to be done?"
            className="task-input"
          />
        </div>
        <div className="priority-selector">
          <label>Priority:</label>
          <div className="priority-options">
            <label className={`priority-option ${priority === 'low' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="priority"
                value="low"
                checked={priority === 'low'}
                onChange={() => setPriority('low')}
              />
              <span>Low</span>
            </label>
            <label className={`priority-option ${priority === 'medium' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="priority"
                value="medium"
                checked={priority === 'medium'}
                onChange={() => setPriority('medium')}
              />
              <span>Medium</span>
            </label>
            <label className={`priority-option ${priority === 'high' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="priority"
                value="high"
                checked={priority === 'high'}
                onChange={() => setPriority('high')}
              />
              <span>High</span>
            </label>
          </div>
        </div>
        <button type="submit" className="add-button">Add Task</button>
      </form>
    </div>
  );
};

export default TaskInput;