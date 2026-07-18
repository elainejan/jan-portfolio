import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';

// Lazy load secondary views for optimal bundle code-splitting
const AboutView = lazy(() => import('./components/AboutView'));
const ExperienceView = lazy(() => import('./components/ExperienceView'));
const SkillsView = lazy(() => import('./components/SkillsView'));
const ProjectsView = lazy(() => import('./components/ProjectsView'));
const ContactView = lazy(() => import('./components/ContactView'));

import { Project } from './types';
import { ArrowUp, Star, Github, Linkedin, Mail } from 'lucide-react';

// Sleek, minimal skeleton loader that matches the dark slate aesthetic and prevents layout shifts
function ViewSkeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24 space-y-12 animate-pulse text-left">
      <div className="space-y-4">
        <div className="h-3 w-28 bg-zinc-900 rounded" />
        <div className="h-10 w-2/3 max-w-lg bg-zinc-900 rounded" />
        <div className="h-4 w-1/2 max-w-md bg-zinc-900 rounded" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
        <div className="h-72 bg-zinc-950/40 rounded-xl border border-zinc-900/80" />
        <div className="h-72 bg-zinc-950/40 rounded-xl border border-zinc-900/80" />
        <div className="h-72 bg-zinc-950/40 rounded-xl border border-zinc-900/80" />
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Premium top-fixed scroll progress indicator hook with Linear-style spring
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    // Reset selected project on tab changes
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectFeaturedProject = (project: Project) => {
    setSelectedProject(project);
    setActiveTab('projects');
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative font-sans selection:bg-brand/20 selection:text-brand-bright transition-colors duration-250">
      {/* Visual background elements: Modern design grids and glowing gradients */}
      <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.25] pointer-events-none" />

      {/* Premium top-fixed scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand via-brand-bright to-brand-solid origin-left z-[100] pointer-events-none"
        style={{ scaleX }}
      />

      {/* Primary Navigation System */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />

      {/* Main Content Render Area with smooth slide/fade animations */}
      <main className="flex-grow pt-16 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <Suspense fallback={<ViewSkeleton />}>
              {activeTab === 'home' && (
                <HomeView
                  onNavigate={setActiveTab}
                  onSelectProject={handleSelectFeaturedProject}
                />
              )}
              {activeTab === 'about' && <AboutView />}
              {activeTab === 'experience' && <ExperienceView />}
              {activeTab === 'skills' && <SkillsView onNavigate={setActiveTab} />}
              {activeTab === 'projects' && (
                <ProjectsView
                  selectedProject={selectedProject}
                  setSelectedProject={setSelectedProject}
                />
              )}
              {activeTab === 'contact' && <ContactView />}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Site Footer */}
      <footer id="main-footer" className="border-t border-border bg-card/60 backdrop-blur-md py-12 relative z-10 transition-colors">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-6 h-6 rounded-md bg-foreground text-background flex items-center justify-center font-display font-bold text-[10px] tracking-wider">
                DF
              </div>
              <span className="font-display font-bold text-xs tracking-widest text-foreground uppercase">
                Design &amp; Code
              </span>
            </div>
            <p className="text-xs text-muted leading-relaxed max-w-xs font-sans">
              Hand-crafted user interfaces designed with strict layouts and engineered with clean TypeScript/React.
            </p>
          </div>

          <div className="md:col-span-4 flex justify-start md:justify-center">
            <div className="flex space-x-5 text-xs text-muted font-mono" role="navigation" aria-label="Footer navigation">
              <button
                onClick={() => setActiveTab('about')}
                className="hover:text-foreground transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none rounded px-1"
                aria-label="View Philosophy and About page"
              >
                Philosophy
              </button>
              <button
                onClick={() => setActiveTab('experience')}
                className="hover:text-foreground transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none rounded px-1"
                aria-label="View Career Timeline page"
              >
                Timeline
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className="hover:text-foreground transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none rounded px-1"
                aria-label="View Projects Case Studies page"
              >
                Case Studies
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className="hover:text-foreground transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none rounded px-1"
                aria-label="View Connect and Contact page"
              >
                Connect
              </button>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col items-start md:items-end space-y-3">
            <div className="flex space-x-3" aria-label="Social profiles">
              <a
                id="footer-github"
                href="https://github.com/elainejan/"
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-2 text-muted hover:text-foreground rounded-lg border border-border hover:border-brand-light bg-card/40 focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                id="footer-linkedin"
                href="https://www.linkedin.com/in/elaine-jan-almario-037b1125b/"
                target="_blank"
                referrerPolicy="no-referrer"
                className="p-2 text-muted hover:text-foreground rounded-lg border border-border hover:border-brand-light bg-card/40 focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="footer-mail"
                href="mailto:elainejan1999@gmail.com"
                className="p-2 text-muted hover:text-foreground rounded-lg border border-border hover:border-brand-light bg-card/40 focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
                aria-label="Email Contact"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="font-mono text-[10px] text-muted/80">
              © {new Date().getFullYear()} Elaine Jan Almario. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Dynamic Back-To-Top Trigger Floating Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="scroll-to-top"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={handleScrollToTop}
            className="fixed bottom-6 right-6 p-2.5 rounded-full border border-border bg-card/90 text-muted hover:text-foreground shadow-2xl backdrop-blur-md hover:border-brand-light transition-all z-40 cursor-pointer active:scale-95 focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
