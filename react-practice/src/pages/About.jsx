import styles from "../styles/Page.module.css";

export default function About() {
  return (
    <section className={styles.card}>
      <span className={styles.badge}>About</span>
      <h2>Skill Nexis Week 2</h2>
      <p>
        Practice project covering the React Fundamentals questions provided
        for Week 2.
      </p>
    </section>
  );
}
