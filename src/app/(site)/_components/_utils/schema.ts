import { z } from 'zod'

// Define validation schema using Zod
export const loginSchema = z.object({
  username: z.string({ message: 'Invalid username address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
})
