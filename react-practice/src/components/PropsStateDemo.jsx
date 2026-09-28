import { useState } from "react";
import styles from "../styles/Component.module.css";

export default function PropsStateDemo({ studentName }) {
  const [count, setCount] = useState(0);

  return (
    <section className={styles.card}>
      <h2>2. Props & State</h2>
      <p>
        The component receives <strong>{studentName}</strong> through props.
      </p>
      <p>State counter: {count}</p>
      <button onClick={() => setCount((value) => value + 1)}>
        Increase
      </button>
    </section>
  );
}
