'use client'

import { Poppins as FontFamily } from 'next/font/google'
import { createTheme, ThemeOptions } from '@mui/material/styles'

const fontFamily = FontFamily({
  weight: ['300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: fontFamily.style.fontFamily,
  },
  spacing: 4,
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          boxShadow: 'none',
        },
      },
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#6A96CE',
    },
    secondary: {
      main: '#EDF2F6',
    },
    background: {
      default: '#ffffff',
    },
  },
  shape: {
    borderRadius: 4,
  },
}
const theme = createTheme(themeOptions)

export default theme
