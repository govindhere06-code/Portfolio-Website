import { motion } from 'framer-motion';
import { MapPin, Mail, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/govindhere06-code',
    icon: GithubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/govind-nair-93495032a/',
    icon: LinkedinIcon,
  },
  {
    label: 'Email',
    href: 'mailto:govindhere.06@gmail.com',
    icon: Mail,
  },
  {
    label: 'Resume',
    href: 'https://drive.google.com/file/d/1VM5W3y_Z7NPZYUlEOcPOw193cCjW31h6/view?usp=sharing',
    icon: FileDown,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.1, duration: 0.6, ease: [0.25, 0.4, 0, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid-bg relative min-h-screen flex items-center"
      aria-label="Introduction"
    >
      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-32 lg:py-0">
        {/* Location tag */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="flex items-center gap-2 mb-6"
        >
          <MapPin size={14} className="text-accent" />
          <span className="font-mono text-xs tracking-wider text-text-muted uppercase">
            Mumbai, India
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight mb-6"
        >
          Hi, I'm{' '}
          <span className="text-accent">Govind</span>
          <span className="text-text-dim">.</span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="font-mono text-sm md:text-base text-accent/80 mb-8"
        >
          building at the intersection of AI, open-source &amp; cybersecurity
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="text-base md:text-lg text-text-muted leading-relaxed max-w-xl mb-10"
        >
          Third-year Computer Engineering student at VCET Mumbai. Currently contributing to open-source
          as a selected Contributor&thinsp;/&thinsp;Mentee in GirlScript Summer of Code 2026 under the AI/Agents + Open Source
          tracks. I care about building useful things and writing clean code.
        </motion.p>

        {/* CTA pill buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="flex flex-wrap gap-3"
        >
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-bg-card text-sm text-text-muted
                hover:border-accent/40 hover:text-accent hover:bg-accent-dim
                transition-all duration-300"
            >
              <Icon size={15} className="transition-transform group-hover:scale-110" />
              {label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
