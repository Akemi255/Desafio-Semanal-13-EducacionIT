import { useState } from 'react';
import PropTypes from 'prop-types';
import "../styles/TaskForm.css"
 
const TaskForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      const newTask = {
        id: new Date().getTime(),
        text: taskText,
      };
      onAddTask(newTask);
      setTaskText('');
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Ingrese una nueva tarea"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button type="button" onClick={handleAddTask}>
          Agregar
        </button>
      </form>
    </div>
  );
};

TaskForm.propTypes = {
    onAddTask: PropTypes.func.isRequired,
  };
export default TaskForm;
