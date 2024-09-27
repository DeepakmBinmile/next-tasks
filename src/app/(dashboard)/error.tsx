'use client'

import { Box, Button, Typography } from '@mui/material'
import React from 'react'

import { IError } from '@/resources/types/types'
import DashboardPageWrapper from './_components/_dashboard-page-wrapper/dashboard-page-wrapper'

const DashboardErrorPage = ({ error, reset }: IError) => {
  return (
    <DashboardPageWrapper title="...">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        height="100%"
        width="100%"
        textAlign="left"
        p={20}
      >
        <Typography variant="h4" gutterBottom>
          Something went wrong!
        </Typography>
        <Typography
          p={2}
          sx={{
            textAlign: 'left',
          }}
          gutterBottom
          width={'80%'}
        >
          <pre
            style={{
              textAlign: 'left',
              overflowWrap: 'break-word',
              wordWrap: 'break-word',
              width: '90%',
              whiteSpace: 'pre-wrap',
            }}
          >
            <code
              style={{
                textAlign: 'left',
                overflowWrap: 'break-word',
                wordWrap: 'break-word',
                maxWidth: '100%',
                whiteSpace: 'pre-wrap',
              }}
            >
              {error && error.message ? error.message : 'Unknown error'}
            </code>
          </pre>
        </Typography>
        <Button variant="contained" color="primary" onClick={() => reset()}>
          Try again
        </Button>
      </Box>
    </DashboardPageWrapper>
  )
}

export default DashboardErrorPage
