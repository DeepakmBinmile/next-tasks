import { type NextRequest, NextResponse } from 'next/server'
import { updateSession } from './server/auth/auth'
import { AUTH_ROUTE, DASHBOARD_ROUTE, SESSION_COOKIE_NAME } from './_utils/routes-constant'



const protectedRoutes = [DASHBOARD_ROUTE]

export async function middleware(request: NextRequest) {
  const session = request.cookies.get(SESSION_COOKIE_NAME)?.value || ''

  // Redirect to login if session is not set
  if (!session && protectedRoutes.includes(request.nextUrl.pathname)) {
    const absoluteURL = new URL(AUTH_ROUTE, request.nextUrl.origin)
    return NextResponse.redirect(absoluteURL.toString())
  }

  // Redirect to home if session is set and user tries to access root
  if (session && request.nextUrl.pathname === AUTH_ROUTE) {
    const absoluteURL = new URL(DASHBOARD_ROUTE, request.nextUrl.origin)
    return NextResponse.redirect(absoluteURL.toString())
  }
  return await updateSession(request)
}
