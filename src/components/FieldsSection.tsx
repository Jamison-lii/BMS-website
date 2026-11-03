import React, { useState } from 'react';
import { BIOMEDICAL_FIELDS } from '../data/departmentData';
import { BiomedicalField } from '../types';
import { Dna, ArrowRight, Microscope, ChevronRight, Activity, Users, Shield } from 'lucide-react';

interface FieldsSectionProps {
  onSelectField: (field: BiomedicalField) => void;
}

export const FieldsSection: React.FC<FieldsSectionProps> = ({ onSelectField }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Molecular', 'Clinical', 'Systems', 'Computational'];

  const filteredFields =
    selectedCategory === 'All'
      ? BIOMEDICAL_FIELDS
      : BIOMEDICAL_FIELDS.filter((f) => f.category === selectedCategory);

  return (
    <section id="fields" className="py-20 md:py-28 bg-[#F8FAF9] border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/8 text-xs font-semibold text-[#1B4332] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F]" />
              <span>Academic & Research Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-serif">
              Fields of Biomedical Specialization
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Spanning molecular architecture to patient-side therapeutics, our six specialized divisions combine rigorous curriculum with hands-on bench laboratory discovery.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-full border border-slate-200/80 shadow-sm shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#1B4332] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {cat === 'All' ? 'All Divisions (6)' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFields.map((field) => (
            <div
              key={field.id}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#1B4332]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Line */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wider bg-[#EAF2ED] text-[#1B4332] border border-[#1B4332]/10">
                    {field.shortCode}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    {field.category} Division
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#1B4332] transition-colors leading-snug">
                  {field.name}
                </h3>

                <p className="text-xs text-[#2D6A4F] font-semibold mb-3">
                  {field.tagline}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-5 line-clamp-3">
                  {field.description}
                </p>

                {/* Key Research Topics */}
                <div className="mb-6">
                  <div className="text-[11px] uppercase font-bold tracking-wider text-slate-400 mb-2">
                    Core Focus Topics
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {field.keyTopics.map((topic, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium text-slate-700 bg-slate-100/80 px-2.5 py-1 rounded-md"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Lead Faculty Info */}
                <div className="pt-4 border-t border-slate-100 mb-6 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 text-[10px] block uppercase font-bold tracking-wider">
                      Division Lead
                    </span>
                    <span className="font-bold text-slate-800">{field.facultyLead}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 text-[10px] block uppercase font-bold tracking-wider">
                      Active Projects
                    </span>
                    <span className="font-bold text-[#1B4332] font-mono tabular-nums">
                      {field.activeProjectsCount} Trials
                    </span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => onSelectField(field)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#1B4332]/5 hover:bg-[#1B4332] text-[#1B4332] hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-2 border border-[#1B4332]/15 hover:border-[#1B4332] cursor-pointer group/btn"
              >
                <span>Division Curriculum & Labs</span>
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
