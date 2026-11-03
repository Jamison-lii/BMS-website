import React from 'react';
import { Microscope, GraduationCap, Dna, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PillarsProps {
  onSelectPillar: (pillarTitle: string) => void;
}

export const PillarsOfExcellence: React.FC<PillarsProps> = ({ onSelectPillar }) => {
  const pillars = [
    {
      title: 'Inspiring Student Life',
      icon: <GraduationCap className="w-8 h-8 text-[#1B4332]" />,
      shortDesc: 'Mentorship, laboratory rotations, and active scientific leadership.',
      fullDesc:
        'Our vibrant academic community supports undergraduates and doctoral scholars through peer mentorship, paid summer research apprenticeships, and the Biomedical Science Student Association (BSSA).',
      bullets: [
        'Dedicated faculty-student mentorship matching',
        'Annual Student Research Colloquium with cash prizes',
        'Sponsored attendance at international symposia',
      ],
      cta: 'Explore Student Life',
    },
    {
      title: 'Full Funding & Fellowships',
      icon: <CheckCircle2 className="w-8 h-8 text-[#1B4332]" />,
      shortDesc: '100% financial coverage with guaranteed competitive annual stipends.',
      fullDesc:
        'All admitted PhD students receive full tuition remission, comprehensive health coverage, and a guaranteed $38,500 annual living stipend, allowing scholars to focus wholeheartedly on empirical research.',
      bullets: [
        'Guaranteed 5-year doctoral funding package',
        'Conference travel & instrumentation grants',
        'Competitive pre-doctoral fellowship matching',
      ],
      cta: 'View Fellowship Grants',
    },
    {
      title: 'Core-Level Academic Labs',
      icon: <Microscope className="w-8 h-8 text-[#1B4332]" />,
      shortDesc: 'Next-generation sequencing, 300kV Cryo-EM, and BSL-3 biocontainment.',
      fullDesc:
        'Scholars train on industry-leading equipment: Titan Krios Cryo-EM, 28-color spectral flow cytometers, high-throughput Illumina NovaSeq sequencers, and an advanced 3D bio-fabrication cleanroom.',
      bullets: [
        'Centralized multi-omics and single-cell suite',
        'Biosafety Level-3 pathogen containment lab',
        'Dedicated 128-node GPU cluster for structural modeling',
      ],
      cta: 'Inspect Core Facilities',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8FAF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B4332]/8 text-xs font-semibold text-[#1B4332] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F]" />
            <span>Why Choose BioMed</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-4 font-serif">
            Pioneering Biomedical Science, Clinical Research & Global Healthcare
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Home to scholars from every corner of the globe, fostering scientific integrity, diversity, and life-saving laboratory discoveries.
          </p>
        </div>

        {/* 3 Cards Grid Matching Mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#1B4332]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-[#EAF2ED] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  {pillar.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-500 mb-4 font-medium">
                  {pillar.shortDesc}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {pillar.fullDesc}
                </p>

                <div className="space-y-2 mb-8 pt-4 border-t border-slate-100">
                  {pillar.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F] mt-1.5 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectPillar(pillar.title)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-[#1B4332] text-slate-700 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-2 border border-slate-200 hover:border-[#1B4332] cursor-pointer"
              >
                <span>{pillar.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
