import React from 'react';
import { BiomedicalField } from '../types';
import { X, Dna, Microscope, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

interface FieldModalProps {
  field: BiomedicalField | null;
  onClose: () => void;
  onInquire: () => void;
}

export const FieldModal: React.FC<FieldModalProps> = ({ field, onClose, onInquire }) => {
  if (!field) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#143D2B] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-white/15 text-emerald-300">
              {field.shortCode}
            </span>
            <span className="text-xs text-emerald-200 font-medium">Division Curriculum & Facilities</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F] block mb-1">
              {field.category} Division
            </span>
            <h3 className="text-2xl font-bold font-serif text-slate-900 leading-snug">
              {field.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 font-medium">
              {field.tagline}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
            {field.description}
          </div>

          {/* Division Lead & Trial Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Division Faculty Lead</span>
              <span className="text-sm font-bold text-slate-900 block">{field.facultyLead}</span>
              <span className="text-xs text-slate-500">{field.leadTitle}</span>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Active Research Scope</span>
              <span className="text-sm font-bold text-[#1B4332] block font-mono">{field.activeProjectsCount} Funded Projects</span>
              <span className="text-xs text-slate-500">Sponsored by NIH & Wellcome Trust</span>
            </div>
          </div>

          {/* Core Laboratories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
              <Microscope className="w-4 h-4 text-[#2D6A4F]" />
              <span>Dedicated Research Laboratories & Equipment</span>
            </h4>
            <div className="space-y-2">
              {field.coreLabs.map((lab, i) => (
                <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-emerald-50/50 text-xs font-medium text-slate-800 border border-emerald-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0" />
                  <span>{lab}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Career Pathways */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#2D6A4F]" />
              <span>Graduate Career Pathways</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {field.careerPaths.map((c, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-100 text-xs font-medium text-slate-700">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onInquire();
            }}
            className="px-5 py-2.5 rounded-full bg-[#1B4332] text-white hover:bg-[#12372A] text-xs font-bold transition-all shadow-xs flex items-center gap-2"
          >
            <span>Inquire About Joining This Division</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-300 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
