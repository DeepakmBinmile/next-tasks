import theme from '@/resources/theme/theme';
import { SxProps, Theme } from '@mui/material';

export const styles: Record<string, SxProps<Theme>> = {
  box: {
    padding: '20px',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.secondary.main,
    height: '100%',
  },

};
