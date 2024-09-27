import { SxProps, Theme } from '@mui/material'
import shadows from '@mui/material/styles/shadows'

export const dashboardSidebarStyles = {
  drawer: {
    width: (drawerWidth: number) => drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: (drawerWidth: number) => drawerWidth,
      border: 'none',
      boxSizing: 'border-box',
    },
  },
  box: {
    overflowY: 'auto',
    paddingTop: (topPadding: number) => `${topPadding}px`,
    width: (drawerWidth: number) => drawerWidth,
  },
  accordionSummary: {
    width: '100%',
    height: 18,
    padding: '10px 16px',
    margin: 0,
    border: 'none !important',
    shadows: 'none',
    boxShadow: 'none',
  },
  accordionSummaryText: {
    paddingLeft: 4,
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    shadows: 'none',
    boxShadow: 'none',
  },
  list: {
    padding: 0,
    overflowX: 'hidden',
  },
  listItem: {
    padding: 3,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 4,
    backgroundColor: (pathname: string, href: string) => (pathname === href ? '#E2F3FD' : 'transparent'),
    borderRadius: 2,
    '&:hover': {
      backgroundColor: '#E2F3FD',
    },
  },
  link: {
    textDecoration: 'none',
    color: (pathname: string, href: string) => (pathname === href ? '#0020d8' : 'black'),
  },
  listItemText: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    fontSize: 12,
  },
  icon: {
    height: 20,
  },
}
