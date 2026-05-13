import Link from 'next/link'

const docs = [
  {
    title: 'Getting Started',
    items: [
      { name: 'Introduction', href: '#' },
      { name: 'Quick Start Guide', href: '#' },
      { name: 'Installation', href: '#' },
    ],
  },
  {
    title: 'Configuration',
    items: [
      { name: 'Configuration File', href: '#' },
      { name: 'Environment Variables', href: '#' },
      { name: 'Database Setup', href: '#' },
    ],
  },
  {
    title: 'Features',
    items: [
      { name: 'Conversation Management', href: '#' },
      { name: 'Search & Discovery', href: '#' },
      { name: 'Export & Backup', href: '#' },
    ],
  },
  {
    title: 'API Reference',
    items: [
      { name: 'REST API', href: '#' },
      { name: 'Webhooks', href: '#' },
      { name: 'Rate Limits', href: '#' },
    ],
  },
  {
    title: 'Deployment',
    items: [
      { name: 'Self-Hosted Setup', href: '#' },
      { name: 'Docker', href: '#' },
      { name: 'Troubleshooting', href: '#' },
    ],
  },
]

export default function DocsPage() {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-xl text-gray-400">
            Everything you need to get started with XKG.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <nav className="lg:col-span-1">
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 sticky top-24">
              {docs.map((section) => (
                <div key={section.title} className="mb-6 last:mb-0">
                  <h3 className="font-semibold text-white mb-3">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-gray-400 hover:text-white text-sm transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="prose prose-invert max-w-none">
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Introduction to XKG</h2>
                <p className="text-gray-400 mb-4">
                  XKG (eXtreme Knowledge Graph) is your personal AI memory system. It stores,
                  organizes, and retrieves your AI conversations so you never lose important
                  insights again.
                </p>
                <p className="text-gray-400 mb-4">
                  Whether you&apos;re a developer integrating the API, a power user running the
                  thick client, or an organization deploying on your own infrastructure, XKG
                  gives you complete control over your AI conversation history.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">Key Concepts</h3>
                <ul className="text-gray-400 space-y-2">
                  <li><strong className="text-white">Conversations</strong> — The core unit. Every AI exchange you save.</li>
                  <li><strong className="text-white">Graph</strong> — How conversations connect. Topics, people, projects.</li>
                  <li><strong className="text-white">Search</strong> — Semantic search across your entire history.</li>
                  <li><strong className="text-white">Privacy</strong> — Your data stays yours. Always.</li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-xl border border-gray-800 p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
                <p className="text-gray-400 mb-4">
                  Get up and running in under 5 minutes.
                </p>
                <pre className="bg-gray-950 rounded-lg p-4 text-sm overflow-x-auto">
                  <code className="text-gray-300">
{`# Install the desktop app
npm install -g xkg-cli
xkg init

# Or use Docker
docker run -v xkg-data:/data xkg/server:latest`}
                  </code>
                </pre>
              </div>

              <div className="bg-gray-900 rounded-xl border border-gray-800 p-8">
                <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
                <p className="text-gray-400 mb-4">
                  Check out our community forum or open an issue on GitHub.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700 transition-colors">
                    Community Forum
                  </a>
                  <a href="#" className="px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700 transition-colors">
                    GitHub Issues
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}