import { Box, Button, CircularProgress, Typography } from '@mui/material'
import React from 'react'

import NextLink from 'next/link'
import DashboardLayoutWrapper from './_components/_dashboard-layout/dashboard-layout'
import DashboardPageWrapper from './_components/_dashboard-page-wrapper/dashboard-page-wrapper'

const NotFoundPage = () => {
  return (
    <DashboardLayoutWrapper>
      <DashboardPageWrapper title="...">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
          textAlign="center"
          p={2}
        >
          <Typography variant="h4" gutterBottom>
            Not Found
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Could not find the requested resource.
          </Typography>
          <Button variant="contained" color="primary" component={NextLink} href="/dashboard">
            Return Dashboard
          </Button>
        </Box>
      </DashboardPageWrapper>
    </DashboardLayoutWrapper>
  )
}

export default NotFoundPage
