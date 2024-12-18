import '@/styles/globals.css'
import { Noto_Serif_JP, Permanent_Marker } from 'next/font/google'

const notoSerifJP = Noto_Serif_JP({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-serif'
})

const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-marker'
})

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
      <body className={`${notoSerifJP.variable} ${permanentMarker.variable} ${notoSerifJP.className}`}>{children}</body>
    </html>
  )
}
