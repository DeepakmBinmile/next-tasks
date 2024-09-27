'use server'

import { redirect } from 'next/navigation'
import { LoginFormInputs } from '../app/(auth)/_components/login-form'
import { AUTH_ROUTE, PROJECT_ROUTE } from '@/_utils/routes-constant'
import { login, logout } from './auth'

export async function Login(formData: LoginFormInputs) {
  const data = await login(formData)
  if (data === false) {
    return false
  }
  redirect(PROJECT_ROUTE)
}

export async function Logout() {
  await logout()
  redirect(AUTH_ROUTE)
}