import { Link, Route, Routes } from "react-router-dom";
import UserLists from "./../../components/UserLists";
import Weather from "./../../components/Weather";
import styles from "./Books.module.css";

function Books() {
  return (
    <div className={styles.containerBooks}>
      <h1 className={styles.headerBooks}>Books</h1>
      <p>
        You can think of my weekly articles as the place where I share
        incremental lessons on how to build habits that stick and live better. I
        share the lessons I learn week-by-week in my stories and articles.
        Meanwhile, my books are where I share more comprehensive analysis on
        these topics.
      </p>

      <nav className={styles.containerNavBooks}>
        <Link to="atomic-habits" className={styles.LinkBooks}>
          Atomic Habits
        </Link>
        <Link to="habit-journal" className={styles.LinkBooks}>
          Habit Journal
        </Link>
      </nav>

      <Routes>
        <Route path="/atomic-habits" element={<Weather />}></Route>
        <Route path="/habit-journal" element={<UserLists />}></Route>
      </Routes>
    </div>
  );
}

export default Books;
