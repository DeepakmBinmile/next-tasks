import { Box } from '@mui/material'
import { getSession } from '@/server/auth/auth'
import LoginForm from './_components/login-form'
import { redirect } from 'next/navigation'

const HomePage = async () => {
  const session = await getSession()
  if (session) {
    return redirect('/dashboard')
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <LoginForm />
    </Box>
  )
}

export default HomePage
