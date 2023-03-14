import { Accordion } from './Accordion'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Acordion', () => {
  beforeEach(() => {
    render(
      <Accordion title="Testing">
        <h4>Content</h4>
      </Accordion>
    )
  })

  test('should show title all the time', () => {
    expect(screen.getByText(/testing/i)).toBeDefined()
  })

  test('should not show the content at the start', () => {
    expect(screen.queryByText(/Content/i)).toBeNull()
  })

  test('should show the content white title is clicked', () =>{
    const button =screen.getByText(/open/i)
    fireEvent.click(button)
    expect(screen.queryByText(/content/i)).toBeDefined()
  })
})
