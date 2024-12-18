import Image from 'next/image'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#f9f4e1' }}>
      <main className="w-full max-w-5xl mx-auto px-4">
        <div className="space-y-16">
          {/* Logo - Centered */}
          <div className="w-40 h-40 relative mx-auto">
            <Image
              src="/zencrafts-transparent.png"
              alt="Zen Circle Logo"
              width={160}
              height={160}
              className="object-contain"
              priority
            />
          </div>

          {/* Title - Right aligned */}
          <div className="text-right md:pr-24">
            <h1 className="font-nothing text-5xl md:text-7xl text-gray-800 tracking-wide inline-block">
              ZenCrafts
            </h1>
          </div>

          {/* Description - Left aligned */}
          <div className="text-left max-w-xl md:pl-24">
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-gray-800 tracking-wide">
                Where code meets consciousness.
              </p>
              <p className="text-xl md:text-2xl text-gray-600 tracking-wide">
                A studio of thoughtful software solutions.
              </p>
            </div>
          </div>

          {/* Footer - Right aligned */}
          <footer className="text-right md:pr-24">
            <p className="text-sm text-gray-400 tracking-wider inline-block">
              Embracing emptiness, awaiting purpose.
            </p>
          </footer>
        </div>
      </main>
    </div>
  )
}