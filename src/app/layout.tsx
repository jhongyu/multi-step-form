import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { css } from '@styles/css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={css({ backgroundColor: { base: '#EFF5FF', md: 'revert' } }, inter.style)}>
        <div className={css({
          height: '100%',
          md: {
            padding: '16px 100px 16px 16px',
          },
        })}
        >
          {children}
        </div>
      </body>
    </html>
  )
}
