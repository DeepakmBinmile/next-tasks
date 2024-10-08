'use server'

import { AUTH_ROUTE, PROJECT_ROUTE, SESSION_COOKIE_NAME } from '@/_utils/routes-constant'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function createSession(uid: string) {
  cookies().set(SESSION_COOKIE_NAME, uid, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // One day
    path: '/',
  })

  redirect(PROJECT_ROUTE)
}

export async function removeSession() {
  cookies().delete(SESSION_COOKIE_NAME)

  redirect(AUTH_ROUTE)
}
