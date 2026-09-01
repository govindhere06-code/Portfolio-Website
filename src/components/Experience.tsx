import { motion } from 'framer-motion';
import { Calendar, MapPin, GitPullRequest, Code2, BookOpen, Users } from 'lucide-react';
import SectionHeading from './SectionHeading';

const highlights = [
  { icon: GitPullRequest, text: 'Submitting PRs, fixing bugs, implementing feature enhancements' },
  { icon: Users, text: 'Collaborating with maintainers/contributors across async channels; standard OSS code-review workflows' },
  { icon: BookOpen, text: 'Improving documentation and reviewing peer contributions' },
  { icon: Code2, text: 'Selected under the AI/Agents and Open Source tracks' },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6" aria-label="Experience">
      <div className="max-w-3xl mx-auto">
        <SectionHeading number="02" title="Experience" />

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.4, 0, 1] as const }}
          className="relative pl-8 border-l-2 border-accent/20"
        >
          {/* Timeline dot */}
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent/20 border-2 border-accent" />

          <div className="rounded-xl border border-border bg-bg-card p-6 md:p-8 hover:border-accent/30 hover:bg-bg-card-hover transition-all duration-300">
            {/* Role title */}
            <h3 className="text-lg font-semibold text-text mb-1">
              Open Source Contributor / Mentee
            </h3>
            <p className="text-sm text-accent font-medium mb-3">
              GirlScript Summer of Code (GSSoC) 2026
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap gap-4 mb-5">
              <span className="flex items-center gap-1.5 font-mono text-xs text-text-dim">
                <Calendar size={12} className="text-text-dim" />
                May 2026 – Aug 2026
              </span>
              <span className="flex items-center gap-1.5 font-mono text-xs text-text-dim">
                <MapPin size={12} className="text-text-dim" />
                Remote
              </span>
            </div>

            {/* Highlights */}
            <div className="grid gap-3">
              {highlights.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex gap-3 text-sm text-text-muted leading-relaxed"
                >
                  <Icon size={16} className="text-accent/60 shrink-0 mt-0.5" />
                  {text}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
