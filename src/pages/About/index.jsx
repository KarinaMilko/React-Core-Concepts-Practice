import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.containerAbout}>
      <h2 className={styles.headerAbout}>Hi, I’m James Clear.</h2>
      <p>
        I’ve been writing at JamesClear.com about habits, decision making, and
        continuous improvement since 2012. I’m the author of the #1 New York
        Times bestseller, Atomic Habits, which has sold more than 20 million
        copies worldwide and has been translated into more than 60 languages.
        I’m also known for my popular 3-2-1 newsletter, which is sent out each
        week to more than 3 million subscribers. Click here to learn more and
        sign up. You can find me elsewhere on Twitter and Instagram.
      </p>
      <ul>
        <li>Author of Atomic Habits</li>
        <li>Creator of the 3-2-1 newsletter</li>
        <li>Speaker at major companies and events</li>
      </ul>
    </div>
  );
}

export default About;
