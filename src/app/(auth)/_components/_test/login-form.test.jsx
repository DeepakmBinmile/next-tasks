import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import LoginForm from '@/app/(auth)/_components/login-form'
import { Login } from '@/app/(auth)/server'

// Mock the Login function
jest.mock('@/app/(auth)/server', () => ({
  Login: jest.fn(),
}))

describe('LoginForm', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('submits the form with valid data', async () => {
    const mockLogin = jest.mocked(Login)

    render(<LoginForm />)

    // Input valid data
    fireEvent.input(screen.getByLabelText(/username/i), {
      target: { value: 'emilys' },
    })
    fireEvent.input(screen.getByLabelText(/password/i), {
      target: { value: 'emilyspass' },
    })

    // Click submit button
    fireEvent.click(screen.getByRole('button', { name: /login/i }))

    // Check if form is submitted with correct data
    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith({
        username: 'emilys',
        password: 'emilyspass',
      })
    })

    expect(mockLogin).toHaveBeenCalledTimes(1)
  })
})
