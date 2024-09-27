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
import SnippetFolderOutlinedIcon from '@mui/icons-material/SnippetFolderOutlined'
import { styles } from './_styles/style'

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
        zIndex: '0 !important',
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          border: 'none',
          boxSizing: 'border-box',
        },
      }}
    >
      <Box
        sx={{
          ...styles.box,
          paddingTop: `${topPadding}px`,
          width: drawerWidth,
        }}
      >
        {[
          {
            title: 'Analytics',
            icon: <DashboardOutlinedIcon sx={styles.icon} />,
            expanded: [],
          },
          {
            title: 'Project',
            icon: <BusinessOutlinedIcon sx={styles.icon} />,
            expanded: [
              {
                title: 'Add Projects',
                href: '/dashboard/project-add',
                icon: <SnippetFolderOutlinedIcon sx={styles.icon} />,
              },
              {
                title: 'Project Table',
                href: '/dashboard/projects',
                icon: <BusinessOutlinedIcon sx={styles.icon} />,
              },
              {
                title: 'Deleted',
                href: '/dashboard/projects-delete',
                icon: <DeleteOutlinedIcon sx={styles.icon} />,
              },
            ],
          },
          {
            title: 'Property',
            icon: <GavelIcon sx={styles.icon} />,
            expanded: [],
          },
          {
            title: 'Problem reports',
            icon: <GavelIcon sx={styles.icon} />,
            expanded: [],
          },
          {
            title: 'Settings',
            icon: <GavelIcon sx={styles.icon} />,
            expanded: [],
          },
        ].map((acc) => (
          <Accordion key={acc?.title} sx={styles.accordian}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              sx={styles.accordionSummary}
            >
              {acc?.icon}
              <Typography sx={styles.accordionSummaryText}>{acc?.title}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={styles.accordianDetails}>
              <List sx={styles.list}>
                {acc?.expanded?.map((link) => (
                  <ListItem
                    sx={{
                      ...styles.listItem,
                      backgroundColor: pathname === link?.href ? '#dae7f9' : 'transparent',
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
                      <Typography sx={styles.listItemText}>
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
