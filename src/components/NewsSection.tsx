import React, { useState } from 'react';
import { ArrowRight, ChevronRight, X, Newspaper, Calendar, Clock } from 'lucide-react';
import { DEPARTMENT_NEWS } from '../data/departmentData';
import { NewsItem } from '../types';

export const NewsSection: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  return (
    <section className="py-20 md:py-28 bg-[#143D2B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-emerald-300 border border-white/15 mb-3">
              Press & Dispatch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-serif">
              News About Our Department
            </h2>
          </div>
          <div className="text-xs text-emerald-200/80 font-medium">
            Discover recent laboratory grants, faculty recognitions, and symposium updates.
          </div>
        </div>

        {/* Mockup Style News List Rows */}
        <div className="space-y-3">
          {DEPARTMENT_NEWS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedNews(item)}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 rounded-2xl p-4 sm:p-5 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1">
                {/* Date Pill matching mockup */}
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-white/10 text-emerald-200 border border-white/10 shrink-0 self-start sm:self-auto">
                  {item.date}
                </span>

                <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>

              <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
                <span className="text-xs text-emerald-300/70 hidden md:inline">
                  {item.readTime}
                </span>
                <div className="px-3.5 py-1.5 rounded-full bg-white/10 group-hover:bg-white group-hover:text-[#143D2B] text-xs font-bold text-white transition-all flex items-center gap-1.5">
                  <span>Read Article</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* News Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white text-slate-900 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-[#1B4332]">
                {selectedNews.category}
              </span>
              <button
                onClick={() => setSelectedNews(null)}
                className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {selectedNews.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {selectedNews.readTime}
              </span>
              <span>·</span>
              <span>By {selectedNews.author}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-serif mb-4 text-slate-900 leading-snug">
              {selectedNews.title}
            </h3>

            <div className="space-y-3 text-sm text-slate-600 leading-relaxed mb-8">
              <p>{selectedNews.excerpt}</p>
              <p>
                The Department of Biomedical Science continues to expand its research footprints with national and global grant agencies. This initiative provides graduate researchers with dedicated access to state-of-the-art sequencing and cellular phenotyping pipelines.
              </p>
              <p>
                Faculty investigators invite prospective post-doctoral fellows and visiting scholars to submit joint inquiries through the department office.
              </p>
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-100">
              <button
                onClick={() => setSelectedNews(null)}
                className="px-5 py-2.5 rounded-full bg-[#1B4332] text-white text-xs font-bold hover:bg-[#12372A]"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
