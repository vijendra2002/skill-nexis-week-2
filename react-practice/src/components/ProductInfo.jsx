import styles from "../styles/Component.module.css";

export default function ProductInfo({ name, price, category }) {
  return (
    <section className={styles.card}>
      <h2>1. Product Information</h2>
      <div className={styles.product}>
        <div>
          <h3>{name}</h3>
          <p>{category}</p>
        </div>
        <strong>₹{price}</strong>
      </div>
    </section>
  );
}
