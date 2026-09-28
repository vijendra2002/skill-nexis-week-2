import styles from "../styles/Page.module.css";

export default function Home() {
  return (
    <section className={styles.card}>
      <span className={styles.badge}>React Fundamentals</span>
      <h2>Week 2 Practice Dashboard</h2>
      <p>
        This app demonstrates product information, props and state, a
        To-Do app, React Router navigation and CSS Modules.
      </p>
    </section>
  );
}
