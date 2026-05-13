import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Troubleshooting() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Troubleshooting Guide</h1>
        <p className="text-xl text-gray-300 mb-12">
          Solutions to common issues you might encounter with XKG.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-400">Common Installation Issues</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-2">App won't install on Windows</h3>
              <p className="text-gray-400 mb-3">
                If you're seeing "Windows protected your PC" during installation:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Click "More info" when the warning appears</li>
                <li>Click "Run anyway"</li>
                <li>If issues persist, right-click the installer and select "Properties" → "Unblock"</li>
              </ol>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-2">macOS won't open the app</h3>
              <p className="text-gray-400 mb-3">
                "XKG.app is damaged and can't be opened" error:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Open System Settings → Privacy & Security</li>
                <li>Scroll down to find the XKG option</li>
                <li>Click "Open Anyway"</li>
              </ol>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-2">Linux: Missing dependencies</h3>
              <p className="text-gray-400 mb-3">
                If the app fails to launch with missing library errors:
              </p>
              <pre className="bg-gray-900 rounded p-4 text-sm text-green-400 mt-2">
{`# Ubuntu/Debian
sudo apt install libgtk-3-0 libbluetooth3 libnss3

# Fedora
sudo dnf install gtk3 bluetooth nss`}
              </pre>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-400">Sync Problems</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-2">Sync stuck at 0%</h3>
              <p className="text-gray-400 mb-3">Common causes and solutions:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Check your internet connection</li>
                <li>Verify your XKG subscription is active</li>
                <li>Try restarting the app</li>
                <li>Check if port 8443 is blocked by firewall</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-2">Data conflicts between devices</h3>
              <p className="text-gray-400 mb-3">When the same conversation was edited on multiple devices:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>XKG keeps the most recently modified version</li>
                <li>Older versions are archived in "Conflict Resolution" folder</li>
                <li>Manually merge if needed by opening archived versions</li>
              </ol>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-2">Sync disabled after long offline period</h3>
              <p className="text-gray-400 mb-3">For security, sync tokens expire after 90 days offline:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Open XKG on your primary device</li>
                <li>Go to Settings → Sync → Reconnect</li>
                <li>Enter your account credentials</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-400">Import Errors</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-2">Grok import fails</h3>
              <p className="text-gray-400 mb-3">If Grok conversation import fails:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Ensure you're logged into the same Grok account in XKG</li>
                <li>Check that your Grok subscription is active</li>
                <li>Try exporting conversations manually from Grok and importing as JSON</li>
                <li>Contact support if the issue persists</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-2">Large file import times out</h3>
              <p className="text-gray-400 mb-3">For conversation exports over 100MB:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Split the export into smaller batches</li>
                <li>Import one batch at a time</li>
                <li>Keep the app open until import completes</li>
              </ol>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-2">Unsupported export format</h3>
              <p className="text-gray-400 mb-3">XKG supports the following formats:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>JSON (Grok native export)</li>
                <li>Markdown with metadata</li>
                <li>Plain text transcripts</li>
                <li>CSV (for spreadsheet-based exports)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-400">Performance Tips</h2>
          <div className="bg-gray-800 rounded-lg p-6">
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li><strong>Graph rendering slow?</strong> Reduce visible nodes by using filters. View smaller graph regions instead of the full graph.</li>
              <li><strong>High memory usage?</strong> Limit concurrent device syncs. Having more than 5 devices syncing simultaneously can increase RAM usage.</li>
              <li><strong>Slow search results?</strong> Rebuild the search index monthly via Settings → Maintenance → Rebuild Index.</li>
              <li><strong>Large conversation library?</strong> Archive old conversations you don't need daily. Archived conversations are still searchable but use fewer resources.</li>
              <li><strong>Startup delay?</strong> Disable auto-startup if XKG takes too long to load. Launch it manually when needed.</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Still Having Issues?</h2>
          <div className="bg-gray-800 rounded-lg p-6">
            <p className="text-gray-300 mb-4">
              Our support team is here to help. Reach out and include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              <li>Your operating system and version</li>
              <li>XKG app version</li>
              <li>Steps to reproduce the issue</li>
              <li>Any error messages you've seen</li>
            </ul>
            <div className="mt-6">
              <a href="mailto:support@xkg.dev" className="text-indigo-400 hover:text-indigo-300 underline">
                support@xkg.dev
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
