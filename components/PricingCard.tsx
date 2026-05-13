interface PricingCardProps {
  title: string
  price: string
  period?: string
  description: string
  features: string[]
  cta: string
  href: string
  highlighted?: boolean
}

export default function PricingCard({ title, price, period, description, features, cta, href, highlighted }: PricingCardProps) {
  return (
    <div className={`rounded-2xl p-6 ${highlighted ? 'bg-gradient-to-b from-indigo-900/40 to-gray-900 border border-indigo-500/50' : 'bg-gray-900 border border-gray-800'}`}>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-white">{price}</span>
        {period && <span className="text-gray-400 ml-1">{period}</span>}
      </div>
      <p className="text-gray-400 text-sm mb-6">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-300">
            <svg className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={href}
        className={`block w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors ${
          highlighted
            ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white hover:opacity-90'
            : 'bg-gray-800 text-white hover:bg-gray-700'
        }`}
      >
        {cta}
      </a>
    </div>
  )
}