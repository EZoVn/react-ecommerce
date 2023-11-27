const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      // ajoute la class task et task.completed si completed sinon rien
      className={`task ${task.completed ? "completed" : ""}`}
    >
      <span onClick={() => onToggle(task.id)}>{task.title}</span>
      <span onClick={() => onToggle(task.id)}>Création : {task.id}</span>

      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
