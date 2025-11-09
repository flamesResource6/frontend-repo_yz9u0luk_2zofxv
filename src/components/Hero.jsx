import Spline from '@splinetool/react-spline';
import { Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Top navigation inside hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-white/10 backdrop-blur border border-white/10 flex items-center justify-center">
            <Shield className="h-5 w-5 text-teal-300" />
          </div>
          <span className="font-semibold tracking-tight">InsuraCRM</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a href="#demo" className="ml-2 inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-4 py-2 font-medium shadow/20 shadow-black hover:shadow-lg transition">
            <Zap className="h-4 w-4" />
            Get a demo
          </a>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center py-12 md:py-20">
        {/* Copy */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            Purpose-built for modern insurance teams
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            Close more policies with a CRM you actually enjoy using.
          </h1>
          <p className="mt-5 text-white/70 text-lg leading-relaxed">
            InsuraCRM unifies leads, quotes, renewals, and compliance into a single glass‑morphic workspace—fast, secure, and tailored for brokerages and carriers.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex justify-center items-center rounded-lg bg-teal-400 text-slate-900 px-5 py-3 font-medium shadow-[0_10px_40px_-12px_rgba(45,212,191,.7)] hover:brightness-105 transition">
              Start free
            </a>
            <a href="#features" className="inline-flex justify-center items-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition">
              Explore features
            </a>
          </div>
          {/* Trust bar */}
          <div className="mt-10 grid grid-cols-3 gap-6 text-left text-xs text-white/50">
            <div>
              <p className="text-2xl font-semibold text-white">2.5x</p>
              <p>Faster quote-to-bind</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">99.99%</p>
              <p>Uptime & security</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">GDPR</p>
              <p>and SOC2 ready</p>
            </div>
          </div>
        </div>

        {/* 3D Spline Scene */}
        <div className="relative h-[420px] md:h-[520px] lg:h-[640px] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <Spline
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Subtle gradient overlay that doesn't block interactions */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-teal-300/10 via-transparent to-indigo-400/10" />
        </div>
      </div>

      {/* Background accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
    </section>
  );
}
