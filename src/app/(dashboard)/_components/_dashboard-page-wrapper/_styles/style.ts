import { SxProps, Theme } from '@mui/material';

export const styles: Record<string, SxProps<Theme>> = {
  box: {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 2,
  },
  stack: {
    padding: 4,
    width: '100%',
    borderBottom: '1px solid #E2E2E2',
  },
  typography: {
    fontWeight: '500',
  },
};
