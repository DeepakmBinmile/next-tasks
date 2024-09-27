import { Box, Typography } from '@mui/material';
import DashboardBreadcrumbs from '../_dashboard-breadcrumbs-component/dashboard-breadcrumbs-component';
import { styles } from './_styles/style';

const DashboardTitleBarComponent = () => {
  return (
    <Box sx={styles.box}>
      <Typography sx={styles.typography}>Dashboard</Typography>
      <DashboardBreadcrumbs />
    </Box>
  );
};

export default DashboardTitleBarComponent;
