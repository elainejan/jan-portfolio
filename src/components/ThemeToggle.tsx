import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Monitor, ChevronDown } from 'lucide-react';
import { useTheme, Theme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const options: { value: Theme; label: string; icon: typeof Sun }[] = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ];

  const getActiveIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-4 h-4 text-amber-500 dark:text-amber-400" />;
      case 'dark':
        return <Moon className="w-4 h-4 text-brand-bright" />;
      default:
        return resolvedTheme === 'dark' ? (
          <Moon className="w-4 h-4 text-zinc-400" />
        ) : (
          <Sun className="w-4 h-4 text-zinc-400" />
        );
    }
  };

  return (
    <div className="relative inline-block text-left" ref={containerRef} id="theme-toggle-container">
      <button
        id="theme-menu-button"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Switch theme (current: ${theme})`}
        className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg border border-border bg-card hover:bg-subtle-bg text-foreground/80 hover:text-foreground text-xs font-medium tracking-wide transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:outline-none"
      >
        <span className="flex items-center justify-center">{getActiveIcon()}</span>
        <span className="capitalize text-[11px] font-mono">{theme}</span>
        <ChevronDown className={`w-3 h-3 text-foreground/50 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            role="listbox"
            aria-label="Theme options"
            className="absolute right-0 mt-1.5 w-32 origin-top-right rounded-lg border border-border bg-card p-1 shadow-lg ring-1 ring-black/5 focus:outline-none z-50"
          >
            {options.map((opt) => {
              const Icon = opt.icon;
              const isSelected = theme === opt.value;
              return (
                <li key={opt.value} role="option" aria-selected={isSelected}>
                  <button
                    type="button"
                    onClick={() => {
                      setTheme(opt.value);
                      setIsOpen(false);
                    }}
                    className={`flex w-full items-center space-x-2 rounded-md px-2.5 py-1.5 text-left text-xs font-medium tracking-wide transition-colors cursor-pointer focus-visible:bg-subtle-bg focus-visible:outline-none ${
                      isSelected
                        ? 'bg-brand/10 text-brand-bright dark:text-brand-bright font-semibold'
                        : 'text-foreground/70 hover:bg-subtle-bg hover:text-foreground'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-brand-bright' : 'text-foreground/40'}`} />
                    <span>{opt.label}</span>
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
