'use client'

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { CssBaseline } from '@mui/material'
import theme from '@/resources/theme/theme'

const ThemeProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <MuiThemeProvider theme={theme}>
        {children}
        <CssBaseline />
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  )
}

export default ThemeProvider
