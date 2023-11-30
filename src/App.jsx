import { useState } from "react";
import "./App.css";

import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app">
      <h1>Todo list</h1>
      <div className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggle={toggleTask}
          />
        ))}
      </div>
      <div className="add-task">
        <input
          type="text"
          placeholder="New Task"
          onKeyDown={(e) => e.key === "Enter" && addTask(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
