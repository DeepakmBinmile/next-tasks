import React from 'react'
import { Box } from '@mui/material'
import { IChildren } from '@/resources/types/types'
import DashboardHeaderComponent from '../_dashboard-header-component/dashboard-header-component'
import DashboardSidebarComponent from '../_dashboard-sidebar-component/dashboard-sidebar-component'
import MainContentWrapper from '../_dashboard-main-component.tsx/dashboard-main-component'
import DashboardTitleBarComponent from '../_dashboard-title-bar-component/dashboard-title-bar-component'
import { styles } from './_styles/style'

const drawerWidth = 280
const topPadding = 64
const DashboardLayoutWrapper = ({ children }: IChildren) => {
  return (
    <Box>
      <DashboardHeaderComponent topPadding={topPadding} />
      <Box sx={styles.box}>
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
