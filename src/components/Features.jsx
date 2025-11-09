import { CheckCircle2, ShieldCheck, Workflow, Gauge } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Compliance-first',
    desc: 'Automated audit trails, permissions, and PII encryption built for insurers.'
  },
  {
    icon: Workflow,
    title: 'Smart workflows',
    desc: 'Drag-and-drop pipelines for quotes, endorsements, and renewals with SLAs.'
  },
  {
    icon: Gauge,
    title: 'Underwriting speed',
    desc: 'Scorecards and data enrichment to accelerate quote-to-bind decisions.'
  },
  {
    icon: CheckCircle2,
    title: 'Delightful UX',
    desc: 'Glass-morphic design that keeps your team focused and fast.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-xs font-medium tracking-wider text-teal-600 uppercase">Capability</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Built for modern insurance operations</h2>
          <p className="mt-3 text-slate-600">Everything you need to manage leads, quotes, and policies—without the clutter.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
