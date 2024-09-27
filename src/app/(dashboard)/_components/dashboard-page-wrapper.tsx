import { Box, Stack, Typography } from '@mui/material'

const DashboardPageWrapper = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <Box
      sx={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 2,
      }}
    >
      <Stack
        sx={{
          padding: 4,
          width: '100%',
          borderBottom: '1px solid #E2E2E2',
        }}
      >
        <Typography sx={{ fontWeight: '500' }}>{title}</Typography>
      </Stack>
      {children}
    </Box>
  )
}
export default DashboardPageWrapper
