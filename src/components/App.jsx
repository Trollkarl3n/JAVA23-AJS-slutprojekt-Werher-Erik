import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        const fetchedTasks = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTasks(fetchedTasks);
      } catch (error) {
        setError("Error fetching tasks");
      }
    };
    fetchTasks();
  }, []);

  const addTask = async (newTask) => {
    try {
      const docRef = await addDoc(collection(db, "tasks"), newTask);
      setTasks([...tasks, { id: docRef.id, ...newTask }]);
    } catch (error) {
      setError("Error adding task");
    }
  };

  const updateTask = async (taskId, updatedTask) => {
    try {
      await updateDoc(doc(db, "tasks", taskId), updatedTask);
      const updatedTasks = tasks.map(task => task.id === taskId ? updatedTask : task);
      setTasks(updatedTasks);
    } catch (error) {
      setError("Error updating task");
    }
  };

  const removeTask = async (taskId) => {
    try {
      await deleteDoc(doc(db, "tasks", taskId));
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      setError("Error removing task");
    }
  };

  return (
    <div className="container">
      <h1>Scrum Board</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} removeTask={removeTask} />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;