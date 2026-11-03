import React from 'react';
import { DepartmentOfficer } from '../types';
import { X, Mail, Phone, MapPin, Clock, ExternalLink, Award, BookOpen, Share2 } from 'lucide-react';

interface OfficerModalProps {
  officer: DepartmentOfficer | null;
  onClose: () => void;
}

export const OfficerModal: React.FC<OfficerModalProps> = ({ officer, onClose }) => {
  if (!officer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 bg-[#143D2B] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-emerald-300">
              {officer.departmentRole} Leadership
            </span>
            <span className="text-xs text-emerald-200 font-medium">Faculty Dossier</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Top Profile Lockup */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src={officer.image}
              alt={officer.name}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-2 border-emerald-500 shadow-md shrink-0"
            />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 leading-tight">
                {officer.name}
              </h3>
              <p className="text-xs font-bold text-[#1B4332] mt-1">{officer.role}</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">{officer.degrees}</p>

              {/* Metrics */}
              <div className="flex items-center gap-4 mt-3 text-xs font-mono">
                <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-700">
                  {officer.publicationsCount} Publications
                </span>
                <span className="bg-slate-100 px-2.5 py-1 rounded-md text-slate-700">
                  {officer.citationsCount > 0 ? officer.citationsCount.toLocaleString() : 'N/A'} Citations
                </span>
                <span className="bg-emerald-50 text-[#1B4332] px-2.5 py-1 rounded-md font-bold">
                  h-Index: {officer.hIndex}
                </span>
              </div>
            </div>
          </div>

          {/* Biography */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Academic Biography
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {officer.bio}
            </p>
          </div>

          {/* Research Focus */}
          <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F] mb-1.5 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Laboratory & Research Focus</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {officer.researchFocus}
            </p>
          </div>

          {/* Office & Direct Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 text-slate-500 mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span className="font-bold uppercase tracking-wider text-[10px]">Office Location</span>
              </div>
              <span className="text-slate-800 font-medium">{officer.office}</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 text-slate-500 mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span className="font-bold uppercase tracking-wider text-[10px]">Office & Advising Hours</span>
              </div>
              <span className="text-slate-800 font-medium">{officer.officeHours}</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 text-slate-500 mb-1">
                <Mail className="w-3.5 h-3.5" />
                <span className="font-bold uppercase tracking-wider text-[10px]">Email Dispatch</span>
              </div>
              <a href={`mailto:${officer.email}`} className="text-[#1B4332] font-semibold hover:underline truncate block">
                {officer.email}
              </a>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-2 text-slate-500 mb-1">
                <Phone className="w-3.5 h-3.5" />
                <span className="font-bold uppercase tracking-wider text-[10px]">Office Phone</span>
              </div>
              <a href={`tel:${officer.phone}`} className="text-[#1B4332] font-mono font-medium hover:underline block">
                {officer.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <a
            href={officer.researchGateUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#00CCBB]/15 hover:bg-[#00CCBB]/25 text-[#008F83] border border-[#00CCBB]/40 text-xs font-bold transition-colors flex items-center gap-2"
          >
            <span className="w-4 h-4 rounded-full bg-[#00CCBB] text-white flex items-center justify-center text-[9px] font-black">
              RG
            </span>
            <span>View Publications on ResearchGate</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-slate-800 text-white text-xs font-bold hover:bg-slate-900 transition-colors"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
