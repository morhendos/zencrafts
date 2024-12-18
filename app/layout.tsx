import '@/styles/globals.css'
import { Noto_Serif_JP } from 'next/font/google'

const notoSerifJP = Noto_Serif_JP({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'ZenCrafts - Mindfully Crafted Software',
  description: 'A curated collection of mindfully crafted software solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSerifJP.className}>{children}</body>
    </html>
  )
}

