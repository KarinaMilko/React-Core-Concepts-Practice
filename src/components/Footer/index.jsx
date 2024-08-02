import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <h2 className={styles.footerTitle}>James Clear</h2>
      <ul className={styles.containerLink}>
        <li>Privacy & Terms of Use</li>
        <li className={styles.footerLink}>Hosting by LiquidWeb</li>
        <li>Forms by OptinMonster</li>
      </ul>
    </div>
  );
}

export default Footer;
