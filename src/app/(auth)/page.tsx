import { Box } from '@mui/material'
import LoginForm from './_components/login-form'
import { redirect } from 'next/navigation'
import { DASHBOARD_ROUTE } from '@/_utils/routes-constant'
import { styles } from './styles'
import { getSession } from '@/server/auth'

const HomePage = async () => {
  const session = await getSession()
  if (session) {
    return redirect(DASHBOARD_ROUTE)
  }
  return (
    <Box
      sx={styles.container}
    >
      <LoginForm />
    </Box>
  )
}

export default HomePage
