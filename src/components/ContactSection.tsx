import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Calendar, CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: 'Graduate Admissions',
    message: '',
  });

  const [tourDate, setTourDate] = useState('2026-11-17');
  const [tourTime, setTourTime] = useState('10:00 AM');
  const [tourBooked, setTourBooked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // Keep state submitted
    }, 500);
  };

  const handleBookTour = (e: React.FormEvent) => {
    e.preventDefault();
    setTourBooked(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B4332]/8 text-xs font-semibold text-[#1B4332] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F]" />
            <span>Connect & Inquire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-serif">
            Contact Department & Book Laboratory Visits
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Whether inquiring about degree programs, submitting research proposals, or scheduling a tour of our core genomics suites, our office is here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Lab Visit Scheduler */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Card */}
            <div className="bg-[#F8FAF9] rounded-3xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2 font-serif">
                <span>Department Directory</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#1B4332] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Physical Address</span>
                    <span>Hall of Biomedical Sciences, 850 Pasteur Way</span>
                    <span className="block text-slate-500 text-xs">Medical Science Quadrangle, Suite 401</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#1B4332] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Department Telephone</span>
                    <a href="tel:+15553928800" className="text-[#1B4332] hover:underline font-mono">
                      +1 (555) 392-8800
                    </a>
                    <span className="block text-slate-500 text-xs">Admissions Ext: 8810 · Core Labs Ext: 8820</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#1B4332] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Official Inquiries</span>
                    <a href="mailto:biomed.admissions@university.edu" className="text-[#1B4332] hover:underline">
                      biomed.admissions@university.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#1B4332] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Administrative Hours</span>
                    <span>Monday – Friday: 8:30 AM – 5:00 PM (EST)</span>
                    <span className="block text-slate-500 text-xs">Closed weekends and academic holidays</span>
                  </div>
                </div>
              </div>

              {/* Safety notice */}
              <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center gap-3 text-xs text-amber-800 bg-amber-50/80 p-3 rounded-xl border border-amber-200/60">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  Emergency BSL-3 Safety Protocol Line: <strong>+1 (555) 392-8899</strong> (24/7)
                </span>
              </div>
            </div>

            {/* Guided Lab Visit Scheduler */}
            <div className="bg-[#143D2B] text-white rounded-3xl p-6 sm:p-8 shadow-lg border border-white/10">
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-300 block mb-1">
                Guided Tours
              </span>
              <h3 className="text-xl font-bold font-serif mb-2 text-white">
                Schedule a Laboratory Facility Tour
              </h3>
              <p className="text-xs text-emerald-100/80 mb-4 leading-relaxed">
                Tours are held every Tuesday & Thursday. Visit our genomics sequencer suites, 3D bio-printing labs, and cell culture cleanrooms.
              </p>

              {tourBooked ? (
                <div className="p-4 rounded-2xl bg-white/10 border border-white/20 text-center animate-in fade-in">
                  <CheckCircle2 className="w-8 h-8 text-emerald-300 mx-auto mb-2" />
                  <h4 className="text-sm font-bold text-white">Laboratory Tour Scheduled!</h4>
                  <p className="text-xs text-emerald-100/90 mt-1">
                    Confirmed for {tourDate} at {tourTime}. Your visitor entry pass has been emailed.
                  </p>
                  <button
                    onClick={() => setTourBooked(false)}
                    className="mt-3 text-xs text-emerald-300 underline cursor-pointer"
                  >
                    Change reservation
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookTour} className="space-y-3">
                  <div>
                    <label className="text-[11px] uppercase font-bold tracking-wider text-emerald-200 block mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={tourDate}
                      onChange={(e) => setTourDate(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-[11px] uppercase font-bold tracking-wider text-emerald-200 block mb-1">
                      Tour Session
                    </label>
                    <select
                      value={tourTime}
                      onChange={(e) => setTourTime(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    >
                      <option value="10:00 AM" className="bg-[#143D2B] text-white">Morning Run: 10:00 AM – 11:30 AM</option>
                      <option value="2:00 PM" className="bg-[#143D2B] text-white">Afternoon Run: 2:00 PM – 3:30 PM</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-xl bg-white text-[#143D2B] hover:bg-emerald-50 text-xs font-bold transition-colors cursor-pointer shadow-sm mt-2"
                  >
                    Confirm Guided Lab Tour
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Department Inquiries Form */}
          <div className="lg:col-span-7 bg-[#F8FAF9] rounded-3xl p-8 sm:p-10 border border-slate-200">
            <h3 className="text-2xl font-bold font-serif text-slate-900 mb-2">
              Send an Academic or Research Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-8">
              Our academic advising team and laboratory directors review messages promptly and reply within 1–2 business days.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-white border border-emerald-200 text-center animate-in zoom-in-95 duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#1B4332] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-[#2D6A4F]" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">
                  Inquiry Dispatched Successfully
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto mb-6">
                  Thank you, <strong>{formState.name || 'Scholar'}</strong>. Your inquiry regarding <strong>{formState.purpose}</strong> has been assigned tracking ID #BM-{Math.floor(100000 + Math.random() * 900000)}.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormState({
                      name: '',
                      email: '',
                      phone: '',
                      purpose: 'Graduate Admissions',
                      message: '',
                    });
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#1B4332] text-white text-xs font-bold hover:bg-[#12372A]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Dr. Kwame Mensah"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. scholar@university.edu"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Contact Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Purpose of Inquiry *
                    </label>
                    <select
                      value={formState.purpose}
                      onChange={(e) => setFormState({ ...formState, purpose: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                    >
                      <option value="Graduate Admissions">Graduate Program Admissions (PhD / MSc)</option>
                      <option value="Clinical Collaboration">Research & Clinical Trial Collaboration</option>
                      <option value="Core Facilities">Core Equipment Access (Cryo-EM, Sequencing)</option>
                      <option value="Postdoctoral Fellowships">Postdoctoral Fellowship Inquiries</option>
                      <option value="General Question">General Department Inquiries</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Your Message / Research Intent *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly state your academic background, research field of interest, or questions for our faculty officers..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1B4332]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#1B4332] hover:bg-[#12372A] text-white text-xs font-bold transition-all shadow-md hover:shadow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry to Department</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
