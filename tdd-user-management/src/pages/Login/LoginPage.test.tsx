import { LoginPage } from "./LoginPage";

import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient } from "react-query";
import { renderWithProviders } from "../../mocks/render-with-providers";

const getSubmitBtn = () => screen.getByRole("button", { name: /submit/i }); // get button submit for reuse in diferents test


test("it should render the login", () => {
  renderWithProviders(<LoginPage />)

  expect(screen.getByRole("heading", { name: /login/i }));
});

test("it should render form elements", () => {
  render(<LoginPage />);

  expect(screen.getByLabelText(/email/i)).toBeInTheDocument(); //optain input with the labeltext of label. this method tobeindocument is provided with json-dom
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument(); //we searh with the rol of label in this case this is button
});

test("it should validate the inputs as required", async () => {
  //La marcamos como asincrono por que estamos esperando un retorno en los datos del form.
  renderWithProviders(<LoginPage />)

  //submit form
  await userEvent.click(getSubmitBtn()); //User event is a library alternative to fireEvent but better

  expect(await screen.findByText(/The email is required/i)).toBeInTheDocument(); //the find method search of async way in the component for this i use async function.
  expect(
    await screen.findByText(/The password is required/i)
  ).toBeInTheDocument();
  //expect validation errors
});

test("it should validate the email format ", async () => {
  //this is async because i expetecd a return value with use the findByText
  renderWithProviders(<LoginPage />)

  await userEvent.type(screen.getByLabelText(/email/i), "invalid email"); //search the event with the invalida email

  //submit form
  await userEvent.click(getSubmitBtn()); //make a click in form XD

  expect(
    await screen.findByText(/The email is not valid/i)
  ).toBeInTheDocument();
});

test.only("it should disable the submit button while is fetching", async () => {
  renderWithProviders(<LoginPage />)

  expect(getSubmitBtn()).not.toBeDisabled();

  await userEvent.type(screen.getByLabelText(/email/i), "john.doe@mail.com"); //user type and click return a await
  await waitFor(() =>
    expect(screen.getByLabelText(/email/i)).toHaveValue("john.doe@mail.com")
  );
  userEvent.type(screen.getByLabelText(/password/i), "123456");
  await waitFor(() =>
    expect(screen.getByLabelText(/password/i)).toHaveValue("123456")
  );

  userEvent.click(getSubmitBtn());

  await waitFor(() => expect(getSubmitBtn()).toBeDisabled()); // awaitfor is a method from testing libray allow us make peticions async like https
});
