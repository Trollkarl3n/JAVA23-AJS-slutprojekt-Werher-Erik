import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("ux");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      setError("Task cannot be empty");
      return;
    }
    addTask({ assignment: task, category, status: "to do", assigned: "none" });
    setTask("");
    setCategory("ux");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Task" 
        required 
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="ux">UX</option>
        <option value="dev frontend">Dev Frontend</option>
        <option value="dev backend">Dev Backend</option>
      </select>
      <button type="submit">Assign</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

export default TaskForm;