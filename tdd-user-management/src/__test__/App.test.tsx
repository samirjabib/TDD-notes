import { render } from '@testing-library/react'
import App from '../App'

test('renders main page correctly', () =>{
    render(<App/>)
    expect(true).toBeTruthy()
})