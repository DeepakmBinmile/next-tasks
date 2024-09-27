import React from 'react'
import { Box } from '@mui/material'
import { IChildren } from '@/resources/types/types'
import MainContentWrapper from './dashboard-main-component'
import DashboardSidebarComponent from './dashboard-sidebar-component'
import DashboardHeaderComponent from './dashboard-header-component'
import DashboardTitleBarComponent from './dashboard-title-bar-component'

const drawerWidth = 280
const topPadding = 64
const DashboardLayoutWrapper = ({ children }: IChildren) => {
  return (
    <Box>
      <DashboardHeaderComponent topPadding={topPadding} />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <DashboardSidebarComponent topPadding={topPadding} drawerWidth={drawerWidth} />
        <MainContentWrapper topPadding={topPadding} drawerWidth={drawerWidth}>
          <DashboardTitleBarComponent />
          {children}
        </MainContentWrapper>
      </Box>
    </Box>
  )
}

export default DashboardLayoutWrapper
