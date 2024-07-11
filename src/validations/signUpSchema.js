import { object, ref, string } from "yup";

export const signUpSchema = object().shape({
  confirmPassword: string().required("Confirm your password").oneOf([ref('password'), null], "Password must match"),
  password: string().required("Password is required").min(7, 'Password must be at least 7 characters'),
  email: string().required("Email is required").email("Not a valid email"),
})