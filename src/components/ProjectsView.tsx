import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { ArrowRight, X, ExternalLink } from 'lucide-react';

interface ProjectsViewProps {
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
}

export default function ProjectsView({ selectedProject, setSelectedProject }: ProjectsViewProps) {
  const [filter, setFilter] = useState<'all' | 'design' | 'development' | 'hybrid'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const categories: { id: 'all' | 'design' | 'development' | 'hybrid'; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'design', label: 'Design' },
    { id: 'development', label: 'Development' },
    { id: 'hybrid', label: 'Hybrid' }
  ];

  return (
    <div id="projects-view" className="space-y-16 pb-16 pt-24 text-left">
      {/* Page Header */}
      <section id="projects-header" className="max-w-7xl mx-auto px-6 space-y-4">
        <span className="font-mono text-[10px] text-muted font-medium tracking-[0.2em] uppercase">My Portfolio</span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground max-w-3xl leading-tight">
          Selected case studies bridging design and front-end execution.
        </h1>
      </section>

      {/* Category Filters */}
      <section id="projects-filters" className="max-w-7xl mx-auto px-6 flex flex-wrap gap-2 border-b border-border pb-5" role="tablist" aria-label="Project category filters">
        {categories.map((cat) => {
          const isActive = filter === cat.id;
          return (
            <motion.button
              id={`filter-btn-${cat.id}`}
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setFilter(cat.id)}
              whileHover={{ scale: 1.02, y: -0.5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none transition-all ${
                isActive
                  ? 'bg-foreground text-background shadow-sm'
                  : 'border border-border hover:border-brand-light/30 text-muted hover:text-foreground bg-card'
              }`}
            >
              {cat.label}
            </motion.button>
          );
        })}
      </section>

      {/* Projects Grid List */}
      <section id="projects-grid" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 800px' }} className="max-w-7xl mx-auto px-6" aria-label="Projects list">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                id={`project-card-${project.id}`}
                key={project.id}
                tabIndex={0}
                role="button"
                aria-label={`View Case Specs for ${project.title}. Category: ${project.category}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                whileHover={{ y: -5, borderColor: 'var(--color-brand-light)' }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                className="group border border-border bg-card/40 hover:bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-250 cursor-pointer flex flex-col h-full focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
              >
                {/* Showcase Image Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-card border-b border-border">
                  <img
                    id={`project-thumb-${project.id}`}
                    src={project.image}
                    alt={`Case Study Image: ${project.title}`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    width={500}
                    height={312}
                    className="w-full h-full object-cover dark:grayscale dark:opacity-90 dark:group-hover:opacity-100 dark:group-hover:scale-101 transition-all duration-550"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 rounded bg-card/95 backdrop-blur-md border border-border text-[9px] font-mono tracking-wider text-foreground font-semibold uppercase">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Details Container */}
                <div className="p-5 flex flex-col flex-grow space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="font-display font-semibold text-base text-foreground group-hover:text-brand-light dark:group-hover:text-brand-bright transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Skills tags embedded */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-subtle-bg border border-border text-[9px] font-mono text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions CTA pinned */}
                  <div className="pt-4 mt-auto border-t border-border flex items-center justify-between text-xs font-medium text-muted group-hover:text-foreground transition-colors">
                    <span>Explore Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-muted" aria-hidden="true" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Case Study Detailed Overlay Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <div id="project-detail-drawer" className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-labelledby="drawer-title">
            {/* Backdrop layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Panel slider */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="relative w-full max-w-xl h-full bg-card border-l border-border p-6 overflow-y-auto flex flex-col space-y-8 z-10 text-left"
            >
              {/* Header section inside drawer */}
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center space-x-2.5">
                  <span className="px-2.5 py-0.5 rounded bg-subtle-bg border border-border text-[9px] font-mono text-foreground font-semibold uppercase">
                    Case Specs
                  </span>
                  <span className="text-[10px] font-mono text-muted capitalize">
                    {selectedProject.category} category
                  </span>
                </div>
                <button
                  id="close-drawer-btn"
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg border border-border hover:border-brand-light/30 text-muted hover:text-foreground bg-subtle-bg transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
                  aria-label="Close Case Specs Dialog"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Title & Headline image */}
              <div className="space-y-4">
                <h2 id="drawer-title" className="font-display font-semibold text-2xl sm:text-3xl text-foreground">
                  {selectedProject.title}
                </h2>
                <div className="aspect-[16/10] w-full rounded-xl overflow-hidden border border-border bg-background p-1">
                  <img
                    id="drawer-large-img"
                    src={selectedProject.image}
                    alt={`Expanded showcase mockup for ${selectedProject.title}`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    width={540}
                    height={338}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Description Paragraphs */}
              <div className="space-y-4 font-sans text-xs sm:text-sm text-muted leading-relaxed">
                <p>{selectedProject.longDescription || selectedProject.description}</p>
              </div>

              {/* Spec Metrics panel if exist */}
              {selectedProject.metrics && (
                <div className="grid grid-cols-3 gap-4 p-4 rounded-xl border border-border bg-subtle-bg" aria-label="Case stats and metrics">
                  {selectedProject.metrics.map((m) => (
                    <div key={m.label} className="text-center space-y-1">
                      <p className="font-mono text-[9px] text-muted uppercase tracking-widest">{m.label}</p>
                      <p className="font-display font-bold text-sm text-foreground">{m.value}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack used */}
              <div className="space-y-3">
                <h3 className="font-display font-semibold text-[10px] text-foreground tracking-wider uppercase">Applied Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-subtle-bg border border-border text-xs font-sans text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons in footer */}
              <div className="pt-6 border-t border-border mt-auto flex items-center space-x-4">
                <a
                  id="drawer-live-btn"
                  href="https://example.com"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex-1 py-2.5 px-4 rounded-lg bg-foreground hover:bg-foreground/90 text-background text-xs font-semibold tracking-wide transition-colors text-center flex items-center justify-center space-x-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
                  aria-label={`Launch live demo for ${selectedProject.title}`}
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
                <button
                  id="drawer-close-bottom"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2.5 rounded-lg border border-border hover:border-brand-light/30 hover:bg-subtle-bg text-foreground/80 text-xs font-medium tracking-wide transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
                >
                  Close Case Specs
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
