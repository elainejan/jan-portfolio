import { motion } from 'motion/react';
import { ABOUT_HERO_IMAGE } from '../data';
import { Award, Compass, Eye, Cpu, Coffee, Palette, Terminal } from 'lucide-react';

export default function AboutView() {
  const principles = [
    {
      id: "p1",
      icon: Eye,
      title: "Pixel Fidelity",
      description: "Design systems are only as good as their execution. I maintain complete alignment with typography, gutters, and micro-interaction curves.",
      color: "text-foreground bg-card border border-border"
    },
    {
      id: "p2",
      icon: Cpu,
      title: "Engineering Integrity",
      description: "I write modern TypeScript, optimize client bundles, handle rendering paint layers carefully, and build clean responsive components.",
      color: "text-foreground bg-card border border-border"
    },
    {
      id: "p3",
      icon: Compass,
      title: "Contextual Empathy",
      description: "Everything should feel intuitive. I design with fluid transitions and single-path checkouts, placing user effort reduction at the center.",
      color: "text-foreground bg-card border border-border"
    },
    {
      id: "p4",
      icon: Award,
      title: "Uncompromising Quality",
      description: "Craft is not a secondary checkbox. It is the core framework. Every aspect of code and spacing is treated as premium typography.",
      color: "text-foreground bg-card border border-border"
    }
  ];

  const trivia = [
    { label: "Core Expertise", value: "HTML5, CSS3 & JavaScript" },
    { label: "Domain Focus", value: "Investor Relations & SaaS Tools" },
    { label: "Education", value: "BS in Information Technology" },
    { label: "Daily Philosophy", value: "Proactive Problem-Solving" }
  ];

  return (
    <div id="about-view" className="space-y-24 pb-16 pt-24">
      {/* Intro Hero Section */}
      <section id="about-hero" className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
        <div className="lg:col-span-7 space-y-6">
          <span className="font-mono text-[10px] text-muted font-medium tracking-[0.2em] uppercase">About &amp; Philosophy</span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-tight">
            Engineering robust web-based solutions with client-driven excellence.
          </h1>

          <div className="space-y-4 text-xs sm:text-sm text-muted leading-relaxed font-sans">
            <p>
              I am an experienced Software Engineer specializing in front-end development and building secure, performant web-based investor relations tools. I have a strong foundation in HTML, CSS, and JavaScript, with a dedication to crafting user-friendly interfaces that serve global clients with absolute pixel fidelity.
            </p>
            <p>
              Since April 2022, I have been engineering tools at Europe Investors Direct AB Phil, where I specialize in customizing client solutions, optimizing website performance across diverse browsers, and ensuring cross-platform stability. My focus is on writing maintainable, clean code while working alongside cross-functional teams to meet strict milestones and deliver high-quality digital outcomes.
            </p>
            <p>
              I graduated with a Bachelor of Science in Information Technology from the Innovative College of Science &amp; Technology (2018 - 2022). Outside of engineering, I enjoy proactive technical troubleshooting, exploring interactive modern web design patterns, and constantly refining layout grid structures to maximize accessibility.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
            {trivia.map((item) => (
              <div key={item.label} className="space-y-1">
                <p className="font-mono text-[9px] text-muted uppercase tracking-widest">{item.label}</p>
                <p className="font-display font-semibold text-xs text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Portrait Frame */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-sm"
          >
            <div className="absolute inset-0 rounded-2xl bg-foreground/[0.01] blur-xl" />
            <div className="relative rounded-2xl border border-border p-2.5 bg-card shadow-2xl overflow-hidden">
              <img
                id="about-hero-portrait"
                src={ABOUT_HERO_IMAGE}
                alt="Portrait representation of Elaine Jan Almario"
                referrerPolicy="no-referrer"
                loading="lazy"
                width={400}
                height={500}
                className="w-full aspect-[4/5] object-cover rounded-xl dark:grayscale dark:opacity-90 dark:hover:opacity-100 dark:hover:grayscale-0 transition-all duration-500 hover:scale-[1.01]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section id="about-principles" className="max-w-7xl mx-auto px-6 space-y-12" aria-labelledby="about-principles-heading">
        <div className="text-left space-y-2 border-b border-border pb-6">
          <span className="font-mono text-[10px] text-muted font-medium tracking-[0.2em] uppercase">My Core Framework</span>
          <h2 id="about-principles-heading" className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">Guiding Core Principles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                id={`principle-card-${item.id}`}
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 rounded-xl border border-border bg-card/40 hover:bg-card hover:border-brand-light/30 transition-all text-left space-y-4 shadow-sm"
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.color}`}>
                  <IconComponent className="w-4 h-4 text-brand-light" />
                </div>
                <h3 className="font-display font-semibold text-xs text-foreground tracking-wide">{item.title}</h3>
                <p className="text-xs text-muted leading-relaxed font-sans">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Behind the Scenes / Passions */}
      <section id="about-passions" className="bg-subtle-bg border-y border-border py-16" aria-label="Personal passions and creative interests">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="space-y-3">
            <div className="flex items-center space-x-2.5 text-foreground">
              <Terminal className="w-4 h-4 text-brand-light" />
              <h3 className="font-display font-semibold text-[10px] tracking-wider uppercase">Creative Technology</h3>
            </div>
            <p className="text-xs text-muted leading-relaxed font-sans">
              I am highly intrigued by physical calculations inside the browser. Designing interactive canvas layers, custom spring physics, and WebGL particle shaders keeps me inspired.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2.5 text-foreground">
              <Palette className="w-4 h-4 text-brand-light" />
              <h3 className="font-display font-semibold text-[10px] tracking-wider uppercase">Grid Typographic Integrity</h3>
            </div>
            <p className="text-xs text-muted leading-relaxed font-sans">
              I believe text layout is 90% of user interface success. Selecting fonts that communicate a precise aesthetic tone and scaling them gracefully on varied devices is a sacred discipline.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2.5 text-foreground">
              <Coffee className="w-4 h-4 text-brand-light" />
              <h3 className="font-display font-semibold text-[10px] tracking-wider uppercase">Analog Fueling</h3>
            </div>
            <p className="text-xs text-muted leading-relaxed font-sans">
              Brewing coffee is my meditation. The precise measurement of grams, mineral water profiling, heat ratios, and slow extraction is a direct extension of my overall design mindset.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
