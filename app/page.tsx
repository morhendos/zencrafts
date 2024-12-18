import Image from 'next/image'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: '#f9f4e1' }}>
      <main className="text-center px-4 py-16 flex flex-col items-center space-y-16">
        {/* Logo */}
        <div className="w-48 h-48 relative">
          <Image
            src="/zen-circle.svg"
            alt="Zen Circle Logo"
            width={192}
            height={192}
            className="object-contain"
            priority
          />
        </div>

        {/* Title and Description */}
        <div className="space-y-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 tracking-widest">
            ZenCrafts
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed tracking-wide">
            A curated collection of mindfully crafted software solutions. 
            Currently in meditation, emerging soon.
          </p>
        </div>

        {/* Footer */}
        <footer className="text-gray-400 mt-auto pt-16">
          <p className="text-base tracking-wider leading-relaxed">
            Embracing emptiness, awaiting purpose.
          </p>
        </footer>
      </main>
    </div>
  )
}