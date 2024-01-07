import PropTypes from 'prop-types';
import "../styles/TaskList.css" 

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.text}
          <button onClick={() => onDeleteTask(task.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
    onDeleteTask: PropTypes.func.isRequired,
  };

export default TaskList;
