import PricingCard from '../../components/PricingCard'

const plans = [
  {
    name: 'Thick Client',
    price: '$49',
    period: 'one-time',
    description: 'Flutter desktop application. Runs entirely on your machine.',
    features: [
      'Flutter desktop app (Windows, macOS, Linux)',
      'Local SQLite/PostgreSQL storage',
      'Complete privacy — data never leaves your device',
      'Perpetual license with lifetime updates',
      'One-time purchase, no recurring fees',
      'Community support',
    ],
    cta: 'Buy Now',
    href: '#',
    highlighted: false,
  },
  {
    name: 'VPS',
    price: '$9',
    period: '/month',
    description: 'Self-hosted instance on your own server or our managed VPS.',
    features: [
      'Access from any browser or API',
      'Deploy on your own VPS or use our managed option',
      'Full privacy — you control the server',
      'Unlimited conversation storage',
      'Team sharing (up to 5 users)',
      'Email support',
      'Auto-updates',
    ],
    cta: 'Subscribe',
    href: '#',
    highlighted: true,
  },
  {
    name: 'Hardware',
    price: '$299',
    period: '+ $5/mo',
    description: 'Pre-configured mini PC delivered to your door. Zero setup.',
    features: [
      'Fanless, silent mini PC',
      'Pre-installed XKG server software',
      'Plug in, connect, start using',
      'Includes VPS features',
      'Includes 1 year of managed hosting ($60 value)',
      'Priority support',
      'Hardware warranty included',
    ],
    cta: 'Pre-order',
    href: '#',
    highlighted: false,
  },
]

export default function PricingPage() {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Simple, transparent pricing</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the option that fits your workflow. All plans include core features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              title={plan.name}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              cta={plan.cta}
              href={plan.href}
              highlighted={plan.highlighted}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-6 text-left">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="font-semibold mb-2">Can I switch plans later?</h3>
              <p className="text-gray-400 text-sm">Yes. VPS subscribers can purchase hardware at a discount, and thick client users can add VPS access.</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-400 text-sm">We accept all major credit cards via Stripe, as well as crypto payments for hardware orders.</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="font-semibold mb-2">Is there a free trial?</h3>
              <p className="text-gray-400 text-sm">The thick client has a 14-day trial with full features. VPS has a 7-day money-back guarantee.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}