import React, { useState } from "react";

function Task({ task, updateTask, removeTask }) {
  const [assignedTo, setAssignedTo] = useState(task.assigned);
  const [error, setError] = useState("");

  const handleAssign = (e) => {
    e.preventDefault();
    if (!assignedTo.trim()) {
      setError("Please provide a name to assign the task");
      return;
    }
    updateTask(task.id, { ...task, status: "in progress", assigned: assignedTo });
    setError("");
  };

  const handleDone = () => {
    updateTask(task.id, { ...task, status: "done" });
  };

  return (
    <div className="task">
      <p>{task.assignment}</p>
      <p>Category: {task.category}</p>
      <p>Status: {task.status}</p>
      <p>Assigned to: {task.assigned}</p>
      {task.status === "to do" && (
        <form onSubmit={handleAssign}>
          <input 
            type="text" 
            value={assignedTo} 
            onChange={(e) => setAssignedTo(e.target.value)} 
            placeholder="Assign to"
          />
          <button type="submit">Assign</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      )}
      {task.status === "in progress" && <button onClick={handleDone}>Done</button>}
      {task.status === "done" && <button onClick={() => removeTask(task.id)}>Remove X</button>}
    </div>
  );
}

export default Task;