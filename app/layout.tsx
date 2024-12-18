import '@/styles/globals.css'
import { Noto_Serif_JP, Covered_By_Your_Grace } from 'next/font/google'

const notoSerifJP = Noto_Serif_JP({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-serif'
})

const coveredByYourGrace = Covered_By_Your_Grace({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-covered'
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
      <body className={`${notoSerifJP.variable} ${coveredByYourGrace.variable} ${notoSerifJP.className}`}>{children}</body>
    </html>
  )
}
