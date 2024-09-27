'use client'
import * as React from 'react'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import NextLink from 'next/link'
import HomeIcon from '@mui/icons-material/Home'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Box } from '@mui/material'
function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

const DashboardBreadcrumbs = () => {
  return (
    <Box sx={{ paddingRight: 6 }} role="presentation" onClick={handleClick}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link
          component={NextLink}
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
          aria-label="Home"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        <Link
          component={NextLink}
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/forms"
          aria-label="Forms page"
        >
          Forms
        </Link>
        <Typography sx={{ color: 'text.primary', display: 'flex', alignItems: 'center' }} aria-current="page">
          Forms Wizard
        </Typography>
      </Breadcrumbs>
    </Box>
  )
}
export default DashboardBreadcrumbs
