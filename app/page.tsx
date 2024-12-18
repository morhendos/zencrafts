import Image from 'next/image'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#f9f4e1' }}>
      <main className="relative w-full max-w-4xl mx-auto px-4 py-8">
        {/* Center circle container */}
        <div className="relative">
          {/* Logo */}
          <div className="w-48 h-48 relative mx-auto mb-12">
            <Image
              src="/zencrafts-transparent.png"
              alt="Zen Circle Logo"
              width={192}
              height={192}
              className="object-contain"
              priority
            />
          </div>

          {/* Title with subtle rotation */}
          <div className="text-center mb-16 transform -rotate-2">
            <h1 className="font-nothing text-5xl md:text-7xl text-gray-800 tracking-wide inline-block">
              ZenCrafts
            </h1>
          </div>

          {/* Description in curved container */}
          <div className="relative max-w-2xl mx-auto">
            <div className="text-center space-y-4 mb-24" 
                 style={{
                   borderRadius: '50%',
                   padding: '2rem',
                   background: 'radial-gradient(circle at center, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%)'
                 }}>
              <p className="text-xl md:text-2xl text-gray-800 tracking-wide transform rotate-1">
                Where code meets consciousness.
              </p>
              <p className="text-xl md:text-2xl text-gray-600 tracking-wide transform -rotate-1">
                A studio of thoughtful software solutions.
              </p>
            </div>
          </div>

          {/* Footer with opposite rotation */}
          <footer className="text-center">
            <p className="text-sm text-gray-400 tracking-wider transform rotate-2 inline-block">
              Embracing emptiness, awaiting purpose.
            </p>
          </footer>
        </div>
      </main>
    </div>
  )
}