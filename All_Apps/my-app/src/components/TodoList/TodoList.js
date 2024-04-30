import React, { useState } from "react";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() != "") {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
    }
    setNewTask("");
  };

  const getdata = (e) => {
    setNewTask(e.target.value);
  };

  const removeItem = (id) => {
    const up = tasks.filter((task) => task.id != id);
    setTasks(up);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter_Task"
        value={newTask}
        onChange={getdata}
      />
      <button className={classes.button} onClick={addTask}>
        Add_Task
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h2>{task.text}</h2>
            <button onClick={() => removeItem(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
