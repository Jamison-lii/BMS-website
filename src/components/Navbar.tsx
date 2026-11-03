import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Dna, Phone } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Fields', id: 'fields' },
    { label: 'Officers', id: 'officers' },
    { label: 'Resources', id: 'resources' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Brand Zone */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1B4332] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Dna className="w-5 h-5 text-emerald-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-slate-900 leading-tight">
                Department of Biomedical Science
              </span>
              <span className="text-[11px] font-medium tracking-wide uppercase text-[#2D6A4F]">
                School of Medicine & Health Sciences
              </span>
            </div>
          </button>

          {/* Nav Links - Rounded Pill Center Container matching the mockup */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#1B4332]/5 p-1.5 rounded-full border border-[#1B4332]/10 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#1B4332] text-white shadow-sm'
                      : 'text-slate-700 hover:text-[#1B4332] hover:bg-[#1B4332]/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Zone */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+15553928800"
              className="hidden xl:flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-[#1B4332] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span>+1 (555) 392-8800</span>
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#1B4332] hover:bg-[#12372A] rounded-full shadow-sm transition-all hover:shadow flex items-center gap-1.5 cursor-pointer"
            >
              <span>Schedule Lab Visit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#1B4332] text-white'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-100 mt-2 flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-center py-2.5 text-sm font-semibold text-white bg-[#1B4332] rounded-lg shadow-sm"
              >
                Schedule Lab Visit
              </button>
              <a
                href="tel:+15553928800"
                className="flex items-center justify-center gap-2 text-xs text-slate-600 py-1"
              >
                <Phone className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>+1 (555) 392-8800</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
