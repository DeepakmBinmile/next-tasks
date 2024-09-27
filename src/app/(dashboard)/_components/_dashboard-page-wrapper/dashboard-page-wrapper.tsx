import { Box, Stack, Typography } from '@mui/material';
import { styles } from './_styles/style';

const DashboardPageWrapper = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <Box sx={styles.box}>
      <Stack sx={styles.stack}>
        <Typography sx={styles.typography}>{title}</Typography>
      </Stack>
      {children}
    </Box>
  );
};

export default DashboardPageWrapper;
