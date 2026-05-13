import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function GettingStarted() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Getting Started with XKG</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Quick Start</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="font-mono text-sm text-green-400 mb-2">Step 1: Download XKG</h3>
              <p className="text-gray-300">Download the XKG app for your platform (Windows, Mac, Linux).</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="font-mono text-sm text-green-400 mb-2">Step 2: Import Your Data</h3>
              <p className="text-gray-300">Connect your Grok account or import existing conversations from export files.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="font-mono text-sm text-green-400 mb-2">Step 3: Explore Your Graph</h3>
              <p className="text-gray-300">Navigate through topics, actions, and conversations in your knowledge graph.</p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-400">System Requirements</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>64-bit operating system (Windows 10+, macOS 11+, Ubuntu 20.04+)</li>
            <li>4 GB RAM minimum (8 GB recommended)</li>
            <li>2 GB free disk space</li>
            <li>Internet connection for cloud sync (optional)</li>
          </ul>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Video Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-indigo-400 font-medium">Installing XKG</p>
              <p className="text-gray-400 text-sm">2 min</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-indigo-400 font-medium">Importing from Grok</p>
              <p className="text-gray-400 text-sm">3 min</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-indigo-400 font-medium">Navigating the Graph</p>
              <p className="text-gray-400 text-sm">5 min</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-indigo-400 font-medium">Cloud Sync Setup</p>
              <p className="text-gray-400 text-sm">4 min</p>
            </div>
          </div>
        </section>
        
        <div className="text-center">
          <a href="/pricing" className="inline-block bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg font-medium">
            Get Started — Buy XKG
          </a>
        </div>
      </div>
      <Footer />
    </main>
  )
}
