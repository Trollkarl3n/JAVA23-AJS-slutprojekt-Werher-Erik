import React from "react";
import Task from "./Task";

function TaskList({ tasks, updateTask, removeTask }) {
  const filterTasks = (status) => tasks.filter(task => task.status === status);

  return (
    <div className="task-list">
      <div>
        <h2>To Do</h2>
        {filterTasks("to do").map(task => (
          <Task key={task.id} task={task} updateTask={updateTask} removeTask={removeTask} />
        ))}
      </div>
      <div>
        <h2>In Progress</h2>
        {filterTasks("in progress").map(task => (
          <Task key={task.id} task={task} updateTask={updateTask} removeTask={removeTask} />
        ))}
      </div>
      <div>
        <h2>Done</h2>
        {filterTasks("done").map(task => (
          <Task key={task.id} task={task} updateTask={updateTask} removeTask={removeTask} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;