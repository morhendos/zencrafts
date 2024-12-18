import Image from 'next/image'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#f9f4e1' }}>
      <main className="text-center px-4 w-full max-w-3xl mx-auto">
        {/* Logo */}
        <div className="w-48 h-48 md:w-56 md:h-56 relative mx-auto mb-16">
          <Image
            src="/zencrafts-transparent.png"
            alt="Zen Circle Logo"
            width={224}
            height={224}
            className="object-contain"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="font-nothing text-5xl md:text-7xl text-gray-800 mb-8 tracking-wide">
          ZenCrafts
        </h1>

        {/* Decorative Line */}
        <div className="w-24 h-px bg-gray-400 mx-auto mb-8 opacity-50"></div>

        {/* Description */}
        <div className="space-y-4 mb-24">
          <p className="text-xl md:text-2xl text-gray-800 tracking-wide">
            Where code meets consciousness.
          </p>
          <p className="text-xl md:text-2xl text-gray-600 tracking-wide">
            A studio of thoughtful software solutions.
          </p>
        </div>

        {/* Footer */}
        <footer className="text-gray-400">
          <div className="w-12 h-px bg-gray-400 mx-auto mb-8 opacity-30"></div>
          <p className="text-sm tracking-wider">
            Embracing emptiness, awaiting purpose.
          </p>
        </footer>
      </main>
    </div>
  )
}