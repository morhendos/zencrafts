import Image from 'next/image'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#f9f4e1' }}>
      <main className="text-center px-4">
        {/* Logo */}
        <div className="w-40 h-40 relative mx-auto mb-8">
          <Image
            src="/zencrafts-transparent.png"
            alt="Zen Circle Logo"
            width={160}
            height={160}
            className="object-contain"
            priority
          />
        </div>

        {/* Title and Description */}
        <h1 className="font-marker text-5xl md:text-6xl text-gray-800 mb-4 tracking-wide">
          ZenCrafts
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16 tracking-wide">
          A curated collection of mindfully crafted software solutions. 
          Currently in meditation, emerging soon.
        </p>

        {/* Font Comparison */}
        <div className="max-w-2xl mx-auto mb-16 space-y-8 text-left">
          <h2 className="text-2xl text-gray-700 text-center mb-8">Font Options</h2>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Permanent Marker</p>
              <p className="font-marker text-4xl">ZenCrafts</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Covered By Your Grace</p>
              <p className="font-covered text-4xl">ZenCrafts</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Caveat</p>
              <p className="font-caveat text-4xl">ZenCrafts</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Dancing Script</p>
              <p className="font-dancing text-4xl">ZenCrafts</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Nothing You Could Do</p>
              <p className="font-nothing text-4xl">ZenCrafts</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Indie Flower</p>
              <p className="font-indie text-4xl">ZenCrafts</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Shadows Into Light</p>
              <p className="font-shadows text-4xl">ZenCrafts</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Satisfy</p>
              <p className="font-satisfy text-4xl">ZenCrafts</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Kalam</p>
              <p className="font-kalam text-4xl">ZenCrafts</p>
            </div>
          </div>
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