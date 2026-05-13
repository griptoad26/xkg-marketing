import Link from 'next/link'
import PricingCard from '../components/PricingCard'

const features = [
  {
    title: 'Infinite Memory',
    description: 'Store unlimited AI conversations with semantic search across your entire history.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
      </svg>
    ),
  },
  {
    title: 'Full Privacy',
    description: 'Your conversations never leave your control. Self-hosted option available.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Cross-Platform Access',
    description: 'Access your knowledge graph from any device via web or native apps.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Smart Organization',
    description: 'Automatic tagging, threading, and relationship mapping between conversations.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
  {
    title: 'AI-Powered Search',
    description: 'Find anything using natural language. Understands context, not just keywords.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: 'Export Anytime',
    description: 'Your data, your rules. Export everything in standard formats whenever you want.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
  },
]

const testimonials = [
  {
    quote: "XKG has completely changed how I work with AI. Everything is searchable and organized.",
    author: "Alex Chen",
    role: "Software Engineer"
  },
  {
    quote: "Finally, a solution that puts privacy first without sacrificing functionality.",
    author: "Sarah Miller",
    role: "Research Scientist"
  },
  {
    quote: "The knowledge graph feature is mind-blowing. It's like having a second brain.",
    author: "James Park",
    role: "Product Manager"
  },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-transparent to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Your Second Brain for{' '}
              <span className="gradient-text">AI Conversations</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 text-balance">
              Store, search, and rediscover every AI conversation. Full privacy.
              Infinite memory. One unified knowledge graph.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:opacity-90 transition-opacity"
              >
                Get Started
              </Link>
              <Link
                href="/docs"
                className="px-8 py-4 rounded-lg font-semibold bg-gray-800 text-white hover:bg-gray-700 transition-colors"
              >
                Read Docs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything you need</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built for power users who want complete control over their AI conversation history.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the option that fits your workflow.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Thick Client"
              price="$49"
              description="One-time purchase. Run locally on your machine."
              features={[
                'Flutter desktop app',
                'Local storage',
                'Full privacy',
                'Perpetual license',
              ]}
              cta="Buy Now"
              href="#"
            />
            <PricingCard
              title="VPS"
              price="$9"
              period="/mo"
              description="Hosted instance you control."
              features={[
                'Access from anywhere',
                'Your own server',
                'Full privacy',
                'Monthly subscription',
              ]}
              cta="Subscribe"
              href="#"
              highlighted
            />
            <PricingCard
              title="Hardware"
              price="$299"
              description="Pre-configured device delivered to your door."
              features={[
                'Plug and play',
                '$5/mo subscription',
                'Fanless, silent',
                'Includes VPS features',
              ]}
              cta="Pre-order"
              href="#"
            />
          </div>
          <div className="text-center mt-8">
            <Link href="/pricing" className="text-indigo-400 hover:text-indigo-300">
              View full pricing details →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Loved by power users</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-900 rounded-xl p-6 border border-gray-800">
                <p className="text-gray-300 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-white">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-900/50 to-violet-900/50 rounded-2xl p-8 sm:p-12 text-center border border-indigo-500/30">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to build your second brain?</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Join thousands of power users who never lose an AI conversation again.
            </p>
            <Link
              href="/pricing"
              className="inline-block px-8 py-4 rounded-lg font-semibold bg-white text-gray-900 hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}