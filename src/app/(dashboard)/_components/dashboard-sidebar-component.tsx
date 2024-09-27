'use client'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Drawer,
  List,
  ListItem,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import GavelIcon from '@mui/icons-material/Gavel'
import { usePathname } from 'next/navigation'
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import Link from 'next/link'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import { dashboardSidebarStyles } from '../_styles/sidebar.modules'

import SnippetFolderOutlinedIcon from '@mui/icons-material/SnippetFolderOutlined'

export default function DashboardSidebarComponent({
  drawerWidth,
  topPadding,
}: {
  drawerWidth: number
  topPadding: number
}) {
  const pathname = usePathname()
  return (
    <Drawer
      variant="permanent"
      sx={{
        zIndex: 100,
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          border: 'none',
          boxSizing: 'border-box',
        },
      }}
    >
      <Box
        sx={{
          overflowY: 'auto',
          paddingTop: `${topPadding}px`,
          width: drawerWidth,
        }}
      >
        {[
          {
            title: 'Analytics',
            icon: <DashboardOutlinedIcon sx={dashboardSidebarStyles.icon} />,
            expanded: [],
          },
          {
            title: 'Project',
            icon: <BusinessOutlinedIcon sx={dashboardSidebarStyles.icon} />,
            expanded: [
              {
                title: 'Add Projects',
                href: '/dashboard/project-add',
                icon: <SnippetFolderOutlinedIcon sx={dashboardSidebarStyles.icon} />,
              },
              {
                title: 'Project Table',
                href: '/dashboard/projects',
                icon: <BusinessOutlinedIcon sx={dashboardSidebarStyles.icon} />,
              },
              {
                title: 'Deleted',
                href: '/dashboard/projects-delete',
                icon: <DeleteOutlinedIcon sx={dashboardSidebarStyles.icon} />,
              },
            ],
          },
          {
            title: 'Property',
            icon: <GavelIcon sx={dashboardSidebarStyles.icon} />,
            expanded: [],
          },
          {
            title: 'Problem reports',
            icon: <GavelIcon sx={dashboardSidebarStyles.icon} />,
            expanded: [],
          },
          {
            title: 'Settings',
            icon: <GavelIcon sx={dashboardSidebarStyles.icon} />,
            expanded: [],
          },
        ].map((acc) => (
          <Accordion
            key={acc?.title}
            sx={{
              shadows: 'none',
              boxShadow: 'none',
              border: 'none !important',
              minHeight: 68,
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={dashboardSidebarStyles.accordionSummary}
            >
              {acc?.icon}
              <Typography sx={dashboardSidebarStyles.accordionSummaryText}>{acc?.title}</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: 0,
                shadows: 'none',
                boxShadow: 'none',
                border: 'none !important',
              }}
            >
              <List sx={dashboardSidebarStyles.list}>
                {acc?.expanded?.map((link) => (
                  <ListItem
                    sx={{
                      padding: 3,
                      marginTop: 4,
                      marginBottom: 3,
                      width: '100%',
                      minWidth: 200,
                      backgroundColor: pathname === link?.href ? '#dae7f9' : 'transparent',
                      borderRadius: 2,
                      '&:hover': {
                        backgroundColor: '#E2F3FD',
                      },
                    }}
                    key={link?.title}
                  >
                    <Link
                      href={link?.href}
                      style={{
                        textDecoration: 'none',
                        color: pathname === link?.href ? '#6c96cf' : 'black',
                      }}
                    >
                      <Typography sx={dashboardSidebarStyles.listItemText}>
                        {link?.icon}
                        {link?.title}
                      </Typography>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Drawer>
  )
}
