import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  FolderKanban,
  Briefcase,
  User,
  Menu,
  X,
} from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'about', label: 'About', icon: User },
];

function LiveClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-mono text-xs text-text-muted tracking-wider">
      {time} IST
    </span>
  );
}

export default function Sidebar() {
  const [active, setActive] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((n) => document.getElementById(n.id));
      let current = 'hero';
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) current = section.id;
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const sidebarContent = (
    <>
      {/* Identity block */}
      <div className="flex flex-col items-center text-center gap-3 mb-8">
        <div className="w-20 h-20 rounded-2xl bg-bg-card border border-border overflow-hidden">
          <img
            src="/avatar.jpg"
            alt="Govind Nair"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-sm font-semibold text-text">Govind Nair</h1>
          <p className="text-xs text-text-muted mt-0.5 leading-snug">
            Computer Engineering<br />Undergraduate
          </p>
        </div>
      </div>

      {/* Status pill */}
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-dim border border-accent/20 mb-2">
        <span className="status-dot w-2 h-2 rounded-full bg-accent shrink-0" />
        <span className="text-[11px] font-mono text-accent whitespace-nowrap">
          Open to opportunities
        </span>
      </div>

      {/* Live clock */}
      <div className="mb-8">
        <LiveClock />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 w-full" aria-label="Main navigation">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`group flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200 cursor-pointer w-full text-left
              ${
                active === id
                  ? 'bg-accent-dim text-accent font-medium'
                  : 'text-text-muted hover:text-text hover:bg-white/[0.03]'
              }`}
            aria-current={active === id ? 'page' : undefined}
          >
            <Icon
              size={16}
              className={`shrink-0 transition-colors ${
                active === id ? 'text-accent' : 'text-text-dim group-hover:text-text-muted'
              }`}
            />
            {label}
          </button>
        ))}
      </nav>
    </>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-[260px] flex-col items-center py-10 px-5 bg-bg-sidebar border-r border-border z-40">
        {sidebarContent}
      </aside>

      {/* Mobile top bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-bg-sidebar/90 backdrop-blur-xl border-b border-border z-50 flex items-center justify-between px-4">
        <span className="font-semibold text-sm text-text">Govind Nair</span>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-9 h-9 flex items-center justify-center rounded-lg bg-bg-card border border-border text-text-muted hover:text-text transition-colors"
          aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {/* Mobile slide-over */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/60 z-40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 24, stiffness: 240 }}
              className="lg:hidden fixed top-0 left-0 bottom-0 w-[260px] bg-bg-sidebar border-r border-border z-50 flex flex-col items-center py-10 px-5"
            >
              {sidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
