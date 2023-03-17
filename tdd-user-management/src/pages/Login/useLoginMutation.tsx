import axios from "axios";
import { Inputs } from "../../types/Login.types";
import { useMutation } from "react-query";

const loginService = async (email: string, password: string) => {
  await axios.post("/login", {
    email,
    password,
  });
};

export const useLoginMutation = () =>
  useMutation((payload: Inputs) =>
    loginService(payload.email, payload.password)
  );
