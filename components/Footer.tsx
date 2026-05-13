import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold gradient-text mb-4">XKG</h3>
            <p className="text-gray-400 text-sm">
              Your second brain for AI conversations. Full privacy, infinite memory.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/#features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</Link></li>
              <li><Link href="/docs" className="text-gray-400 hover:text-white transition-colors text-sm">Documentation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="https://github.com" className="text-gray-400 hover:text-white transition-colors text-sm">GitHub</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} XKG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}