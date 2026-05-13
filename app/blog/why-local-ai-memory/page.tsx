import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function WhyLocalAIMemory() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <article className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-12">
          <p className="text-indigo-400 text-sm font-medium mb-2">Blog</p>
          <h1 className="text-4xl font-bold mb-4">Why Local AI Memory Changes Everything</h1>
          <p className="text-gray-400">May 13, 2026 · 6 min read</p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Your AI conversations are more than just text. They're memories, decisions, 
            discoveries, and ideas — captured in digital form. Here's why keeping them 
            local matters more than ever.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-indigo-400">The Privacy Problem with Cloud AI</h2>
          <p className="text-gray-300 mb-6">
            Every time you use a cloud-based AI assistant, your conversations travel to 
            remote servers. They're stored, analyzed, and often used to improve the service. 
            You have little control over how long they're kept or who can access them.
          </p>
          <p className="text-gray-300 mb-6">
            Major AI companies have admitted to training their models on user conversations. 
            Even when data is anonymized, the aggregation of your questions, struggles, and 
            ideas paints an intimate portrait of your life and work.
          </p>
          <p className="text-gray-300 mb-6">
            With XKG, your conversations never leave your devices. The knowledge graph 
            is built and stored locally — you control the hardware, the encryption keys, 
            and the access.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-indigo-400">Your Conversations Are Valuable</h2>
          <p className="text-gray-300 mb-6">
            Think about what you've asked an AI in the past year. Coding problems solved. 
            Book recommendations. Life decisions debated. Complex topics explained. Medical 
            questions asked. Financial concerns discussed.
          </p>
          <p className="text-gray-300 mb-6">
            This isn't just chat history — it's a searchable record of your thinking. 
            Your questions reveal what you care about. The AI's answers show how you learn. 
            The follow-ups expose your mental models.
          </p>
          <p className="text-gray-300 mb-6">
            XKG transforms this raw data into a knowledge graph that surfaces connections 
            you'd never find by scrolling through old chats. It remembers what you'd forget.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-indigo-400">Data Ownership Isn't Optional</h2>
          <p className="text-gray-300 mb-6">
            When you use a cloud AI service, you don't own your conversation data. The 
            company's terms of service make that clear. They can delete your history, 
            change their policies, or shut down the service entirely.
          </p>
          <p className="text-gray-300 mb-6">
            Remember when Google+ shut down? All those posts, gone. When AI companies 
            pivot or get acquired, your conversation history often goes with them.
          </p>
          <p className="text-gray-300 mb-6">
            XKG gives you true data ownership. Your knowledge graph is stored in standard 
            formats on hardware you control. Export it anytime, migrate to another platform, 
            or just keep it as a personal archive. It's yours, period.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-indigo-400">Offline Capability: Freedom from the Internet</h2>
          <p className="text-gray-300 mb-6">
            Cloud AI requires constant internet connectivity. What happens when you're on 
            a flight, in a remote area, or just have a spotty connection? You're cut off 
            from your own conversation history.
          </p>
          <p className="text-gray-300 mb-6">
            XKG works completely offline. The Thick Client runs entirely on your machine. 
            The Hardware Bundle creates a personal server you can access from anywhere — 
            even without relying on third-party infrastructure.
          </p>
          <p className="text-gray-300 mb-6">
            This isn't just about convenience. It's about resilience. Your knowledge should 
            be available when you need it, not when an internet connection happens to work.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4 text-indigo-400">The Future Is Personal</h2>
          <p className="text-gray-300 mb-6">
            We're moving into an era where AI will be deeply integrated into daily life. 
            The AI that knows you best — your context, your history, your way of thinking — 
            should run on your terms.
          </p>
          <p className="text-gray-300 mb-6">
            Local AI memory isn't just a feature. It's a philosophy. It says that the most 
            intimate data about your life belongs in your hands, not on someone else's servers.
          </p>
          <p className="text-gray-300 mb-8">
            XKG is built for this future. Your memory. Your graph. Your AI. Local, private, 
            and always yours.
          </p>

          <div className="bg-gray-800 rounded-lg p-6 mt-12">
            <p className="text-gray-300 mb-4">
              Ready to take control of your AI memory?
            </p>
            <a href="/pricing" className="inline-block bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg font-medium">
              Get Started with XKG
            </a>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
