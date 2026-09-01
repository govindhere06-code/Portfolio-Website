import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';

interface Project {
  title: string;
  period: string;
  stack: string[];
  bullets: string[];
  link?: { label: string; href: string };
}

const projects: Project[] = [
  {
    title: 'HybridRAG',
    period: 'Aug 2026 – Present',
    stack: ['Python', 'FastAPI', 'Supabase', 'PostgreSQL', 'pgvector', 'BM25', 'Cross-Encoder'],
    bullets: [
      'Built a hybrid RAG pipeline combining dense semantic and sparse BM25 retrieval using Reciprocal Rank Fusion (RRF) and cross-encoder reranking.',
      'Created an evaluation harness with 30–50 exact-term and paraphrase queries benchmarking dense-only, sparse-only, hybrid, and hybrid+reranked retrieval using Recall@k and MRR.',
      'Documented evaluation results and failure cases for reproducibility.',
    ],
  },
  {
    title: 'DineWise',
    period: 'Jan – Mar 2026',
    stack: ['Python', 'Node.js', 'Express.js', 'HTML/CSS/JS', 'Web Scraping', 'Google Places API'],
    bullets: [
      'Unified restaurant discovery platform for India aggregating live data from multiple sources.',
      'Integrated Google Places API for ratings, reviews, and map links.',
      'Built custom Swiggy/Zomato scrapers to supplement API data.',
      'Vanilla HTML/CSS/JS frontend backed by Node.js + Express.js server. Deployed on Vercel.',
    ],
    link: { label: 'Live Demo', href: '#' },
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0.25, 0.4, 0, 1] },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6" aria-label="Projects">
      <div className="max-w-3xl mx-auto">
        <SectionHeading number="01" title="Projects" />

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={i}
              className="group rounded-xl border border-border bg-bg-card p-6 md:p-8
                hover:border-accent/30 hover:bg-bg-card-hover transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                <h3 className="text-lg font-semibold text-text group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-text-dim shrink-0">{project.period}</span>
              </div>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-text-muted border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bullets */}
              <ul className="space-y-2 mb-5">
                {project.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-text-muted leading-relaxed">
                    <span className="text-accent mt-1 shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* Link */}
              {project.link && (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-accent hover:underline underline-offset-4"
                >
                  <ExternalLink size={14} />
                  {project.link.label}
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
