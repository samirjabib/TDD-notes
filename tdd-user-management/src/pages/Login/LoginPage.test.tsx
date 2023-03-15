import { LoginPage } from "./LoginPage";

import { screen, render } from '@testing-library/react' 


test('it should render the login', () => {
    render(<LoginPage/>)

    expect(screen.getByRole('heading', {name:/login/i}))
})


test('it should render form elements', () => {
    render(<LoginPage/>)

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
})