import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function FAQ() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-300 mb-12">
          Everything you need to know about XKG.
        </p>

        <div className="space-y-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-indigo-400">Is my data private?</h3>
            <p className="text-gray-300">
              Absolutely. Privacy is XKG's core design principle. With the Thick Client, all your 
              data stays on your device — nothing goes to the cloud unless you explicitly enable sync. 
              Even with cloud sync enabled, all data is end-to-end encrypted. We never sell your data, 
              and it's never used to train AI models. Your AI conversations are yours alone.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-indigo-400">Can I use XKG on multiple devices?</h3>
            <p className="text-gray-300">
              Yes! The VPS ($9/mo) and Hardware Bundle ($299 + $5/mo) plans both support multi-device 
              sync. Your knowledge graph syncs across all your devices in real-time. The Thick Client 
              ($49 one-time) works great on a single device — you can manually export and import your 
              data to transfer between devices.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-indigo-400">What happens if I cancel my subscription?</h3>
            <p className="text-gray-300">
              If you cancel your VPS or Hardware Bundle subscription, your sync service will stop, 
              but you won't lose any data. Your local XKG app continues to work normally — it's just 
              that sync between devices will be disabled. You can export all your data at any time 
              before canceling. If you decide to resubscribe, your data is still available to import.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-indigo-400">How does the Hardware Bundle work?</h3>
            <p className="text-gray-300">
              The Hardware Bundle is a pre-configured device (Raspberry Pi or similar) that runs your 
              personal XKG server at home. For $299 + $5/month, you get:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
              <li>A plug-and-play device with XKG pre-installed</li>
              <li>Your own private cloud server — no third-party hosting</li>
              <li>Access from anywhere via secure remote connection</li>
              <li>Automatic local backups to attached storage</li>
              <li>The $5/month covers hosting, updates, and support</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-indigo-400">Can I export my data?</h3>
            <p className="text-gray-300">
              Yes, and you own all of it. XKG lets you export:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
              <li>Full knowledge graph as JSON</li>
              <li>Individual conversations as Markdown</li>
              <li>Topic lists as CSV or JSON</li>
              <li>All data as a single portable archive</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Export anytime from Settings → Data → Export. Your exports are never restricted by 
              subscription status.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-indigo-400">What AI conversations does XKG support?</h3>
            <p className="text-gray-300">
              XKG currently supports importing from Grok (with more platforms coming). The knowledge 
              graph structure is platform-agnostic — any conversation can be imported as JSON or 
              Markdown. We're actively working on native integrations for more AI platforms.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-indigo-400">Does XKG work offline?</h3>
            <p className="text-gray-300">
              Yes! The Thick Client and Hardware Bundle are fully offline-capable. Everything runs 
              locally on your device or home server. Cloud sync (VPS plan) requires an internet 
              connection, but all core features work without it. Your knowledge graph is accessible 
              even on a plane, in a cabin, or anywhere else offline.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-indigo-400">How does XKG extract topics?</h3>
            <p className="text-gray-300">
              XKG uses local AI models to analyze your conversations and automatically extract topics, 
              entities, and actions. This processing happens entirely on your device — no data is sent 
              to external servers for analysis. The extraction improves over time as the system learns 
              your conversation patterns.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a href="mailto:support@xkg.dev" className="inline-block bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg font-medium">
            Contact Support
          </a>
        </div>
      </div>
      <Footer />
    </main>
  )
}
