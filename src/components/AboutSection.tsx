import React, { useState } from 'react';
import { Award, BookOpen, ShieldCheck, Microscope, ArrowRight, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../data/departmentData';

interface AboutSectionProps {
  onExploreOfficers: () => void;
  onExploreFacilities: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreOfficers, onExploreFacilities }) => {
  const [activeTab, setActiveTab] = useState<'mission' | 'chair' | 'milestones'>('chair');

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/8 text-xs font-semibold text-[#1B4332] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F]" />
              <span>About The Department</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-serif">
              Three Decades of Pioneering Discoveries & Scientific Leadership
            </h2>
          </div>

          {/* Interactive Navigation Pills for About Us */}
          <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-full shrink-0">
            <button
              onClick={() => setActiveTab('chair')}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                activeTab === 'chair'
                  ? 'bg-[#1B4332] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Chair's Welcome
            </button>
            <button
              onClick={() => setActiveTab('mission')}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                activeTab === 'mission'
                  ? 'bg-[#1B4332] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Mission & Ethos
            </button>
            <button
              onClick={() => setActiveTab('milestones')}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                activeTab === 'milestones'
                  ? 'bg-[#1B4332] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Milestones
            </button>
          </div>
        </div>

        {/* Tab Content 1: Chair's Welcome */}
        {activeTab === 'chair' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-[#F2F7F4]">
                <img
                  src={IMAGES.departmentChair}
                  alt="Prof. Evelyn Reed, Department Chair"
                  className="w-full h-[450px] object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F291E]/95 via-[#0F291E]/50 to-transparent p-6 text-white">
                  <h4 className="text-xl font-bold">Prof. Evelyn Reed, PhD, FRS</h4>
                  <p className="text-xs text-emerald-300 font-medium">
                    Department Chair & Endowed Professor of Genomic Medicine
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F] mb-2">
                Executive Leadership
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif leading-snug mb-6">
                “We train scientists not merely to observe nature, but to decipher its molecular machinery and heal human disease.”
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                <p>
                  Welcome to the Department of Biomedical Science. Since our founding, our mandate has been unwavering: to deliver uncompromising laboratory rigor while creating an inspiring, globally inclusive academic environment.
                </p>
                <p>
                  Our investigators and trainees work across the complete continuum of biomedical inquiry—from dissecting single-nucleotide variations with CRISPR-Cas12b to designing bio-artificial organoids and conducting early-stage clinical trials. We believe true innovation thrives when scientific talent from all backgrounds is supported with world-class facilities and bold autonomy.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
                <button
                  onClick={onExploreOfficers}
                  className="px-5 py-2.5 rounded-full bg-[#1B4332] text-white text-xs font-bold hover:bg-[#12372A] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Meet Department Officers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="text-xs text-slate-500 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2D6A4F]" />
                  <span>Fellow of the Royal Society (FRS) · Broad Institute Alumna</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Mission & Ethos */}
        {activeTab === 'mission' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#1B4332] flex items-center justify-center font-bold mb-6">
                01
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Empirical Rigor</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Conducting reproducible, peer-reviewed science adhering to the highest global standards of clinical trials and molecular verification.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#1B4332] flex items-center justify-center font-bold mb-6">
                02
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Health Equity & Inclusion</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dedicated to eradicating disparities in therapeutic access, with specialized research programs focusing on sickle cell anemia and neglected tropical diseases.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAF9] border border-slate-200/80">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#1B4332] flex items-center justify-center font-bold mb-6">
                03
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Bench-to-Bedside Translation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Bridging fundamental cellular mechanisms directly with patient care through our close partnership with university teaching hospitals and health systems.
              </p>
            </div>
          </div>
        )}

        {/* Tab Content 3: Milestones */}
        {activeTab === 'milestones' && (
          <div className="relative border-l-2 border-[#1B4332]/20 pl-8 ml-4 space-y-10 py-4">
            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#1B4332] border-4 border-white" />
              <span className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wider">1994</span>
              <h4 className="text-lg font-bold text-slate-900 mt-1">Department Founded</h4>
              <p className="text-sm text-slate-600 mt-1">
                Established with an initial endowment to unite molecular biologists, immunologists, and pharmacologists under one interdisciplinary institute.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#1B4332] border-4 border-white" />
              <span className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wider">2008</span>
              <h4 className="text-lg font-bold text-slate-900 mt-1">Biosafety Level-3 (BSL-3) Suite Inaugurated</h4>
              <p className="text-sm text-slate-600 mt-1">
                State-of-the-art pathogen containment facility commissioned for research on airborne viruses, tuberculosis, and viral immunology.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#1B4332] border-4 border-white" />
              <span className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wider">2019</span>
              <h4 className="text-lg font-bold text-slate-900 mt-1">First-in-Human Sickle Cell CRISPR Clinical Phase</h4>
              <p className="text-sm text-slate-600 mt-1">
                Prof. Evelyn Reed's laboratory translated base-edited autologous stem cells into clinical trials with landmark success.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#1B4332] border-4 border-white" />
              <span className="text-xs font-bold text-[#2D6A4F] uppercase tracking-wider">2026</span>
              <h4 className="text-lg font-bold text-slate-900 mt-1">Cryogenic Electron Microscopy & AI Discovery Center</h4>
              <p className="text-sm text-slate-600 mt-1">
                Opened $12M Titan Krios suite integrated with a dedicated high-performance GPU cluster for macromolecular modeling.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
