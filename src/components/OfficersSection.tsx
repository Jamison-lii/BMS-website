import React, { useState } from 'react';
import { DEPARTMENT_OFFICERS } from '../data/departmentData';
import { DepartmentOfficer } from '../types';
import { Mail, Phone, MapPin, ExternalLink, BookOpen, Clock, Award, ArrowUpRight } from 'lucide-react';

interface OfficersSectionProps {
  onSelectOfficer: (officer: DepartmentOfficer) => void;
}

export const OfficersSection: React.FC<OfficersSectionProps> = ({ onSelectOfficer }) => {
  const [filterRole, setFilterRole] = useState<string>('All');

  const roles = ['All', 'Executive', 'Research', 'Academics', 'Operations', 'Student Society'];

  const filteredOfficers =
    filterRole === 'All'
      ? DEPARTMENT_OFFICERS
      : DEPARTMENT_OFFICERS.filter((o) => o.departmentRole === filterRole);

  return (
    <section id="officers" className="py-20 md:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/8 text-xs font-semibold text-[#1B4332] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F]" />
              <span>Departmental Leadership & Faculty</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-serif">
              Department Officers & Council
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Meet the distinguished clinician-scientists, deans, and student leaders stewarding the academic, scientific, and laboratory operations of our department.
            </p>
          </div>

          {/* Role Filters */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-full shrink-0">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => setFilterRole(role)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all cursor-pointer whitespace-nowrap ${
                  filterRole === role
                    ? 'bg-[#1B4332] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Officers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOfficers.map((officer) => (
            <div
              key={officer.id}
              className="bg-[#F8FAF9] rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#1B4332]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Officer Image Header */}
                <div className="relative h-64 overflow-hidden bg-slate-200">
                  <img
                    src={officer.image}
                    alt={officer.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/90 text-white backdrop-blur-xs">
                        {officer.departmentRole}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-1 leading-snug">
                        {officer.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-xs font-bold text-[#1B4332] mb-1">
                    {officer.role}
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium mb-3">
                    {officer.degrees}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {officer.bio}
                  </p>

                  {/* Research Focus */}
                  <div className="p-3 rounded-xl bg-white border border-slate-200/70 mb-4 text-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      Research Concentration
                    </span>
                    <span className="text-slate-700 text-xs font-medium line-clamp-2">
                      {officer.researchFocus}
                    </span>
                  </div>

                  {/* Metrics: Publications & Citations */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-slate-200/60 text-center mb-4">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Papers</span>
                      <span className="text-sm font-bold text-slate-800 font-mono tabular-nums">
                        {officer.publicationsCount}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">Citations</span>
                      <span className="text-sm font-bold text-slate-800 font-mono tabular-nums">
                        {officer.citationsCount > 0 ? officer.citationsCount.toLocaleString() : 'N/A'}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase font-bold block">h-Index</span>
                      <span className="text-sm font-bold text-[#1B4332] font-mono tabular-nums">
                        {officer.hIndex}
                      </span>
                    </div>
                  </div>

                  {/* Office & Hours Quick Info */}
                  <div className="space-y-1.5 text-xs text-slate-600 mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{officer.office}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{officer.officeHours}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-6 pt-0 flex items-center gap-2">
                <button
                  onClick={() => onSelectOfficer(officer)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#1B4332] text-white hover:bg-[#12372A] text-xs font-bold transition-all shadow-xs text-center cursor-pointer"
                >
                  View Full Profile & Bio
                </button>

                <a
                  href={officer.researchGateUrl}
                  target="_blank"
                  rel="noreferrer"
                  title="View on ResearchGate"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-[#00CCBB] hover:bg-[#00CCBB]/10 text-slate-700 hover:text-[#00CCBB] flex items-center justify-center transition-all cursor-pointer shrink-0"
                >
                  <span className="text-[11px] font-black font-serif">RG</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
