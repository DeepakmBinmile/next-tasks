import { Box } from '@mui/material'
import ProjectsTable from './_components/data-table'
import DashboardPageWrapper from '../../_components/_dashboard-page-wrapper/dashboard-page-wrapper'
import { styles } from './styles'

export default function DeletedPage() {
  return (
    <DashboardPageWrapper title="Projects">
      <Box sx={styles.boxContainer}>
        <ProjectsTable />
      </Box>
    </DashboardPageWrapper>
  )
}
