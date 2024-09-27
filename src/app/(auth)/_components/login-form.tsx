'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextField, Button, Box, Typography } from '@mui/material'
import { Login } from '@/app/(auth)/server'
import { styles } from './_styles/styles'
import { z } from 'zod'
import { loginSchema } from './_utils/schema'

// Define TypeScript interface for form data
export type LoginFormInputs = z.infer<typeof loginSchema>

const LoginForm: React.FC = () => {
  // Initialize React Hook Form with Zod schema validation
  const {
    register, // Registers input elements to the form
    handleSubmit, // Handles form submission
    formState: { errors, isSubmitting }, // Contains form state, e.g., errors and loading state
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema), // Integrates Zod schema for validation
  })

  // Handle form submission
  const onSubmit = async (data: LoginFormInputs) => {
    // Perform the login process with the submitted data
    const res = await Login(data)
    if (res == false) {
      alert('Invalid credentials')
    }
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate // Disables native form validation
      sx={styles.formContainer}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>

      {/* Username input field */}
      <TextField
        type="text"
        label="Username"
        fullWidth
        margin="normal"
        {...register('username')} // Register this field to React Hook Form
        error={!!errors.username} // Display error state if validation fails
        helperText={errors.username?.message} // Display error message if validation fails
      />

      {/* Password input field */}
      <TextField
        type="password"
        label="Password"
        fullWidth
        margin="normal"
        {...register('password')} // Register this field to React Hook Form
        error={!!errors.password} // Display error state if validation fails
        helperText={errors.password?.message} // Display error message if validation fails
      />

      {/* Submit button */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={styles.submitButton} // Apply styles from external styles object
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Logging in...' : 'Login'}
      </Button>
    </Box>
  )
}

export default LoginForm
