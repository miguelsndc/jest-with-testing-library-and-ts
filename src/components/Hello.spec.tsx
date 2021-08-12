import { render, screen } from '@testing-library/react'
import Hello from './Hello'

it('renders hello word', () => {
  render(<Hello />)
  expect(screen.getByText('Hello, World!')).toBeInTheDocument()
})
