import { motion } from 'motion/react';
import { EXPERIENCES } from '../data';
import { Building, CheckCircle2, Milestone } from 'lucide-react';

export default function ExperienceView() {
  return (
    <div id="experience-view" className="space-y-24 pb-16 pt-24">
      {/* Page Header */}
      <section id="experience-header" className="max-w-7xl mx-auto px-6 text-left space-y-4">
        <span className="font-mono text-[10px] text-muted font-medium tracking-[0.2em] uppercase">Career Timeline</span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground max-w-3xl leading-tight">
          Engineering reliable investor relations tools with clean layout and code quality.
        </h1>
        <p className="text-xs sm:text-sm text-muted max-w-xl leading-relaxed">
          Focused professional experience in front-end development, specializing in investor relations systems, performance optimization, and cross-platform compatibility.
        </p>
      </section>

      {/* Main Experience Grid Timeline */}
      <section id="experience-list" className="max-w-7xl mx-auto px-6 space-y-20 relative" aria-label="Work Experience Timeline">
        {/* Subtle center path line for desktop */}
        <div className="absolute left-1/2 top-4 bottom-4 w-px bg-border/40 -translate-x-1/2 hidden lg:block" />

        {EXPERIENCES.map((exp, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              id={`experience-item-${exp.id}`}
              key={exp.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline dot marker for desktop */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden lg:flex w-8 h-8 rounded-full border border-border bg-background items-center justify-center z-10" aria-hidden="true">
                <Milestone className="w-3.5 h-3.5 text-brand-light" />
              </div>

              {/* Text Card Details */}
              <div
                className={`lg:col-span-6 space-y-6 text-left ${
                  isEven ? 'lg:pr-12' : 'lg:order-2 lg:pl-12'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded bg-subtle-bg border border-border text-[9px] font-mono tracking-wider text-foreground font-semibold uppercase">
                      {exp.period}
                    </span>
                    <span className="text-xs font-mono text-muted flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-brand-light" aria-hidden="true" />
                      {exp.company}
                    </span>
                  </div>

                  <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
                    {exp.role}
                  </h2>
                </div>

                <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                  {exp.description}
                </p>

                <div className="space-y-2.5">
                  <h3 className="font-display font-semibold text-[10px] text-foreground tracking-wider uppercase">Key Achievements</h3>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, aIdx) => (
                      <li key={aIdx} className="flex items-start space-x-2 text-xs text-muted leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-light mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-card border border-border text-[9px] font-mono text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Graphical Portrait Frame */}
              <div
                className={`lg:col-span-6 flex justify-center ${
                  isEven ? 'lg:order-2 lg:pl-12' : 'lg:pr-12'
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.4 }}
                  className="relative group w-full max-w-md aspect-square rounded-xl border border-border bg-card p-2 overflow-hidden shadow-sm hover:border-brand-light/30 transition-all duration-300"
                >
                  <img
                    id={`experience-img-${exp.id}`}
                    src={exp.image}
                    alt={`Visual representation of project work accomplished as ${exp.role} at ${exp.company}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded dark:grayscale dark:opacity-90 dark:group-hover:opacity-100 dark:group-hover:grayscale-0 transition-all duration-700 group-hover:scale-101"
                  />
                  <div className="absolute inset-2 bg-gradient-to-t from-background/90 via-background/40 to-transparent rounded flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-mono text-[10px] text-foreground tracking-wide font-semibold">
                      {exp.role} at {exp.company}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
