import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function API() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">API Documentation</h1>
        <p className="text-xl text-gray-300 mb-12">
          Build integrations and extensions with the XKG API.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-400">REST API Endpoints</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
                <code className="text-green-400">/api/conversations</code>
              </div>
              <p className="text-gray-400 text-sm">Retrieve all conversations. Supports pagination with <code className="text-gray-300">page</code> and <code className="text-gray-300">limit</code> params.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
                <code className="text-green-400">/api/conversations/:id</code>
              </div>
              <p className="text-gray-400 text-sm">Retrieve a specific conversation by ID.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">POST</span>
                <code className="text-green-400">/api/conversations</code>
              </div>
              <p className="text-gray-400 text-sm">Create a new conversation entry.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
                <code className="text-green-400">/api/topics</code>
              </div>
              <p className="text-gray-400 text-sm">Retrieve all topics in the knowledge graph.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">GET</span>
                <code className="text-green-400">/api/graph</code>
              </div>
              <p className="text-gray-400 text-sm">Retrieve the full knowledge graph structure with nodes and edges.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">POST</span>
                <code className="text-green-400">/api/search</code>
              </div>
              <p className="text-gray-400 text-sm">Perform semantic search across all content.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Webhook Configuration</h2>
          <p className="text-gray-300 mb-4">
            Configure webhooks to receive real-time notifications when events occur in your XKG instance.
          </p>
          <div className="bg-gray-800 rounded-lg p-6 mb-4">
            <h3 className="text-lg font-medium mb-3">Supported Events</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li><code className="text-gray-300">conversation.created</code> — New conversation imported</li>
              <li><code className="text-gray-300">topic.created</code> — New topic extracted</li>
              <li><code className="text-gray-300">action.detected</code> — Action item found</li>
              <li><code className="text-gray-300">sync.completed</code> — Device sync finished</li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-medium mb-3">Webhook Payload Example</h3>
            <pre className="bg-gray-900 rounded p-4 text-sm text-gray-300 overflow-x-auto">
{`{
  "event": "topic.created",
  "timestamp": "2026-05-13T10:00:00Z",
  "data": {
    "topic_id": "topic_abc123",
    "name": "Machine Learning",
    "conversation_count": 12
  }
}`}
            </pre>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Rate Limits</h2>
          <div className="bg-gray-800 rounded-lg p-6">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 text-indigo-400">Plan</th>
                  <th className="py-3 text-indigo-400">Requests/minute</th>
                  <th className="py-3 text-indigo-400">Daily limit</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-700">
                  <td className="py-3">Free</td>
                  <td className="py-3">30</td>
                  <td className="py-3">1,000</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3">VPS ($9/mo)</td>
                  <td className="py-3">120</td>
                  <td className="py-3">10,000</td>
                </tr>
                <tr>
                  <td className="py-3">Hardware Bundle</td>
                  <td className="py-3">300</td>
                  <td className="py-3">50,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Example Requests</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-3">Search Conversations</h3>
              <pre className="bg-gray-900 rounded p-4 text-sm text-green-400 overflow-x-auto">
{`curl -X POST https://api.xkg.dev/v1/search \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"query": "machine learning projects", "limit": 10}'`}
              </pre>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-3">Get Knowledge Graph</h3>
              <pre className="bg-gray-900 rounded p-4 text-sm text-green-400 overflow-x-auto">
{`curl -X GET https://api.xkg.dev/v1/graph \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
              </pre>
            </div>
          </div>
        </section>

        <div className="text-center">
          <a href="/pricing" className="inline-block bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg font-medium">
            Get Your API Key
          </a>
        </div>
      </div>
      <Footer />
    </main>
  )
}
