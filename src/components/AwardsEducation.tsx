import { motion } from 'framer-motion';
import { Award, GraduationCap, BookOpen } from 'lucide-react';
import SectionHeading from './SectionHeading';

const awards = [
  {
    icon: Award,
    title: 'Bharatiya Antariksh Hackathon 2026',
    subtitle: 'ISRO National-Level Hackathon — Participant Certificate',
    description:
      'Worked on solar flare forecasting/nowcasting using Aditya-L1 observations as part of Team Murphy\'s Law.',
  },
  {
    icon: BookOpen,
    title: 'The Complete Python Bootcamp',
    subtitle: 'Udemy (2026)',
    description: 'Comprehensive Python course covering fundamentals through advanced topics.',
  },
];

const education = {
  icon: GraduationCap,
  institution: 'Vidyavardhini College of Engineering and Technology',
  degree: 'Bachelor of Engineering — Computer Engineering',
  period: '2024 – 2028',
  coursework: 'Algorithms, Data Structures, Operating Systems, Software Engineering',
};

const cardFade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.25, 0.4, 0, 1] as const },
  }),
};

export default function AwardsEducation() {
  return (
    <section className="py-24 px-6" aria-label="Awards and Education">
      <div className="max-w-3xl mx-auto">
        {/* Awards */}
        <SectionHeading number="04" title="Awards & Certifications" />
        <div className="space-y-4 mb-20">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              variants={cardFade}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={i}
              className="flex gap-4 rounded-xl border border-border bg-bg-card p-5 md:p-6
                hover:border-accent/30 hover:bg-bg-card-hover transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-dim flex items-center justify-center shrink-0">
                <award.icon size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text mb-0.5">{award.title}</h3>
                <p className="font-mono text-[11px] text-accent/70 mb-2">{award.subtitle}</p>
                <p className="text-sm text-text-muted leading-relaxed">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <SectionHeading number="05" title="Education" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.4, 0, 1] as const }}
          className="flex gap-4 rounded-xl border border-border bg-bg-card p-5 md:p-6
            hover:border-accent/30 hover:bg-bg-card-hover transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-lg bg-accent-dim flex items-center justify-center shrink-0">
            <education.icon size={18} className="text-accent" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text mb-0.5">{education.institution}</h3>
            <p className="text-sm text-text-muted mb-1">{education.degree}</p>
            <p className="font-mono text-[11px] text-text-dim mb-2">{education.period}</p>
            <p className="text-sm text-text-muted leading-relaxed">
              <span className="text-text-dim">Core coursework:</span> {education.coursework}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
