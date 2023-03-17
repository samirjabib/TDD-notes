import * as yup from "yup";

export const loginShema = yup //yup is a method for validations in react-hook-form
  .object({
    email: yup.string().required("The email is required").email('The email is not valid'), //add this in the schema for valid email, is the min solutio for this on test
    password: yup.string().required("The password is required/"),
  })
  .required()