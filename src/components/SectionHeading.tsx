import { motion } from 'framer-motion';

interface Props {
  number: string;
  title: string;
}

export default function SectionHeading({ number, title }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0, 1] }}
      className="flex items-center gap-4 mb-12"
    >
      <span className="font-mono text-xs text-accent">{number}</span>
      <h2 className="text-2xl font-bold text-text">{title}</h2>
      <div className="flex-1 h-px bg-border" />
    </motion.div>
  );
}
