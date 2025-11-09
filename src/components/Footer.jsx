import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6 items-center">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-slate-900 text-white flex items-center justify-center">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold text-slate-900">InsuraCRM</p>
            <p className="text-sm text-slate-600">Close more policies with clarity.</p>
          </div>
        </div>
        <div className="md:text-right text-sm text-slate-600">
          © {new Date().getFullYear()} InsuraCRM Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
