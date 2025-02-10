import React, { useState } from "react";

const TodoList = ({ initialTasks }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Moyenne");
  const [search, setSearch] = useState("");

  const addTask = () => {
    if (taskName.trim() !== "") {
      setTasks([...tasks, { name: taskName, priority, completed: false }]);
      setTaskName("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Todo List avec Priorités</h2>

      <input
        type="text"
        placeholder="Rechercher une tâche"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            <strong>{task.name}</strong> - {task.priority}
            <button onClick={() => toggleTask(index)}>
              {task.completed ? "Non terminé" : "Terminé"}
            </button>
            <button onClick={() => deleteTask(index)}>Supprimer</button>
          </li>
        ))}
      </ul>

      <p>Total des tâches : {tasks.length}</p>
      <p>Tâches terminées : {tasks.filter(task => task.completed).length}</p>

      <input
        type="text"
        placeholder="Nom de la tâche"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Haute">Haute</option>
        <option value="Moyenne">Moyenne</option>
        <option value="Basse">Basse</option>
      </select>
      <button onClick={addTask}>Ajouter</button>
    </div>
  );
};

// Exemple d'utilisation avec des tâches initiales
const initialTasks = [
  { name: "Finir le projet React", priority: "Haute", completed: false },
  { name: "Préparer le repas", priority: "Moyenne", completed: false },
  { name: "Aller courir", priority: "Basse", completed: false }
];

const App = () => {
  return <TodoList initialTasks={initialTasks} />;
};

export default App;
