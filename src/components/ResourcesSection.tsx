import React, { useState } from 'react';
import { RESEARCH_PAPERS, LAB_PROTOCOLS } from '../data/departmentData';
import { ResearchPaper, LabProtocolResource } from '../types';
import { Search, Filter, ExternalLink, Download, BookOpen, FileText, CheckCircle2, ChevronRight, Share2 } from 'lucide-react';

interface ResourcesSectionProps {
  onSelectPaper: (paper: ResearchPaper) => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({ onSelectPaper }) => {
  const [activeTab, setActiveTab] = useState<'papers' | 'protocols'>('papers');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const categories = ['All', 'Genomic Medicine', 'Immunotherapy', 'Neurobiology', 'Tissue Engineering', 'Drug Delivery', 'Computational Biology'];

  const filteredPapers = RESEARCH_PAPERS.filter((paper) => {
    const matchesSearch =
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.authors.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
      paper.journal.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || paper.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownloadProtocol = (protocol: LabProtocolResource) => {
    setDownloadToast(`Preparing ${protocol.title} (${protocol.fileSize})...`);
    setTimeout(() => {
      setDownloadToast(`Downloaded: ${protocol.title}`);
      setTimeout(() => setDownloadToast(null), 3000);
    }, 1200);
  };

  return (
    <section id="resources" className="py-20 md:py-28 bg-[#F8FAF9] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/8 text-xs font-semibold text-[#1B4332] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F]" />
              <span>Scientific Output & Repositories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-serif">
              Research Publications & Academic Resources
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              Access peer-reviewed articles authored by our faculty and scholars with direct links to ResearchGate, PubMed, and downloadable laboratory protocols.
            </p>
          </div>

          {/* Section Main Tabs */}
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-full border border-slate-200 shadow-sm shrink-0">
            <button
              onClick={() => setActiveTab('papers')}
              className={`px-5 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                activeTab === 'papers'
                  ? 'bg-[#1B4332] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Peer-Reviewed Papers ({RESEARCH_PAPERS.length})
            </button>
            <button
              onClick={() => setActiveTab('protocols')}
              className={`px-5 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                activeTab === 'protocols'
                  ? 'bg-[#1B4332] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Lab Protocols & Handbooks ({LAB_PROTOCOLS.length})
            </button>
          </div>
        </div>

        {/* Download Toast Notification */}
        {downloadToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#1B4332] text-white px-5 py-3 rounded-2xl shadow-xl border border-white/20 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-300">
            <CheckCircle2 className="w-5 h-5 text-emerald-300" />
            <span className="text-xs font-semibold">{downloadToast}</span>
          </div>
        )}

        {/* TAB 1: RESEARCH PAPERS */}
        {activeTab === 'papers' && (
          <div>
            {/* Search & Filter Bar */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search papers by title, author (e.g. Reed, Vance), or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1B4332] focus:border-transparent shadow-xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Categories */}
              <div className="flex flex-wrap items-center gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap ${
                      selectedCategory === cat
                        ? 'bg-[#1B4332] text-white'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Papers List */}
            {filteredPapers.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
                <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-800">No research papers found</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                  Try adjusting your search keywords or clearing the category filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="mt-4 px-4 py-2 text-xs font-bold bg-[#1B4332] text-white rounded-full"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredPapers.map((paper) => (
                  <div
                    key={paper.id}
                    className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#1B4332]/40 transition-all duration-200"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                      <div className="flex-1">
                        {/* Meta row */}
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="text-xs font-bold text-[#1B4332] bg-[#EAF2ED] px-2.5 py-0.5 rounded-full">
                            {paper.category}
                          </span>
                          <span className="text-slate-300">·</span>
                          <span className="text-xs font-bold text-slate-900">{paper.journal}</span>
                          <span className="text-slate-300">·</span>
                          <span className="text-xs text-slate-500">{paper.year}</span>
                          <span className="text-slate-300">·</span>
                          <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                            IF: {paper.impactFactor}
                          </span>
                          {paper.openAccess && (
                            <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                              Open Access
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-2 hover:text-[#1B4332] transition-colors cursor-pointer"
                            onClick={() => onSelectPaper(paper)}
                        >
                          {paper.title}
                        </h3>

                        {/* Authors */}
                        <div className="text-xs text-slate-600 mb-4">
                          <span className="font-semibold text-slate-700">Investigators: </span>
                          {paper.authors.join(', ')}
                        </div>

                        {/* Abstract excerpt */}
                        <p className="text-xs text-slate-600 leading-relaxed mb-6 line-clamp-2">
                          {paper.abstract}
                        </p>

                        {/* Identifiers & Stats */}
                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                          <span className="font-mono text-[11px]">DOI: {paper.doi}</span>
                          <span className="text-slate-300">·</span>
                          <span className="font-mono text-[11px]">PubMed: {paper.pubmedId}</span>
                          <span className="text-slate-300">·</span>
                          <span>{paper.citations} Citations</span>
                          <span className="text-slate-300">·</span>
                          <span>{paper.downloadsCount.toLocaleString()} Views</span>
                        </div>
                      </div>

                      {/* Direct Links Column with ResearchGate Button */}
                      <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0 lg:w-56 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l lg:pl-6 border-slate-100">
                        {/* ResearchGate Link */}
                        <a
                          href={paper.researchGateUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full py-2.5 px-4 rounded-xl bg-[#00CCBB]/10 hover:bg-[#00CCBB]/20 text-[#008F83] border border-[#00CCBB]/30 text-xs font-bold transition-colors flex items-center justify-between cursor-pointer"
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-[#00CCBB] text-white flex items-center justify-center font-serif text-[10px] font-black">
                              RG
                            </span>
                            <span>ResearchGate</span>
                          </span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        {/* Read Abstract / Citation Modal */}
                        <button
                          onClick={() => onSelectPaper(paper)}
                          className="w-full py-2.5 px-4 rounded-xl bg-[#1B4332] hover:bg-[#12372A] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Read Full Abstract</span>
                        </button>

                        {/* PubMed External Link */}
                        <a
                          href={`https://pubmed.ncbi.nlm.nih.gov/?term=${paper.pubmedId}`}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors flex items-center justify-between border border-slate-200"
                        >
                          <span>PubMed Central</span>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: LAB PROTOCOLS & ACADEMIC HANDBOOKS */}
        {activeTab === 'protocols' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LAB_PROTOCOLS.map((protocol) => (
              <div
                key={protocol.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#1B4332]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EAF2ED] text-[#1B4332]">
                      {protocol.category}
                    </span>
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      {protocol.type} · {protocol.fileSize}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug mb-3">
                    {protocol.title}
                  </h3>

                  <div className="text-xs text-slate-500 mb-6 flex items-center gap-4">
                    <span>Updated: {protocol.lastUpdated}</span>
                    <span>·</span>
                    <span>{protocol.downloads.toLocaleString()} Active Downloads</span>
                  </div>
                </div>

                <button
                  onClick={() => handleDownloadProtocol(protocol)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#1B4332] text-white hover:bg-[#12372A] text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resource Document</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
