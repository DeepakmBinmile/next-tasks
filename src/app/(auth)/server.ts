'use server'

import { login, logout } from '@/server/auth/auth'
import { redirect } from 'next/navigation'
import { LoginFormInputs } from './_components/login-form'
import { AUTH_ROUTE, DASHBOARD_ROUTE } from '@/_utils/routes-constant'

export async function Login(formData: LoginFormInputs) {
  const data = await login(formData)
  if (data === false) {
    return false
  }
  redirect(DASHBOARD_ROUTE)
}

export async function Logout() {
  await logout()
  redirect(AUTH_ROUTE)
}
