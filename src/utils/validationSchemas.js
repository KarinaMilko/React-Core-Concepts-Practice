import * as yup from "yup";

export const LOGIN_FORM = yup.object({
  login: yup.string().email().trim().required(),
  password: yup
    .string()
    .trim()
    .min(6)
    .max(32)
    .matches(/(?=.*[a-z])/, "Password must contain at least 1 a-z ")
    .matches(/(?=.*[A-Z])/, "Password must contain at least 1 A-Z ")
    .matches(/(?=.*\d)/, "Password must contain at least 1 number ")
    .required(),
});
