import Image from 'next/image'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#f9f4e1' }}>
      <main className="text-center px-4">
        {/* Logo */}
        <div className="w-40 h-40 relative mx-auto mb-8">
          <Image
            src="/zen-circle.png"
            alt="Zen Circle Logo"
            width={160}
            height={160}
            className="object-contain"
            priority
          />
        </div>

        {/* Title and Description */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 tracking-wide">
          ZenCrafts
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-16 leading-relaxed">
          A curated collection of mindfully crafted software solutions. 
          Currently in meditation, emerging soon.
        </p>

        {/* Footer */}
        <footer className="text-gray-500">
          <p className="text-sm">
            Embracing emptiness, awaiting purpose.
          </p>
        </footer>
      </main>
    </div>
  )
}

