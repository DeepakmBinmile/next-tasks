import { Box, Typography } from '@mui/material'
import DashboardBreadcrumbs from './dashboard-breadcrumbs-component'

const DashboardTitleBarComponent = () => {
  return (
    <Box
      sx={{
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignContent: 'center',
        backgroundColor: 'white',
        borderRadius: 2,
        paddingLeft: 4,
        marginBottom: 4,
      }}
    >
      <Typography sx={{ fontWeight: '500' }}>Dashboard</Typography>
      <DashboardBreadcrumbs />
    </Box>
  )
}
export default DashboardTitleBarComponent
