import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'
import DashboardPageWrapper from './_components/dashboard-page-wrapper'

const Loading = () => {
  return (
    <DashboardPageWrapper title="...">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
        width="100%"
        minHeight="60vh"
        bgcolor="background.default"
        zIndex={1300}
      >
        <CircularProgress size={70} />
        <Typography variant="h6" mt={3}>
          Loading...
        </Typography>
      </Box>
    </DashboardPageWrapper>
  )
}

export default Loading
