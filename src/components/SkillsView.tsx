import { motion } from 'motion/react';
import { SKILLS_CODE_IMAGE, SKILLS_FIGMA_IMAGE } from '../data';
import { Code, PenTool, Wrench, CheckCircle2, Figma, Cpu, GitBranch, Layers, ArrowRight, Download } from 'lucide-react';

interface SkillsViewProps {
  onNavigate?: (tab: string) => void;
}

export default function SkillsView({ onNavigate }: SkillsViewProps) {
  return (
    <div id="skills-view" className="space-y-16 pb-24 pt-24 text-left">
      {/* Page Header */}
      <section id="skills-header" className="max-w-6xl mx-auto px-6 text-left space-y-4">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
          Technical <span className="text-brand-light dark:text-brand-bright">Mastery.</span>
        </h1>
        <p className="text-sm sm:text-base text-muted max-w-2xl leading-relaxed font-sans">
          A multidisciplinary approach to building digital products, combining performant engineering with precision design systems.
        </p>
      </section>

      {/* Main Grid: Frontend & UI/UX */}
      <section id="skills-core-grid" className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8" aria-label="Core Technical Capabilities">
        {/* Frontend Development Card */}
        <div className="lg:col-span-7 border border-border bg-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full space-y-8 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5 text-brand-light dark:text-brand-bright" aria-hidden="true">
              <Code className="w-5 h-5" />
              <h3 className="font-display font-semibold text-lg text-foreground">Frontend Development</h3>
            </div>
            {/* Standard accessible reader header */}
            <h2 className="sr-only">Frontend Development</h2>
            <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
              Engineering scalable, accessible, and performant user interfaces using modern frameworks and utility-first styling. Focused on clean architecture and smooth state management.
            </p>
            
            {/* Tag List */}
            <div className="flex flex-wrap gap-2 pt-2" role="group" aria-label="Frontend Tech Stack">
              {[
                { name: 'React', icon: '⚛️' },
                { name: 'TypeScript', icon: '📘' },
                { name: 'State Management', icon: '🔄' },
                { name: 'Performance Optimization', icon: '⚡' },
                { name: 'Frontend Architecture', icon: '🏛️' }
              ].map((tag) => (
                <span 
                  key={tag.name} 
                  className="px-3.5 py-1.5 rounded-full bg-subtle-bg border border-border text-[10px] sm:text-xs text-foreground font-medium tracking-wide flex items-center gap-1.5 shadow-sm"
                >
                  <span className="text-[10px]" aria-hidden="true">{tag.icon}</span>
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* Code Image Visual representation */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-border bg-background">
            <img
              src={SKILLS_CODE_IMAGE}
              alt="Laptop displaying React and TypeScript code on an organized desk with ambient backlighting"
              referrerPolicy="no-referrer"
              loading="lazy"
              width={640}
              height={360}
              className="w-full h-full object-cover dark:opacity-90 dark:hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>

        {/* UI/UX Design Card */}
        <div className="lg:col-span-5 border border-border bg-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full space-y-8 shadow-sm">
          <div className="space-y-6">
            <div className="flex items-center space-x-2.5 text-brand-light dark:text-brand-bright" aria-hidden="true">
              <PenTool className="w-5 h-5" />
              <h3 className="font-display font-semibold text-lg text-foreground">UI/UX Design</h3>
            </div>
            {/* Standard accessible reader header */}
            <h2 className="sr-only">UI/UX Design</h2>
            <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
              Bridging the gap between user needs and technical constraints through evidence-based design.
            </p>
            
            {/* Checklist with brand bright icons */}
            <ul className="space-y-4 pt-2" aria-label="Design Skills Checklist">
              {[
                'Wireframing',
                'Prototyping',
                'Design Systems',
                'User Research'
              ].map((item) => (
                <li key={item} className="flex items-center space-x-3 text-xs sm:text-sm text-foreground font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-light dark:text-brand-bright flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Figma Image Visual representation */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-border bg-background">
            <img
              src={SKILLS_FIGMA_IMAGE}
              alt="Design system interface showing comprehensive UI layouts and interactive wireframes"
              referrerPolicy="no-referrer"
              loading="lazy"
              width={640}
              height={360}
              className="w-full h-full object-cover dark:opacity-90 dark:hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
      </section>

      {/* Bottom Card: Modern Tooling */}
      <section id="skills-tooling" className="max-w-6xl mx-auto px-6" aria-label="Development & Design Tooling">
        <div className="border border-border bg-card rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
          {/* Tooling Information and Badges Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5 text-brand-light dark:text-brand-bright" aria-hidden="true">
              <Wrench className="w-5 h-5" />
              <h3 className="font-display font-semibold text-lg text-foreground">Modern Tooling</h3>
            </div>
            {/* Standard accessible reader header */}
            <h2 className="sr-only">Modern Tooling &amp; AI Environments</h2>
            <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
              Leveraging professional industry standards and cutting-edge AI environments to accelerate workflow and ensure high-quality delivery.
            </p>
          </div>

          {/* 2x2 grid of specific tools (wider layout) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4" role="group" aria-label="Tool list">
            {[
              { name: 'Figma', desc: 'Collaborative UI design & system architecture', icon: Figma },
              { name: 'Adobe Creative Suite', desc: 'Custom asset creation & visual design', icon: Layers },
              { name: 'Git & GitHub', desc: 'Distributed version control & team workflows', icon: GitBranch },
              { name: 'Google AI Studio', desc: 'AI model prototyping & prompt engineering', icon: Cpu }
            ].map((tool) => {
              const IconComponent = tool.icon;
              return (
                <div key={tool.name} className="flex items-start space-x-3.5 p-4 rounded-xl border border-border bg-subtle-bg hover:bg-subtle-bg/80 transition-colors duration-200 shadow-sm">
                  <div className="p-1.5 rounded-lg bg-card border border-border text-brand-light flex-shrink-0 mt-0.5 shadow-sm" aria-hidden="true">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-semibold text-foreground">{tool.name}</h4>
                    <p className="text-[11px] text-muted leading-relaxed font-sans">{tool.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Call-to-Action Section */}
      <section id="skills-cta" className="max-w-6xl mx-auto px-6 text-center space-y-8 pt-12 pb-8">
        <h2 className="font-display font-semibold text-2xl sm:text-3xl text-foreground">
          Ready to build something exceptional?
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.button
            onClick={() => onNavigate?.('projects')}
            whileHover={{ scale: 1.015, y: -1 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="group px-4 py-2.5 rounded-lg bg-foreground hover:bg-foreground/90 text-background text-xs font-semibold tracking-wide flex items-center justify-center space-x-1.5 cursor-pointer shadow-md focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none animate-colors"
          >
            <span>View Portfolio Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </motion.button>
          <motion.a
            href="/resume.pdf"
            download="resume.pdf"
            whileHover={{ scale: 1.015, y: -1 }}
            whileTap={{ scale: 0.985 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="px-4 py-2.5 rounded-lg border border-border bg-card hover:bg-subtle-bg text-foreground/80 hover:text-foreground text-xs font-semibold tracking-wide flex items-center justify-center space-x-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
            aria-label="Download Resume"
          >
            <Download className="w-3.5 h-3.5 text-brand-light" aria-hidden="true" />
            <span>Download Resume</span>
          </motion.a>
        </div>
      </section>
    </div>
  );
}
