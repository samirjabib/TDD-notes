import { TextField, Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "../types/Login.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginShema } from "../pages/Login/Login.shema";

import axios from "axios";
import { useState } from "react";

const loginService = async (email: string, password: string) => {
  await axios.post("/login", {
    email,
    password,
  });
};

export const Form = () => {
  const [ isLoading, setIsLoading] =useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors }, //descostructed error for formstate
  } = useForm<Inputs>({ resolver: yupResolver(loginShema) }); //invoque resolver with the shema for making validators

  const onSubmit: SubmitHandler<Inputs> = async({email, password}) => {
    setIsLoading(true)
    await loginService(email, password)
  } //data returns the state of form, remenber assgin submit type to hook form

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Email"
        {...register("email", { required: true })}
        helperText={errors.email?.message}
      />

      <TextField
        label="Password"
        type="password"
        {...register("password", { required: true })}
        helperText={errors.password?.message}
      />

      <Button type="submit" variant="contained" disabled={isLoading}>
        Submit
      </Button>
    </form>
  );
};
