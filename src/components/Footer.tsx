import React, { useState } from 'react';
import { Dna, ArrowRight, Mail, CheckCircle2, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#102F21] text-white pt-20 pb-12 border-t border-emerald-950/60 relative overflow-hidden">
      {/* Pre-Footer CTA Card Matching Mockup: "Start Your Journey Toward a Brighter Future." */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative rounded-3xl p-10 sm:p-14 bg-white text-slate-900 shadow-2xl overflow-hidden border border-slate-100 text-center">
          {/* Subtle spotlights on left and right matching mockup */}
          <div className="absolute -left-16 -top-16 w-64 h-64 bg-gradient-to-br from-emerald-200/50 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-gradient-to-tl from-emerald-200/50 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1B4332]/10 text-[#1B4332] mb-4">
              Begin Your Doctoral or Research Career
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 leading-tight mb-4">
              Start Your Journey Toward a Brighter Future.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              Join a diverse, forward-thinking scientific community committed to precision medicine, health equity, and groundbreaking laboratory discovery.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 rounded-full bg-[#1B4332] hover:bg-[#12372A] text-white text-xs font-bold transition-all shadow-md hover:shadow cursor-pointer"
              >
                Apply for Fall 2027 Admission
              </button>
              <button
                onClick={() => onNavigate('fields')}
                className="px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all cursor-pointer"
              >
                Explore Research Fields
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Newsletter matching mockup */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white text-[#102F21] flex items-center justify-center shadow-sm">
                <Dna className="w-5 h-5 text-[#1B4332]" />
              </div>
              <div>
                <span className="text-base font-bold text-white block leading-tight">
                  Department of Biomedical Science
                </span>
                <span className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider">
                  School of Medicine & Health Sciences
                </span>
              </div>
            </div>
            <p className="text-xs text-emerald-100/70 leading-relaxed mb-6 max-w-sm">
              Dedicated to empirical excellence, genomic medicine, transformative biotechnology, and the cultivation of future leaders in healthcare and biomedical research.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-200/80">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Institutional Member: ASBMB & IBMS Certified</span>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/80 font-medium">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer">
                  Homepage
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Us & History
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('fields')} className="hover:text-white transition-colors cursor-pointer">
                  Specialization Fields
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('officers')} className="hover:text-white transition-colors cursor-pointer">
                  Faculty Officers & Chairs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-white transition-colors cursor-pointer">
                  Research Papers & Protocols
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact & Lab Visits
                </button>
              </li>
            </ul>
          </div>

          {/* Divisions Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-4">
              Divisions & Core Suites
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/80 font-medium">
              <li>Molecular Genetics & Genomics</li>
              <li>Immunology & Infectious Disease</li>
              <li>Neurobiology & Cognitive Systems</li>
              <li>Cellular & Tissue Engineering</li>
              <li>Clinical Pharmacology & Therapeutics</li>
              <li>Bioinformatics & Structural AI Core</li>
            </ul>
          </div>

          {/* Newsletter Subscription matching mockup */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-3">
              Research Dispatches
            </h4>
            <p className="text-xs text-emerald-100/70 mb-4 leading-relaxed">
              Join thousands of scholars receiving our quarterly journal dispatches and clinical trial results.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-white/10 text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed to research dispatches!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  required
                  placeholder="Enter university email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-3 pr-24 py-2.5 rounded-full bg-white/10 border border-white/20 text-xs text-white placeholder-emerald-200/50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-4 rounded-full bg-white text-[#102F21] text-xs font-bold hover:bg-emerald-50 transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/60">
          <div>
            © 2026 Department of Biomedical Science. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-white transition-colors">Research Compliance</a>
            <a href="#about" className="hover:text-white transition-colors">Biosafety Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
