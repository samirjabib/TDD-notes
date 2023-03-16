import { LoginPage } from "./LoginPage";

import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const getSubmitBtn = () => screen.getByRole('button', { name: /submit/i }) // get button submit for reuse in diferents test


test("it should render the login", () => {
  render(<LoginPage />); //Render is a method for render componentet of react with the library

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
  render(<LoginPage />);

  //submit form
  userEvent.click(getSubmitBtn()) //User event is a library alternative to fireEvent but better 

  expect(await screen.findByText(/The email is required/i)).toBeInTheDocument(); //the find method search of async way in the component for this i use async function. 
  expect(
    await screen.findByText(/The password is required/i)
  ).toBeInTheDocument();
  //expect validation errors
});

test("it should validate the email format ", async () => {
  //La marcamos como asincrono por que estamos esperando un retorno en los datos del form.
  render(<LoginPage />);

  userEvent.type((screen.getByLabelText(/email/i)), 'invaliid email')  //search the event with the invalida email

  //submit form
  userEvent.click(getSubmitBtn()) //make a click in form XD

  expect(await screen.findByText(/The email is not valid/i)).toBeInTheDocument();

});
