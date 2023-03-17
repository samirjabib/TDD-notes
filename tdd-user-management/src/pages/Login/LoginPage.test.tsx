import { LoginPage } from "./LoginPage";

import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../mocks/render-with-providers";

const getSubmitBtn = () => screen.getByRole("button", { name: /submit/i }); // get button submit for reuse in diferents test


test("it should render the login", () => {
  renderWithProviders(<LoginPage />) //render component by meams props

  expect(screen.getByRole("heading", { name: /login/i })); //search heading by role name
});

test("it should render form elements", () => {
  renderWithProviders(<LoginPage />)

  expect(screen.getByLabelText(/email/i)).toBeInTheDocument(); //we use the query sincronous for verficy that email input exists. 
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument(); 
  expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument(); //we searh with the rol of label in this case this is button
});

test("it should validate the inputs as required", async () => {
  //La marcamos como asincrono por que estamos esperando un retorno en los datos del form.
  renderWithProviders(<LoginPage />)

  //submit form
  await userEvent.click(getSubmitBtn()); //User event is a library alternative to fireEvent but better, here simulate the action from a client. 

  expect(await screen.findByText(/The email is required/i)).toBeInTheDocument(); //the find method search of async way in the component for this i use async function.
  expect(
    await screen.findByText(/The password is required/i)
  ).toBeInTheDocument(); //simulate a client with form completes this process is asyncronous. 
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

test("it should disable the submit button while is fetching", async () => {
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


test.only('it should show a loading indicator while is fetching the login', async () => {
  renderWithProviders(<LoginPage />) //pass component to method  for render with react-query

  expect( //use expect method jest for look a match with the dom
    screen.queryByRole('progressbar', {name: /loading/i}), //search loading with query, rol progress bar is a rol for html
  ).not.toBeInTheDocument() // we establish when loading don't this in the DOM.

  await userEvent.type(screen.getByLabelText(/email/i), 'john.doe@mail.com') //wait for labels complete
  await userEvent.type(screen.getByLabelText(/password/i), '123456')

  await userEvent.click(getSubmitBtn()) //simulate click event with.

  expect(await screen.findByRole('progressbar', {name: /loading/i})) //when the fetch start we verify that if loading exists
})