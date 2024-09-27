import Link from 'next/link'
import { Box, Typography, Button } from '@mui/material'

export default function NotFound() {
  return (
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
      <Button variant="contained" color="primary" component={Link} href="/">
        Return Home
      </Button>
    </Box>
  )
}
