import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS, IMAGES } from '../data/departmentData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 md:py-28 bg-[#F8FAF9] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/8 text-xs font-semibold text-[#1B4332] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F]" />
            <span>Admissions & Laboratory Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-serif">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Key details regarding program applications, research assistantships, lab safety protocols, and core access.
          </p>
        </div>

        {/* Mockup Layout: Building photo on left, FAQ Accordions on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Campus Hall Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 sticky top-28">
              <img
                src={IMAGES.campusHall}
                alt="Biomedical Science Institute"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F291E]/90 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                    Admissions & Academic Affairs
                  </span>
                  <h4 className="text-lg font-bold text-white mt-1">
                    Have more questions about our laboratories?
                  </h4>
                  <p className="text-xs text-white/80 mt-1">
                    Reach out to our student admissions advisors or schedule a guided laboratory visit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Accordions matching mockup */}
          <div className="lg:col-span-7 space-y-3.5">
            {FAQ_ITEMS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded-full bg-slate-100 text-slate-500 shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#1B4332]" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
