import { LoginPage } from "./LoginPage";

import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("it should render the login", () => {
  render(<LoginPage />);

  expect(screen.getByRole("heading", { name: /login/i }));
});

test("it should render form elements", () => {
  render(<LoginPage />);

  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
});

test.only("it should validate the inputs as required", async() => { //La marcamos como asincrono por que estamos esperando un retorno en los datos del form. 
  render(<LoginPage />);

  //submit form
  userEvent.click(screen.getByRole("button", { name: /submit/i }));

  expect(await screen.getByText(/the email is required/i)).toBeInTheDocument();
  expect(
    await screen.getByText(/the password is required/i)
  ).toBeInTheDocument();

  //expect validation errors
});
