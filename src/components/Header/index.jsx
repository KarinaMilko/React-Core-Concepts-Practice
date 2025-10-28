import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const linkStyle = ({ isActive }) =>
  isActive ? { borderBottom: "1px solid grey", fontWeight: "bold" } : {};

function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav>
        <ul className={styles.linkContainer}>
          <li>
            <NavLink to="/" className={styles.link} style={linkStyle}>
              Home
            </NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to="/about" className={styles.link} style={linkStyle}>
              About
            </NavLink>
          </li>
          <li className={styles.link}>
            <NavLink to="/books" className={styles.link} style={linkStyle}>
              Books
            </NavLink>
          </li>

          <li>
            <NavLink to="/userlists" className={styles.link} style={linkStyle}>
              User Lists
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" className={styles.link} style={linkStyle}>
              Sign Up Forms
            </NavLink>
          </li>
          <li>
            <NavLink to="/slider" className={styles.link} style={linkStyle}>
              Slider
            </NavLink>
          </li>
          <li>
            <NavLink to="/weather" className={styles.link} style={linkStyle}>
              Weather
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/weather-class"
              className={styles.link}
              style={linkStyle}
            >
              Weather Class
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={styles.link} style={linkStyle}>
              User Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
