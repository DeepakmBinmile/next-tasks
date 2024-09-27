import { Box, CircularProgress, Typography } from '@mui/material'

export default function FullPageLoading() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      bgcolor="background.default"
      zIndex={1300}
    >
      <CircularProgress size={70} />
      <Typography variant="h6" mt={3}>
        Loading...
      </Typography>
    </Box>
  )
}
