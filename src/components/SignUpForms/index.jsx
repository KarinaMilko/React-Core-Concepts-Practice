import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import styles from "./SignUpForms.module.css";
import classNames from "classnames";

const LOGIN_FOR_REG_EXP = {
  name: /^([A-Z][a-z]{1,31})+ ([A-Z][a-z]{1,31})$/,
  email: /^.+@.+$/,
  password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%^&.*]).{8,32}$/,
};

function SignUpForms() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setCheckbox(e.target.checked);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    setCheckbox(false);
  };

  const inputNameClassName = classNames(styles.formInput, {
    [styles.validInput]: LOGIN_FOR_REG_EXP.name.test(name),
    [styles.invalidInput]: !LOGIN_FOR_REG_EXP.name.test(name),
  });

  const inputEmailClassName = classNames(styles.formInput, {
    [styles.validInput]: LOGIN_FOR_REG_EXP.email.test(email),
    [styles.invalidInput]: !LOGIN_FOR_REG_EXP.email.test(email),
  });

  const inputPasswordClassName = classNames(styles.formInput, {
    [styles.validInput]: LOGIN_FOR_REG_EXP.password.test(password),
    [styles.invalidInput]: !LOGIN_FOR_REG_EXP.password.test(password),
  });

  const isSubmitBtnDisabled = () => {
    return !(
      LOGIN_FOR_REG_EXP.name.test(name) &&
      LOGIN_FOR_REG_EXP.email.test(email) &&
      LOGIN_FOR_REG_EXP.password.test(password) &&
      checkbox
    );
  };

  return (
    <div className={styles.formContainer}>
      <button className={styles.iconEdit}>
        <FaEdit />
      </button>
      <h2 className={styles.formHeader}>Create Your Account</h2>
      <form className={styles.loginForm} onSubmit={handleFormSubmit}>
        <label className={styles.formLabel}>
          <span className={styles.inputCaption}>FULL NAME</span>
          <input
            className={inputNameClassName}
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            placeholder="full name"
            autoFocus
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.inputCaption}>EMAIL ADDRESS</span>
          <input
            className={inputEmailClassName}
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="yourmail@mail.com"
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.inputCaption}>PASSWORD</span>
          <input
            className={inputPasswordClassName}
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
        </label>
        <label className={styles.iconCheckContainer}>
          <input
            type="checkbox"
            name="checkbox"
            checked={checkbox}
            onChange={handleCheckboxChange}
          />
          <span className={styles.iconText}>
            I Agree All Statements In Terms Of Service
          </span>
        </label>
        <button
          className={styles.submitBtn}
          disabled={isSubmitBtnDisabled()}
          type="submit"
        >
          Sing Up
        </button>
        <div className={styles.formLink}>
          I'm already a member!{" "}
          <a className={styles.linkSingIn} href="#">
            Sing In
          </a>
        </div>
      </form>
    </div>
  );
}

export default SignUpForms;
