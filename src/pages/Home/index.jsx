import styles from "./Home.module.css";
import img from "./atomic-habits-full-dots.png";
function Home() {
  return (
    <div className={styles.containerHome}>
      <h1 className={styles.headerHome}>
        An Easy & Proven Way to Build Good Habits & Break Bad Ones
      </h1>
      <img src={img} className={styles.imgHome} alt="book" />
    </div>
  );
}

export default Home;
