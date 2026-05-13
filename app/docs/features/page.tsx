import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Features() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">XKG Features</h1>
        <p className="text-xl text-gray-300 mb-12">
          Everything you need to transform your AI conversations into lasting knowledge.
        </p>

        <div className="space-y-12">
          <section>
            <div className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Knowledge Graph Visualization</h2>
              <p className="text-gray-300 mb-4">
                See your conversations come alive as an interactive graph. Nodes represent topics, 
                actions, and conversations — edges show how they connect. Zoom, pan, and click to 
                explore the relationships between everything you've discussed with AI.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Interactive 3D graph rendering</li>
                <li>Cluster view by topic category</li>
                <li>Timeline view for chronological exploration</li>
                <li>Custom color-coding by conversation type</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Topic & Action Tracking</h2>
              <p className="text-gray-300 mb-4">
                XKG automatically extracts topics from your conversations and tracks actionable items. 
                Never lose track of a task, project, or idea again.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Automatic topic extraction using AI</li>
                <li>Action item detection with due dates</li>
                <li>Follow-up reminders and notifications</li>
                <li>Topic relationship mapping</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Grok Conversation Import</h2>
              <p className="text-gray-300 mb-4">
                Seamlessly import your entire Grok conversation history. XKG processes each conversation, 
                extracting entities, topics, and relationships to build your personal knowledge graph.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>One-click Grok account connection</li>
                <li>Full conversation history import</li>
                <li>Markdown and JSON export support</li>
                <li>Selective conversation import</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Cross-Platform Sync</h2>
              <p className="text-gray-300 mb-4">
                Access your knowledge graph from anywhere. XKG syncs your data across all your devices 
                securely and instantly.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Desktop apps for Windows, Mac, and Linux</li>
                <li>Web access via VPS hosting</li>
                <li>End-to-end encrypted sync</li>
                <li>Offline-first with background sync</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Search & Filters</h2>
              <p className="text-gray-300 mb-4">
                Find anything in your knowledge graph instantly. Powerful search goes beyond keywords 
                to understand context and intent.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Full-text search across all conversations</li>
                <li>Semantic search powered by AI</li>
                <li>Filter by date, topic, or conversation</li>
                <li>Search within specific graph regions</li>
              </ul>
            </div>
          </section>

          <section>
            <div className="bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Privacy-First Design</h2>
              <p className="text-gray-300 mb-4">
                Your data belongs to you. XKG is built with privacy as a core principle, not an afterthought.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>All data stored locally by default</li>
                <li>Optional encrypted cloud sync</li>
                <li>No data sold or used for AI training</li>
                <li>Open-source core components</li>
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <a href="/pricing" className="inline-block bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg font-medium">
            Get Started with XKG
          </a>
        </div>
      </div>
      <Footer />
    </main>
  )
}
