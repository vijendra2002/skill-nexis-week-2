import { useState } from "react";
import styles from "../styles/Component.module.css";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    if (!task.trim()) return;

    setTodos((items) => [
      ...items,
      { id: Date.now(), title: task.trim() }
    ]);
    setTask("");
  };

  const deleteTodo = (id) => {
    setTodos((items) => items.filter((item) => item.id !== id));
  };

  return (
    <section className={styles.card}>
      <h2>3. React To-Do App</h2>

      <form onSubmit={addTodo} className={styles.form}>
        <input
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit">Add</button>
      </form>

      <ul className={styles.list}>
        {todos.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <button onClick={() => deleteTodo(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
