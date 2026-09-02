import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

interface SkillGroup {
  category: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Programming & Web',
    items: ['Python', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'VS Code'],
  },
  {
    category: 'Areas of Interest',
    items: ['Web Development', 'Artificial Intelligence', 'Cybersecurity'],
  },
  {
    category: 'Soft Skills',
    items: ['Leadership', 'Teamwork', 'Adaptability', 'Problem Solving', 'Decision Making', 'Communication'],
  },
  {
    category: 'Languages',
    items: ['English (Fluent)', 'Hindi (Fluent)'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
};

export default function Skills() {
  return (
    <section id="about" className="py-24 px-6" aria-label="Skills">
      <div className="max-w-3xl mx-auto">
        <SectionHeading number="03" title="Skills & Interests" />

        <div className="space-y-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1, duration: 0.4 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-text-dim mb-3">
                {group.category}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={pillVariants}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-accent-dim border border-accent/20 text-accent
                      hover:border-accent/40 hover:bg-accent-glow transition-all duration-200 cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
