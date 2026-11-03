import React from 'react';
import { Award, ArrowRight, Dna, Activity, Users, ShieldCheck } from 'lucide-react';
import { IMAGES } from '../data/departmentData';

interface HeritageStatsProps {
  onLearnMore: () => void;
}

export const HeritageStats: React.FC<HeritageStatsProps> = ({ onLearnMore }) => {
  return (
    <section className="bg-[#143D2B] text-white py-20 md:py-28 relative overflow-hidden">
      {/* Subtle organic light accent behind stats */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header Row matching mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-4">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-emerald-300 border border-white/15 mb-4">
              Since 1994
            </span>
            <p className="text-emerald-100/80 text-sm leading-relaxed">
              For over three decades, the Department of Biomedical Science has stood at the frontier of therapeutic breakthrough, cultivating exceptional Black and international scientific minds.
            </p>
          </div>

          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6 font-serif">
              The right opportunity can turn dreams into limitless scientific potential.
            </h2>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#143D2B] text-xs font-bold hover:bg-emerald-50 transition-colors shadow-sm cursor-pointer"
              >
                <span>Read Department History</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <div className="flex items-center gap-2 text-xs text-emerald-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Fully Accredited by National Science Advisory</span>
              </div>
            </div>
          </div>
        </div>

        {/* Media & Stats Grid matching mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Graduation Celebration Photo */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 group">
              <img
                src={IMAGES.graduatesCelebration}
                alt="Biomedical Science Graduates Celebration"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F291E]/90 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold">
                    Class of 2026 Doctoral Hooding & Commencement
                  </span>
                  <p className="text-sm font-medium text-white/90 mt-1 max-w-xl">
                    100% of our PhD graduates secured research fellowships at Ivy League medical centers, the NIH, or top biotechnology institutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Lab Science Inset Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 group">
              <img
                src={IMAGES.heroResearcher}
                alt="Molecular Laboratory Research"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F291E]/90 via-transparent to-transparent flex items-end p-6">
                <div className="w-full flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold">
                      Bench-to-Bedside Research
                    </span>
                    <p className="text-sm font-medium text-white/90 mt-0.5">
                      Functional Microscopy & Cell Analytics
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Dna className="w-5 h-5 text-emerald-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Big Metrics Ribbon below images matching mockup */}
        <div className="mt-14 pt-10 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight tabular-nums">
              98.6%
            </div>
            <p className="text-xs uppercase font-bold tracking-wider text-emerald-300 mt-2">
              Career Placement
            </p>
            <p className="text-xs text-emerald-100/70 mt-1">
              Active in research fellowships, MD-PhD programs, or biotech careers.
            </p>
          </div>

          <div>
            <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight tabular-nums">
              42+
            </div>
            <p className="text-xs uppercase font-bold tracking-wider text-emerald-300 mt-2">
              Clinical Trials
            </p>
            <p className="text-xs text-emerald-100/70 mt-1">
              Active sponsored trials in sickle cell, oncology, and neurobiology.
            </p>
          </div>

          <div>
            <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight tabular-nums">
              $38.4M
            </div>
            <p className="text-xs uppercase font-bold tracking-wider text-emerald-300 mt-2">
              Endowed Grants
            </p>
            <p className="text-xs text-emerald-100/70 mt-1">
              Sustained multi-year research awards from federal & philanthropic funds.
            </p>
          </div>

          <div>
            <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight tabular-nums">
              340+
            </div>
            <p className="text-xs uppercase font-bold tracking-wider text-emerald-300 mt-2">
              Publications
            </p>
            <p className="text-xs text-emerald-100/70 mt-1">
              Peer-reviewed articles in Nature, The Lancet, Science, and Cell.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
