import { NavLink, Route, Routes } from "react-router-dom";
import ProductInfo from "./components/ProductInfo";
import PropsStateDemo from "./components/PropsStateDemo";
import TodoApp from "./components/TodoApp";
import Home from "./pages/Home";
import About from "./pages/About";
import styles from "./styles/App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div>
          <h1>Week 2 React Practice</h1>
          <p>Skill Nexis Full Stack Developer Internship</p>
        </div>

        <nav className={styles.nav}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/practice">Practice</NavLink>
        </nav>
      </header>

      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/practice"
            element={
              <>
                <ProductInfo
                  name="Wireless Headphones"
                  price={2499}
                  category="Electronics"
                />
                <PropsStateDemo studentName="Vijendra" />
                <TodoApp />
              </>
            }
          />
        </Routes>
      </main>
    </div>
  );
}
