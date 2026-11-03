import React from 'react';
import { ArrowRight, Sparkles, Microscope, Award, ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../data/departmentData';

interface HeroProps {
  onExploreFields: () => void;
  onExploreResources: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreFields, onExploreResources }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F2F7F4] via-[#F8FAF9] to-white">
      {/* Subtle organic background mesh circles */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-emerald-100/40 via-teal-50/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6">
            {/* Kicker Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/8 border border-[#1B4332]/15 text-xs font-semibold text-[#1B4332] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2D6A4F]" />
              <span className="tracking-wider uppercase text-[11px]">Excellence · Innovation · Discovery</span>
            </div>

            {/* Display Headline with Mockup Typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12] mb-6 text-balance">
              Turn Your Ambition <br />
              into <span className="font-serif italic font-normal text-[#1B4332] decoration-emerald-200">Achievement</span>
            </h1>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
              Empowering aspiring biomedical researchers and clinician-scientists with world-class laboratory facilities, precision genomics, and groundbreaking translational discoveries.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={onExploreFields}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-[#1B4332] hover:bg-[#12372A] rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Academic Fields</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreResources}
                className="px-6 py-3.5 text-sm font-semibold text-slate-700 hover:text-[#1B4332] bg-white hover:bg-slate-50 border border-slate-200/90 rounded-full shadow-sm hover:shadow transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <Microscope className="w-4 h-4 text-[#2D6A4F]" />
                <span>Research Publications</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Mockup Stat Card: 99% Success Rate & Student Avatar Cluster */}
            <div className="w-full max-w-md p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/70 shadow-sm flex items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-slate-900 tracking-tight font-mono tabular-nums">
                  98.6%
                </span>
                <span className="text-xs font-medium text-slate-500 mt-0.5">
                  Graduate Fellowship Placement Rate
                </span>
              </div>

              <div className="h-10 w-px bg-slate-200" />

              <div className="flex flex-col items-end">
                <div className="flex items-center -space-x-2">
                  <img
                    src={IMAGES.departmentChair}
                    alt="Biomedical Faculty"
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src={IMAGES.heroResearcher}
                    alt="Biomedical Fellow"
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src={IMAGES.labScientist}
                    alt="Laboratory Scholar"
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  />
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-[#1B4332] text-white flex items-center justify-center text-[10px] font-bold">
                    +1.4k
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-emerald-800 mt-1 flex items-center gap-1">
                  <Award className="w-3 h-3 text-[#2D6A4F]" />
                  Active Scholars & Fellows
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Mockup Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Arched Building Photo */}
              <div className="relative overflow-hidden rounded-t-[140px] rounded-b-3xl shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src={IMAGES.campusHall}
                  alt="Hall of Biomedical Sciences"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                      Main Campus Quarter
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      The William H. Reed Biomedical Hall
                    </h3>
                  </div>
                </div>
              </div>

              {/* Inset Floating Card 1: Live Lab Action Photo */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 w-48 sm:w-56 p-2 bg-white rounded-2xl shadow-xl border border-slate-200/80 animate-in fade-in zoom-in-95 duration-500">
                <div className="relative rounded-xl overflow-hidden h-28 sm:h-32">
                  <img
                    src={IMAGES.labScientist}
                    alt="Biosafety Level-3 Core"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded text-[10px] font-bold bg-[#1B4332]/90 text-white backdrop-blur-xs">
                    BSL-3 Core Lab
                  </span>
                </div>
                <div className="p-2">
                  <p className="text-xs font-bold text-slate-800 leading-tight">
                    CRISPR & Gene Therapy Suite
                  </p>
                  <p className="text-[10px] text-emerald-700 font-medium mt-0.5">
                    ● Active Clinical Run #104
                  </p>
                </div>
              </div>

              {/* Inset Floating Badge 2: Academic Accreditation */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#1B4332] flex items-center justify-center font-bold text-xs">
                  <Sparkles className="w-4 h-4 text-[#2D6A4F]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    Accredited
                  </div>
                  <div className="text-xs font-bold text-slate-800">
                    IBMS & ASBMB Certified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
