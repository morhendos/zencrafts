import '@/styles/globals.css'
import { 
  Noto_Serif_JP, 
  Permanent_Marker,
  Covered_By_Your_Grace,
  Caveat,
  Dancing_Script,
  Nothing_You_Could_Do,
  Indie_Flower,
  Shadows_Into_Light,
  Satisfy,
  Kalam 
} from 'next/font/google'

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

const coveredByYourGrace = Covered_By_Your_Grace({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-covered'
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat'
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing'
})

const nothingYouCouldDo = Nothing_You_Could_Do({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-nothing'
})

const indieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-indie'
})

const shadowsIntoLight = Shadows_Into_Light({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-shadows'
})

const satisfy = Satisfy({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-satisfy'
})

const kalam = Kalam({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-kalam'
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
      <body className={`
        ${notoSerifJP.variable} 
        ${permanentMarker.variable} 
        ${coveredByYourGrace.variable}
        ${caveat.variable}
        ${dancingScript.variable}
        ${nothingYouCouldDo.variable}
        ${indieFlower.variable}
        ${shadowsIntoLight.variable}
        ${satisfy.variable}
        ${kalam.variable}
        ${notoSerifJP.className}
      `}>{children}</body>
    </html>
  )
}
