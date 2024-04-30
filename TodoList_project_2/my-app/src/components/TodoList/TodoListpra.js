import React, { useState } from "react";

const TodoListpra = () => {
  const [newTask, setNewTask] = useState("");
  const [task, setTask] = useState([]);

  const getData = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() != "") {
      setTask([...task, { id: Date.now(), text: newTask }]);
    }
    setNewTask("");
  };

  const removeHandler = (id) => {
    const up = task.filter((item) => item.id != id);

    setTask(up);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter_Task"
        value={newTask}
        onChange={getData}
      />

      <button onClick={addTask}>Add_Task</button>
      <ul>
        {task.map((item) => (
          <li key={item.id}>
            <h1>{item.text}</h1>
            <button onClick={() => removeHandler(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListpra;
