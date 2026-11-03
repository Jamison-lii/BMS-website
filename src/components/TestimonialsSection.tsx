import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS, IMAGES } from '../data/departmentData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAF9] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching mockup */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/8 text-xs font-semibold text-[#1B4332] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F]" />
            <span>Community Voices</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-serif">
            Voices From Our Global Community
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Hear from our doctoral alumni, post-doctoral fellows, and visiting scholars making transformative contributions worldwide.
          </p>
        </div>

        {/* Testimonials Grid Layout modeled after the mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured Large Dark Green Card (Mockup style) */}
          <div className="lg:col-span-5 bg-[#143D2B] text-white rounded-3xl p-8 sm:p-10 shadow-lg border border-white/10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <Quote className="w-10 h-10 text-emerald-400 mb-6 opacity-80" />
              <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold block mb-2">
                Featured Fellowship Experience
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif mb-4 leading-snug text-white">
                “A World-Class Laboratory Environment That Propels Scientific Autonomy.”
              </h3>
              <p className="text-sm text-emerald-100/80 leading-relaxed mb-6">
                “Working in the Functional Genomics lab under Prof. Reed gave me the technical autonomy, grant-writing prowess, and deep experimental rigor that directly led to my appointment as a senior research fellow at Genentech. The global exposure and faculty mentorship here are peerless.”
              </p>
            </div>

            <div className="pt-6 border-t border-white/15 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={IMAGES.departmentChair}
                  alt="Dr. Leslie Alexander"
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-400"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">Dr. Leslie Alexander, PhD</h4>
                  <p className="text-xs text-emerald-200">Senior Scientist, Genentech (Class of '23)</p>
                </div>
              </div>
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Secondary Light Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TESTIMONIALS.filter((t) => !t.isFeatured).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#1B4332]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="w-6 h-6 text-[#2D6A4F] opacity-70" />
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    “{item.quote}”
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-900">{item.author}</h4>
                  <p className="text-[11px] text-[#1B4332] font-semibold">{item.role}</p>
                  <p className="text-[10px] text-slate-400">{item.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
