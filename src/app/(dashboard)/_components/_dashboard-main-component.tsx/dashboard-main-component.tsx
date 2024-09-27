'use client'

import { Box, styled } from '@mui/material'
import { styles } from './_styles/style'

type MainContentWrapperProps = {
  children: React.ReactNode
  drawerWidth: number
  topPadding: number
}

const MainContentWrapper = ({ children, drawerWidth, topPadding }: MainContentWrapperProps) => {
  const MainContent = styled('main')(({ theme }) => ({
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    padding: theme.spacing(3),
    marginLeft: drawerWidth,
    paddingTop: `${topPadding}px`,
    width: `calc(100% - ${drawerWidth}px)`,
  }))
  return (
    <MainContent>
      <Box
        sx={styles.box}
      >
        {children}
      </Box>
    </MainContent>
  )
}

export default MainContentWrapper
