import LoginForm from "../../components/LoginForm";
import styles from "./UserProfilePage.module.sass";

function UserProfilePage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.headerForm}>LOGIN TO YOUR ACCOUNT</h1>
      <LoginForm />
    </div>
  );
}

export default UserProfilePage;
