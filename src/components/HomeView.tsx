import { motion } from 'motion/react';
import { PROJECTS, TESTIMONIALS, HERO_IMAGE } from '../data';
import { ArrowRight, Code, Layout, Layers, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface HomeViewProps {
  onNavigate: (tab: string) => void;
  onSelectProject: (project: Project) => void;
}

export default function HomeView({ onNavigate, onSelectProject }: HomeViewProps) {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <div id="home-view" className="space-y-28 pb-16">
      {/* Hero Section */}
      <section id="home-hero" className="relative min-h-[85vh] flex items-center pt-20">
        {/* Subtle decorative background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-soft rounded-full blur-[120px] pointer-events-none opacity-40 dark:opacity-20" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-brand-soft rounded-full blur-[100px] pointer-events-none opacity-30 dark:opacity-10" />

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-border bg-card text-[10px] font-mono tracking-[0.15em] text-muted uppercase"
            >
              <Sparkles className="w-3 h-3 text-brand-light" />
              <span>Software Engineer</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter text-foreground leading-[1.05]"
            >
              Engineering web-based investor relations and front-end solutions.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted text-sm sm:text-base max-w-xl leading-relaxed font-sans"
            >
              Hi, I'm Elaine Jan Almario. I'm a Software Engineer experienced in front-end development, specializing in designing user-friendly interfaces, customizing global client tools, and optimizing cross-platform performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <motion.button
                id="hero-cta-works"
                onClick={() => onNavigate('projects')}
                whileHover={{ scale: 1.015, y: -1 }}
                whileTap={{ scale: 0.985 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="group px-4 py-2.5 rounded-lg bg-foreground hover:bg-foreground/90 text-background text-xs font-semibold tracking-wide flex items-center space-x-1.5 shadow-sm cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
                aria-label="View selected design and development projects"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
              <motion.button
                id="hero-cta-about"
                onClick={() => onNavigate('about')}
                whileHover={{ scale: 1.015, y: -1 }}
                whileTap={{ scale: 0.985 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="px-4 py-2.5 rounded-lg border border-border bg-card hover:bg-subtle-bg text-foreground/85 hover:text-foreground text-xs font-semibold tracking-wide cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
                aria-label="Read about design and engineering philosophy"
              >
                Read Philosophy
              </motion.button>
            </motion.div>
          </div>

          {/* Interactive framed portrait representation */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative group max-w-sm sm:max-w-md w-full"
            >
              {/* Outer double frame aesthetic */}
              <div className="absolute inset-0 rounded-2xl bg-foreground/[0.01] blur-md group-hover:blur-xl transition-all duration-500" />
              <div className="relative rounded-2xl border border-border bg-card p-2.5 overflow-hidden shadow-2xl">
                <img
                  id="hero-avatar"
                  src={HERO_IMAGE}
                  alt="Portrait representation of Software Engineer Elaine Jan Almario"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  fetchPriority="high"
                  width={400}
                  height={500}
                  className="w-full aspect-[4/5] object-cover rounded-xl dark:grayscale dark:opacity-90 dark:hover:opacity-100 dark:hover:grayscale-0 transition-all duration-700 hover:scale-[1.01]"
                />
                {/* Embedded status pills in frame margins */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-card/95 backdrop-blur-md border border-border flex items-center justify-between shadow-lg">
                  <div className="text-left">
                    <p className="font-display font-semibold text-xs text-foreground">Based in Manila, PH</p>
                    <p className="font-mono text-[10px] text-brand-light dark:text-brand-bright flex items-center gap-1 mt-1">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" aria-hidden="true" />
                      Available for selective projects
                    </p>
                  </div>
                  <div className="flex -space-x-2" aria-hidden="true">
                    <div className="w-7 h-7 rounded-full border-2 border-background bg-card flex items-center justify-center">
                      <Layout className="w-3 h-3 text-muted" />
                    </div>
                    <div className="w-7 h-7 rounded-full border-2 border-background bg-card flex items-center justify-center">
                      <Code className="w-3 h-3 text-muted" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section id="selected-works" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 600px' }} className="max-w-7xl mx-auto px-6 space-y-12" aria-labelledby="selected-works-heading">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left border-b border-border pb-6">
          <div className="space-y-2">
            <span className="font-mono text-[10px] text-muted font-medium tracking-[0.2em] uppercase">01 / Creative Portfolio</span>
            <h2 id="selected-works-heading" className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Selected Case Studies</h2>
          </div>
          <motion.button
            id="home-all-projects-btn"
            onClick={() => onNavigate('projects')}
            whileHover={{ scale: 1.02, x: 2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="group flex items-center space-x-1.5 text-xs font-medium tracking-wide text-muted hover:text-foreground transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none rounded px-1"
            aria-label="Browse all case studies and projects"
          >
            <span>Browse all work</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, idx) => (
            <motion.div
              id={`featured-card-${project.id}`}
              key={project.id}
              tabIndex={0}
              role="button"
              aria-label={`Explore Case Study: ${project.title}. Category: ${project.category}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -5, borderColor: 'var(--color-brand-light)' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject(project);
                }
              }}
              className="group border border-border bg-card/40 hover:bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-250 cursor-pointer flex flex-col h-full focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-card border-b border-border">
                <img
                  id={`featured-img-${project.id}`}
                  src={project.image}
                  alt={`Case Study Illustration: ${project.title}`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width={500}
                  height={312}
                  className="w-full h-full object-cover dark:grayscale dark:opacity-90 dark:group-hover:opacity-100 dark:group-hover:scale-102 transition-all duration-500"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded bg-card/95 backdrop-blur-md border border-border text-[9px] font-mono tracking-wider text-foreground font-semibold uppercase">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow text-left space-y-4">
                <div className="space-y-1.5">
                  <h3 className="font-display font-semibold text-base text-foreground group-hover:text-brand-light dark:group-hover:text-brand-bright transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-subtle-bg border border-border text-[9px] font-mono text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 mt-auto border-t border-border flex items-center justify-between text-xs font-medium text-muted group-hover:text-foreground transition-colors">
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-muted" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Philosophies (Quick Info Grid) */}
      <section id="core-pillars" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 300px' }} className="bg-subtle-bg border-y border-border py-16" aria-label="Core Philosophies">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="space-y-3">
            <div className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center text-foreground mb-2" aria-hidden="true">
              <Layout className="w-4 h-4 text-brand-light" />
            </div>
            <h3 className="font-display font-semibold text-xs text-foreground uppercase tracking-[0.15em]">Designed with Intent</h3>
            <p className="text-xs text-muted leading-relaxed font-sans">
              No generic layouts or purple templates. Every aspect ratio, font pairing, padding, and subtle margin is hand-crafted to reinforce layout breathing room and visual utility.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center text-foreground mb-2" aria-hidden="true">
              <Code className="w-4 h-4 text-brand-light" />
            </div>
            <h3 className="font-display font-semibold text-xs text-foreground uppercase tracking-[0.15em]">Architectural Honesty</h3>
            <p className="text-xs text-muted leading-relaxed font-sans">
              Every detail matters. I compile lean, performant TypeScript code, leverage standard layouts, prioritize semantic markup, and keep client bundles lightweight.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center text-foreground mb-2" aria-hidden="true">
              <Layers className="w-4 h-4 text-brand-light" />
            </div>
            <h3 className="font-display font-semibold text-xs text-foreground uppercase tracking-[0.15em]">Tactile Interaction</h3>
            <p className="text-xs text-muted leading-relaxed font-sans">
              Using micro-animations to guide cognitive focus. Smooth entry curves, spring-based toggle effects, and fluid tab highlights elevate user experience metrics.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section id="home-testimonials" style={{ contentVisibility: 'auto', containIntrinsicSize: 'auto 400px' }} className="max-w-7xl mx-auto px-6 space-y-12" aria-labelledby="testimonials-heading">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="font-mono text-[10px] text-muted font-medium tracking-[0.2em] uppercase">02 / Collaboration Outcomes</span>
          <h2 id="testimonials-heading" className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Professional Feedback</h2>
          <p className="text-xs text-muted">
            What cross-functional product managers, designers, and executives say about working together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              id={`testimonial-card-${testimonial.id}`}
              key={testimonial.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-xl border border-border bg-card/40 hover:bg-card hover:border-brand-light/30 transition-all flex flex-col justify-between space-y-6 text-left relative shadow-sm"
            >
              <blockquote className="space-y-6 flex flex-col justify-between h-full w-full">
                {/* Subtle top decoration */}
                <span className="font-serif text-5xl text-muted/30 absolute top-2 left-4 select-none" aria-hidden="true">“</span>

                <p className="text-xs text-muted leading-relaxed relative z-10 italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center space-x-3 pt-4 border-t border-border">
                  <img
                    id={`testimonial-avatar-${testimonial.id}`}
                    src={testimonial.image}
                    alt={`Portrait of ${testimonial.name}`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover grayscale border border-border"
                  />
                  <div>
                    <h4 className="font-display font-semibold text-xs text-foreground">{testimonial.name}</h4>
                    <cite className="font-mono text-[9px] text-muted not-italic block mt-0.5">
                      {testimonial.role}, <span className="text-foreground/75 font-sans">{testimonial.company}</span>
                    </cite>
                  </div>
                </div>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
