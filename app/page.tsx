import Image from 'next/image'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#f9f4e1' }}>
      <main className="w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 md:gap-24">
          {/* Logo Side */}
          <div className="w-40 h-40 md:w-64 md:h-64 relative flex-shrink-0">
            <Image
              src="/zencrafts-transparent.png"
              alt="Zen Circle Logo"
              width={256}
              height={256}
              className="object-contain"
              priority
            />
          </div>

          {/* Content Side */}
          <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left max-w-xl">
            <h1 className="font-nothing text-5xl md:text-7xl text-gray-800 mb-8 tracking-wide">
              ZenCrafts
            </h1>
            
            <div className="space-y-4 mb-16">
              <p className="text-xl md:text-2xl text-gray-800 tracking-wide">
                Where code meets consciousness.
              </p>
              <p className="text-xl md:text-2xl text-gray-600 tracking-wide">
                A studio of thoughtful software solutions.
              </p>
            </div>

            {/* Footer */}
            <footer className="text-gray-400 mt-auto pt-16">
              <p className="text-sm tracking-wider">
                Embracing emptiness, awaiting purpose.
              </p>
            </footer>
          </div>
        </div>
      </main>
    </div>
  )
}