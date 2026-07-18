import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: { id: string; label: string }[];
}

export default function Navbar({ activeTab, setActiveTab, tabs }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-nav-bg backdrop-blur-md border-b border-border py-2.5 shadow-sm'
          : 'bg-transparent py-4'
      }`}
      aria-label="Primary navigation"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Monogram Branding */}
        <button
          id="nav-brand-logo"
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center space-x-2.5 cursor-pointer group rounded-md focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
          aria-label="Design & Code Portfolio Home"
        >
          <div className="w-7 h-7 rounded bg-foreground text-background flex items-center justify-center font-display font-bold text-[11px] tracking-wider transition-all duration-200 group-hover:scale-105 group-hover:shadow-[0_0_12px_rgba(2,89,80,0.2)]">
            EA
          </div>
          <span className="font-display font-medium text-xs tracking-[0.2em] text-foreground/90 group-hover:text-foreground transition-colors uppercase">
            Elaine Jan Almario
          </span>
        </button>

        {/* Desktop Navigation with sliding bubble layoutId */}
        <div className="hidden md:flex items-center space-x-1" role="tablist" aria-label="Navigation Tabs">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                id={`desktop-tab-${tab.id}`}
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`view-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-3.5 py-1.5 rounded-md text-xs font-medium tracking-wide transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none ${
                  isActive ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                {isActive && (
                  <motion.div
                     layoutId="active-tab-bubble"
                     className="absolute inset-0 bg-subtle-bg border border-brand/30 rounded-md -z-10"
                     transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <motion.button
            id="nav-cta-contact"
            onClick={() => setActiveTab('contact')}
            whileHover={{ scale: 1.02, y: -0.5, borderColor: 'var(--color-brand-light)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg border border-border bg-card hover:bg-subtle-bg text-xs font-medium tracking-wide text-foreground/80 hover:text-foreground cursor-pointer hover:shadow-[0_0_15px_rgba(2,89,80,0.15)] focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        {/* Mobile Menu Toggle & Theme Toggle */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground/60 hover:text-foreground transition-colors cursor-pointer rounded-lg border border-border bg-card hover:bg-subtle-bg focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col" role="tablist" aria-label="Mobile Navigation Tabs">
              {tabs.map((tab, idx) => {
                const isActive = activeTab === tab.id;
                return (
                  <motion.button
                    id={`mobile-tab-${tab.id}`}
                    key={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`view-${tab.id}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`py-2 text-left text-sm font-semibold tracking-wider border-b border-border w-full cursor-pointer flex items-center justify-between focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none ${
                      isActive ? 'text-foreground font-bold' : 'text-foreground/60 hover:text-foreground'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        isActive ? 'bg-brand-bright' : 'bg-transparent'
                      }`}
                    />
                  </motion.button>
                );
              })}

              {/* Mobile Socials & CTA */}
              <div className="pt-4 flex items-center justify-between">
                <div className="flex space-x-3">
                  <a
                    id="mobile-nav-github"
                    href="https://github.com/elainejan/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="p-2 text-foreground/60 hover:text-foreground rounded-full border border-border bg-card hover:bg-subtle-bg focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    id="mobile-nav-linkedin"
                    href="https://www.linkedin.com/in/elaine-jan-almario-037b1125b/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="p-2 text-foreground/60 hover:text-foreground rounded-full border border-border bg-card hover:bg-subtle-bg focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    id="mobile-nav-mail"
                    href="mailto:elainejan1999@gmail.com"
                    className="p-2 text-foreground/60 hover:text-foreground rounded-full border border-border bg-card hover:bg-subtle-bg focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
                    aria-label="Email Direct Contact"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
                <button
                  id="mobile-nav-cta"
                  onClick={() => {
                    setActiveTab('contact');
                    setMobileMenuOpen(false);
                  }}
                  className="px-4 py-2 rounded-lg bg-foreground text-background hover:scale-[1.02] text-xs font-semibold active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
