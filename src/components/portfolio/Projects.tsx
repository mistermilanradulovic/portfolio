import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Advanced Web Platform',
    description: 'Enterprise-grade SaaS platform with real-time collaboration, role-based access control, and comprehensive analytics dashboard.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSocket'],
    demo: '#',
    github: '#',
    featured: true,
  },
  {
    title: 'FinTech Dashboard',
    description: 'Real-time financial data visualization with interactive charts, portfolio tracking, and automated reporting features.',
    tech: ['Next.js', 'D3.js', 'TailwindCSS', 'REST API'],
    demo: '#',
    github: '#',
    featured: true,
  },
  {
    title: 'Mobile-Optimized E-Commerce',
    description: 'High-performance PWA with offline support, push notifications, and seamless checkout experience.',
    tech: ['React', 'Redux', 'Stripe', 'Firebase'],
    demo: '#',
    github: '#',
    featured: false,
  },
  {
    title: 'Real-Time Client Portal',
    description: 'Secure client communication platform with video conferencing, document sharing, and task management.',
    tech: ['React', 'WebRTC', 'Socket.io', 'AWS'],
    demo: '#',
    github: '#',
    featured: false,
  },
  {
    title: 'Design System & Component Library',
    description: 'Comprehensive UI component library with accessibility-first approach, theming support, and extensive documentation.',
    tech: ['React', 'Storybook', 'TypeScript', 'Radix UI'],
    demo: '#',
    github: '#',
    featured: false,
  },
  {
    title: 'Analytics & Monitoring Tool',
    description: 'Custom analytics solution with user behavior tracking, A/B testing framework, and performance monitoring.',
    tech: ['React', 'Recharts', 'Node.js', 'ClickHouse'],
    demo: '#',
    github: '#',
    featured: false,
  },
];

export function Projects() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">
            {t('projects.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`group relative bg-card rounded-2xl border border-border overflow-hidden card-hover print-avoid-break ${
                  project.featured ? 'md:col-span-1 lg:row-span-1' : ''
                }`}
              >
                {/* Gradient overlay for featured */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium z-10">
                    Featured
                  </div>
                )}

                <div className="p-6">
                  {/* Icon */}
                  <div className="p-3 rounded-xl bg-accent/10 text-accent w-fit mb-4">
                    <Layers className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded text-xs font-medium bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <Button asChild variant="outline" size="sm" className="no-print">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {t('projects.viewDemo')}
                      </a>
                    </Button>
                    <Button asChild variant="ghost" size="sm" className="no-print">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        {t('projects.viewCode')}
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}