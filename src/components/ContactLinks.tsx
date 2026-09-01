import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const contactLinks = [
  { label: 'govindhere.06@gmail.com', href: 'mailto:govindhere.06@gmail.com', icon: Mail },
  { label: '+91 9970682394', href: 'tel:+919970682394', icon: Phone },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/govind-nair-93495032a/', icon: LinkedinIcon },
  { label: 'GitHub', href: 'https://github.com/govindhere06-code', icon: GithubIcon },
];

export default function ContactLinks() {
  return (
    <footer id="contact" className="py-24 px-6 border-t border-border" aria-label="Contact">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">Let's Connect</h2>
          <p className="text-text-muted text-sm mb-10 max-w-md mx-auto">
            I'm always open to discussing new projects, internship opportunities, or open-source collaborations.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {contactLinks.map(({ label, href, icon: Icon }) => (
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
          </div>

          {/* Footer credits */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-text-dim">
            <span>Built by Govind Nair · © {new Date().getFullYear()}</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
