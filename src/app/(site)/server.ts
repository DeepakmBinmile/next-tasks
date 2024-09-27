'use server'

import { login, logout } from '@/server/auth/auth'
import { redirect } from 'next/navigation'
import { LoginFormInputs } from './_components/login-form'

export async function Login(formData: LoginFormInputs) {
  await login(formData)
  redirect('/dashboard')
}

export async function Logout() {
  await logout()
  redirect('/')
}
