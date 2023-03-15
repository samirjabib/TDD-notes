import { Typography, TextField, Button } from "@mui/material";
import "./LoginPage.styles.css";

import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="login_container">
      <Typography component="h1">Login</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField label="email" {...register("email", { required: true })} />
        <TextField
          label="password"
          {...register("password", { required: true })}
        />
        <Button>submit</Button>
      </form>
    </div>
  );
};
