import { ErrorMessage, Field, Form, Formik } from "formik";
import { LOGIN_FORM } from "./../../utils/validationSchemas";
import classNames from "classnames";
import styles from "./LoginForm.module.sass";

function LoginForm() {
  const initialValues = {
    login: "",
    password: "",
  };

  const handleSubmit = (value, formikBag) => {
    console.log(value);
    formikBag.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LOGIN_FORM}
      >
        {(formikProps) => {
          const loginClassName = classNames(styles.formInput, {
            [styles.valid]:
              !formikProps.errors.login && formikProps.touched.login,
            [styles.invalid]:
              formikProps.errors.login && formikProps.touched.login,
          });

          const passwordClassName = classNames(styles.formInput, {
            [styles.valid]:
              !formikProps.errors.password && formikProps.touched.password,
            [styles.invalid]:
              formikProps.errors.password && formikProps.touched.password,
          });

          return (
            <Form className={styles.formContainer}>
              <label className={styles.formLabel}>
                <Field
                  className={loginClassName}
                  type="text"
                  name="login"
                  placeholder="email@email.com"
                  autofocus
                />
                <ErrorMessage
                  className={styles.formError}
                  name="login"
                  component="span"
                />
              </label>
              <label className={styles.formLabel}>
                <Field
                  className={passwordClassName}
                  type="text"
                  name="password"
                  placeholder="your password"
                />
                <ErrorMessage
                  className={styles.formError}
                  name="password"
                  component="span"
                />
              </label>
              <button className={styles.formBtn} type="submit">
                LOGIN
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default LoginForm;
