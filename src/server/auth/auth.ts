import { LoginFormInputs } from '@/app/(site)/_components/login-form'
import axios from 'axios'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)
interface AuthToken {
  token: string
  refreshToken: string
}

interface User {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
}

interface UserAuth extends AuthToken, User {}
const maxAge = 604800

// Login function to authenticate user and store session cookie
export async function login(formData: LoginFormInputs) {
  const data = {
    username: formData?.username,
    password: formData?.password,
  }

  // Validate login data
  if (!data.username || !data.password) {
    // console.log('Invalid credentials')
    return null
  }
  try {
    const response = await axios.post<UserAuth>('https://dummyjson.com/auth/login', data)
    const session = response.data
    if (!session) {
      // console.log('Failed to decode session')
      return null
    }
    // Set session cookie with decoded session data
    cookies().set('session', JSON.stringify(session), {
      httpOnly: true,
      secure: true,
      maxAge,
    })
    // console.log('Login successful, session set:', session)
  } catch (error) {
    // console.error('Login failed', error)
    return null
  }
}

// Logout function to clear session cookie
export async function logout() {
  cookies().set('session', '', { expires: new Date(0) })
  // console.log('Logged out, session cleared')
}

// Get session function to retrieve and decode the session from cookies
export async function getSession() {
  const sessionCookie = cookies().get('session')?.value

  if (!sessionCookie) {
    return null
  }

  const session = JSON.parse(sessionCookie)
  return session
}

function checkTokenExpiration(token: string): boolean {
  const payload = JSON.parse(atob(token.split('.')[1]))
  const currentTime = Math.floor(Date.now() / 1000)
  return payload.exp < currentTime
}
// Update session function to refresh the session cookie before it expires
export async function updateSession(request: NextRequest) {
  const sessionCookie = request.cookies.get('session')?.value

  if (!sessionCookie) {
    // console.log('No session found for update')
    return NextResponse.next()
  }

  const session: UserAuth = JSON.parse(sessionCookie)
  if (!session || !session?.token) {
    // console.log('Invalid session')
    return NextResponse.next()
  }

  // Example logic for checking expiration (add your own implementation)
  const tokenIsExpired = checkTokenExpiration(session?.token)
  if (tokenIsExpired) {
    // console.log('Token expired, refreshing...')
    // Perform refresh token logic here if needed
  }

  // Refresh the session cookie with updated expiration
  const res = NextResponse.next()
  res.cookies.set('session', JSON.stringify(session), {
    httpOnly: true,
    secure: true,
    maxAge,
  })

  return res
}
