import { Box } from '@mui/material'
import DashboardPageWrapper from '../../_components/dashboard-page-wrapper'
import ProjectsTable from './_components/data-table'

export default function DeletedPage() {
  return (
    <DashboardPageWrapper title="Projects">
      <Box sx={{ width: '100%', height: '100%', minHeight: '60vh' }}>
        <ProjectsTable />
      </Box>
    </DashboardPageWrapper>
  )
}
