import { Box } from '@mui/material'
import DashboardPageWrapper from '../_components/_dashboard-page-wrapper/dashboard-page-wrapper'
import { redirect } from 'next/navigation'
import { PROJECT_ROUTE } from '@/_utils/routes-constant'
import { getSession } from '@/server/auth'

export default async function DashboardPage() {
  const session = await getSession()
  if (session) {
    return redirect(PROJECT_ROUTE)
  }
  return (
    <DashboardPageWrapper title="Dashboard">
      <Box />
    </DashboardPageWrapper>
  )
}
