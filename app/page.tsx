import Image from 'next/image'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#f9f4e1' }}>
      <main className="text-center px-4 w-full max-w-4xl mx-auto relative">
        {/* Logo - offset to left */}
        <div className="w-48 h-48 relative mb-12 -ml-8 md:-ml-16 mx-auto">
          <Image
            src="/zencrafts-transparent.png"
            alt="Zen Circle Logo"
            width={192}
            height={192}
            className="object-contain"
            priority
          />
        </div>

        {/* Title - offset to right */}
        <div className="md:ml-16 mb-8">
          <h1 className="font-nothing text-5xl md:text-7xl text-gray-800 tracking-wide">
            ZenCrafts
          </h1>
        </div>

        {/* Description with different opacities */}
        <div className="space-y-2 mb-16">
          <p className="text-xl md:text-2xl text-gray-800 tracking-wide">
            Where code meets consciousness.
          </p>
          <p className="text-xl md:text-2xl text-gray-600 tracking-wide">
            A studio of thoughtful software solutions.
          </p>
        </div>

        {/* Footer */}
        <footer className="text-gray-400 mt-32">
          <p className="text-sm tracking-wider">
            Embracing emptiness, awaiting purpose.
          </p>
        </footer>
      </main>
    </div>
  )
}