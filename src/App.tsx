import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeritageStats } from './components/HeritageStats';
import { PillarsOfExcellence } from './components/PillarsOfExcellence';
import { AboutSection } from './components/AboutSection';
import { FieldsSection } from './components/FieldsSection';
import { OfficersSection } from './components/OfficersSection';
import { ResourcesSection } from './components/ResourcesSection';
import { SymposiumBanner } from './components/SymposiumBanner';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NewsSection } from './components/NewsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { OfficerModal } from './components/OfficerModal';
import { PaperModal } from './components/PaperModal';
import { FieldModal } from './components/FieldModal';

import { DepartmentOfficer, ResearchPaper, BiomedicalField } from './types';
import { BIOMEDICAL_FIELDS } from './data/departmentData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Modal states
  const [selectedOfficer, setSelectedOfficer] = useState<DepartmentOfficer | null>(null);
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);
  const [selectedField, setSelectedField] = useState<BiomedicalField | null>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPillar = (pillarTitle: string) => {
    if (pillarTitle.includes('Academic') || pillarTitle.includes('Facilities')) {
      scrollToSection('fields');
    } else if (pillarTitle.includes('Funding')) {
      scrollToSection('contact');
    } else {
      scrollToSection('about');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9] text-slate-800 font-sans selection:bg-[#1B4332] selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar onNavigate={scrollToSection} activeSection={activeSection} />

      {/* Main Page Layout */}
      <main className="flex-1">
        {/* 1. Hero Section (Mockup top left/right layout) */}
        <Hero
          onExploreFields={() => scrollToSection('fields')}
          onExploreResources={() => scrollToSection('resources')}
        />

        {/* 2. Heritage & Large Metrics Forest Green Section (Mockup middle-green block) */}
        <HeritageStats onLearnMore={() => scrollToSection('about')} />

        {/* 3. Pillars of Excellence 3-Card Section (Mockup why choose us cards) */}
        <PillarsOfExcellence onSelectPillar={handleSelectPillar} />

        {/* 4. About Us Section (Chair Welcome, Mission & History) */}
        <AboutSection
          onExploreOfficers={() => scrollToSection('officers')}
          onExploreFacilities={() => scrollToSection('fields')}
        />

        {/* 5. Fields of Biomedical Specialization Section */}
        <FieldsSection onSelectField={(field) => setSelectedField(field)} />

        {/* 6. Department Officers & Leadership Section */}
        <OfficersSection onSelectOfficer={(officer) => setSelectedOfficer(officer)} />

        {/* 7. Resources: Peer-Reviewed Papers & ResearchGate Repositories */}
        <ResourcesSection onSelectPaper={(paper) => setSelectedPaper(paper)} />

        {/* 8. Event / Symposium Video Banner (Mockup ceremony banner) */}
        <SymposiumBanner />

        {/* 9. Testimonials: Voices From Our Global Community (Mockup reviews grid) */}
        <TestimonialsSection />

        {/* 10. News & Dispatches (Mockup dark green list rows) */}
        <NewsSection />

        {/* 11. Frequently Asked Questions (Mockup image-on-left + accordions) */}
        <FaqSection />

        {/* 12. Contact, Directory & Guided Lab Visit Scheduler */}
        <ContactSection />
      </main>

      {/* 13. Pre-Footer Banner & Footer (Mockup clean card + deep green footer) */}
      <Footer onNavigate={scrollToSection} />

      {/* Interactive Dossier Modals */}
      <OfficerModal
        officer={selectedOfficer}
        onClose={() => setSelectedOfficer(null)}
      />

      <PaperModal
        paper={selectedPaper}
        onClose={() => setSelectedPaper(null)}
      />

      <FieldModal
        field={selectedField}
        onClose={() => setSelectedField(null)}
        onInquire={() => {
          setSelectedField(null);
          scrollToSection('contact');
        }}
      />
    </div>
  );
}
