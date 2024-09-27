import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/resources/styles/globals.css'
import { IChildren } from '@/resources/types/types'
import ThemeProvider from '@/components/provider/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Aqary',
    default: 'Aqary',
  },
  description: 'Aqary is a platform for creating and sharing AI-generated content.',
}

export default function RootLayout({ children }: IChildren) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
