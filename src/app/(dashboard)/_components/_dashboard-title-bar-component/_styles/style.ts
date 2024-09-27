import { SxProps, Theme } from '@mui/material';

export const styles: Record<string, SxProps<Theme>> = {
  box: {
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'center',
    backgroundColor: 'white',
    borderRadius: 2,
    paddingLeft: 4,
    marginBottom: 4,
  },
  typography: {
    fontWeight: '500',
  },
};
