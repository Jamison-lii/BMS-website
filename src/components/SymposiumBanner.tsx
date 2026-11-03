import React, { useState } from 'react';
import { Play, Calendar, MapPin, Video, Users, CheckCircle2, X } from 'lucide-react';
import { IMAGES } from '../data/departmentData';

export const SymposiumBanner: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [registered, setRegistered] = useState(false);

  return (
    <section className="py-16 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-[#0F291E] text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Column: Info & Action */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-emerald-300 border border-white/15 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Featured Annual Academic Event</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif leading-tight mb-4 text-white">
                Biomedical Frontiers Symposium 2026
              </h2>

              <p className="text-emerald-100/80 text-sm leading-relaxed mb-6 max-w-xl">
                Three days of groundbreaking keynotes on CRISPR-Cas12 therapeutics, neural organoid bio-printing, and clinical translation with leading scientists from Oxford, Johns Hopkins, and the Broad Institute.
              </p>

              <div className="flex flex-wrap items-center gap-6 text-xs text-emerald-200 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>November 14–16, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Grand Auditorium & Global Livestream</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>1,200+ Registered Attendees</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="px-6 py-3 rounded-full bg-white text-[#0F291E] text-xs font-bold hover:bg-emerald-50 transition-colors flex items-center gap-2.5 shadow-md cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current text-[#1B4332]" />
                  <span>Watch Keynote Preview</span>
                </button>

                <button
                  onClick={() => setRegistered(true)}
                  className={`px-6 py-3 rounded-full border text-xs font-bold transition-all cursor-pointer ${
                    registered
                      ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                      : 'border-white/30 text-white hover:bg-white/10'
                  }`}
                >
                  {registered ? '✓ Seat Reserved' : 'Reserve Complimentary Pass'}
                </button>
              </div>
            </div>

            {/* Right Column: Visual Video Banner Preview with Play Trigger */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-full min-h-[340px]">
              <img
                src={IMAGES.campusHall}
                alt="University Auditorium"
                className="w-full h-full object-cover object-center opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F291E] via-[#0F291E]/60 to-transparent lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F291E] via-transparent to-transparent lg:hidden block" />

              {/* Play Trigger Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  aria-label="Play Symposium Video"
                  className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-white/30 transition-all cursor-pointer group"
                >
                  <div className="w-14 h-14 rounded-full bg-white text-[#1B4332] flex items-center justify-center shadow-lg group-hover:bg-emerald-50">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                </button>
              </div>

              <div className="absolute bottom-6 right-6 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-mono text-emerald-300 border border-white/10">
                HD · 03:42 Overview
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Simulation */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
            <div className="p-4 bg-slate-950 flex items-center justify-between text-white border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold">Biomedical Frontiers Symposium Keynote Presentation</span>
              </div>
              <button
                onClick={() => setIsVideoOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video bg-black flex flex-col items-center justify-center p-8 text-center">
              <img
                src={IMAGES.labScientist}
                alt="Symposium Footage"
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              />
              <div className="relative z-10 max-w-lg">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 mb-3">
                  Keynote Address by Prof. Evelyn Reed, PhD, FRS
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 font-serif">
                  “The Next Horizon: Gene Editing & Synthetic Biology in Clinical Practice”
                </h3>
                <p className="text-xs text-slate-300 mb-6">
                  Presented at the Great Hall of Biomedical Sciences. Featuring full Q&A discussion with PhD research scholars.
                </p>
                <div className="flex items-center justify-center gap-3">
                  <button
                    onClick={() => setIsVideoOpen(false)}
                    className="px-5 py-2.5 rounded-full bg-[#1B4332] text-white text-xs font-bold hover:bg-[#12372A]"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
