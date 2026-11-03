import React, { useState } from 'react';
import { ResearchPaper } from '../types';
import { X, ExternalLink, BookOpen, Copy, Check, Download, Share2 } from 'lucide-react';

interface PaperModalProps {
  paper: ResearchPaper | null;
  onClose: () => void;
}

export const PaperModal: React.FC<PaperModalProps> = ({ paper, onClose }) => {
  const [copiedCitation, setCopiedCitation] = useState(false);

  if (!paper) return null;

  const apaCitation = `${paper.authors.join(', ')} (${paper.year}). ${paper.title}. ${paper.journal}, DOI: ${paper.doi}.`;

  const handleCopyCitation = () => {
    navigator.clipboard.writeText(apaCitation);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#143D2B] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-emerald-300">
              {paper.category}
            </span>
            <span className="text-xs text-emerald-200 font-medium">Peer-Reviewed Literature</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-2">
              <span className="font-bold text-slate-800">{paper.journal}</span>
              <span>·</span>
              <span>{paper.year}</span>
              <span>·</span>
              <span className="font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                Impact Factor: {paper.impactFactor}
              </span>
              {paper.openAccess && (
                <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-semibold">
                  Open Access
                </span>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 leading-snug mb-3">
              {paper.title}
            </h3>

            <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 font-medium border border-slate-100">
              <span className="font-bold text-slate-900">Authors: </span>
              {paper.authors.join(', ')}
            </div>
          </div>

          {/* Abstract */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Scientific Abstract & Findings
            </h4>
            <div className="p-5 rounded-2xl bg-[#F8FAF9] border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
              <p>{paper.abstract}</p>
              <p className="text-slate-500 text-xs italic">
                Methodology: Multi-channel spectral cytometry, single-cell RNA transcriptomics, CRISPR-Cas12b ribonucleoprotein delivery, and clinical in vitro validation.
              </p>
            </div>
          </div>

          {/* External Citation Box */}
          <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-700">Cite This Article (APA)</span>
              <button
                onClick={handleCopyCitation}
                className="text-xs font-bold text-[#1B4332] flex items-center gap-1 hover:underline cursor-pointer"
              >
                {copiedCitation ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Citation Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Citation</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs font-mono text-slate-600 select-all leading-relaxed">
              {apaCitation}
            </p>
          </div>

          {/* Identifiers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Citations</span>
              <span className="text-slate-800 font-bold font-mono text-sm">{paper.citations}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Views/Downloads</span>
              <span className="text-slate-800 font-bold font-mono text-sm">{paper.downloadsCount.toLocaleString()}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">PubMed ID</span>
              <span className="text-slate-800 font-bold font-mono text-xs">{paper.pubmedId}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Status</span>
              <span className="text-emerald-700 font-bold text-xs">Verified DOI</span>
            </div>
          </div>
        </div>

        {/* Footer with ResearchGate & PubMed Buttons */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={paper.researchGateUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#00CCBB] hover:bg-[#00B4A5] text-white text-xs font-bold transition-colors flex items-center gap-2 shadow-xs"
            >
              <span className="w-4 h-4 rounded-full bg-white text-[#00CCBB] flex items-center justify-center text-[9px] font-black font-serif">
                RG
              </span>
              <span>Open on ResearchGate</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={`https://doi.org/${paper.doi}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <span>DOI Journal Publisher</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-slate-800 text-white text-xs font-bold hover:bg-slate-900 transition-colors"
          >
            Close Abstract
          </button>
        </div>
      </div>
    </div>
  );
};
