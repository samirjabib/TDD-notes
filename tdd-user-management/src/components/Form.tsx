import { TextField, Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "../types/Login.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginShema } from "../pages/Login/Login.shema";
import { useLoginMutation } from '../pages/Login/useLoginMutation';
import { StyledLoadder } from "./Loader";



export const Form = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }, //descostructed error for formstate
  } = useForm<Inputs>({ resolver: yupResolver(loginShema) }); //invoque resolver with the shema for making validators

  const mutation = useLoginMutation()

  const onSubmit: SubmitHandler<Inputs> = async ({email, password }) =>{
    mutation.mutate({email, password})
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
    {mutation.isLoading && (
        <StyledLoadder role="progressbar" aria-label="loading" />
      )}
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

      <Button type="submit" variant="contained" disabled={mutation.isLoading}>
        Submit
      </Button>
    </form>
  );
};
