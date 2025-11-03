import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([
    { text: "game", completed: false },
    { text: "work", completed: true },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const deleteTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  const toggleTask = (indexToToggle) => {
    const updatedTasks = tasks.map((task, index) =>
      index === indexToToggle ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div style={{ margin: "1rem" }}>
      <h2>TODO LIST</h2>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
        placeholder="cook food ..."
      />
      <button onClick={addTask}>add</button>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            onClick={() => toggleTask(index)}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              color: task.completed ? "gray" : "black",
              cursor: "pointer",
              margin: "0.5rem 0",
            }}
          >
            {task.text}
            <button
              onClick={(e) => {
                e.stopPropagation(); 
                deleteTask(index);
              }}
              style={{ margin: "0.5rem 0 0 1rem" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
