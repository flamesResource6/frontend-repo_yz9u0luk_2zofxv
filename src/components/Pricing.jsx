import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    cadence: 'forever',
    highlight: 'For small teams evaluating',
    features: [
      'Up to 3 pipelines',
      '1,000 contacts',
      'Email support',
    ],
    cta: 'Start free',
    popular: false,
  },
  {
    name: 'Growth',
    price: '$49',
    cadence: 'per user / month',
    highlight: 'Most popular for agencies',
    features: [
      'Unlimited pipelines',
      'Advanced automations',
      'Roles & permissions',
      'Priority support',
    ],
    cta: 'Choose Growth',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    cadence: '',
    highlight: 'Security & scale for carriers',
    features: [
      'SSO/SAML, SCIM',
      'On-prem options',
      'Dedicated CSM',
      'Custom SLAs',
    ],
    cta: 'Contact sales',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-medium tracking-wider text-teal-600 uppercase">Pricing</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Simple pricing that scales with you</h2>
          <p className="mt-3 text-slate-600">Start free, upgrade when your team grows. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border ${tier.popular ? 'border-teal-500' : 'border-slate-200'} bg-white p-6 shadow-sm`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal-500 px-3 py-1 text-xs font-medium text-white">Most popular</span>
              )}
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{tier.highlight}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold text-slate-900">{tier.price}</span>
                  <span className="text-sm text-slate-600">{tier.cadence}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 text-teal-500" /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#demo" className={`mt-8 inline-flex w-full justify-center rounded-lg px-4 py-2.5 font-medium transition ${tier.popular ? 'bg-teal-500 text-white hover:brightness-105' : 'border border-slate-200 hover:bg-slate-50'}`}>
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
