import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Frontend Engineer',
    company: 'Enterprise Technology Solutions',
    period: '2022 - Present',
    current: true,
    achievements: [
      'Led React migration increasing performance by 40%',
      'Architected scalable component library used by 5+ teams',
      'Mentored junior developers and established code review standards',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
    ],
    tech: ['React', 'TypeScript', 'Next.js', 'TailwindCSS'],
  },
  {
    title: 'Frontend Developer',
    company: 'FinTech Innovations',
    period: '2020 - 2022',
    current: false,
    achievements: [
      'Built real-time trading dashboard handling 10k+ updates/sec',
      'Reduced bundle size by 35% through code splitting',
      'Integrated Stripe payments processing $2M+ monthly',
      'Achieved 98% test coverage with Jest and React Testing Library',
    ],
    tech: ['React', 'Redux', 'D3.js', 'WebSocket'],
  },
  {
    title: 'Web Developer',
    company: 'Digital Agency Studio',
    period: '2018 - 2020',
    current: false,
    achievements: [
      'Delivered 20+ client projects from concept to launch',
      'Developed responsive websites with 99% cross-browser compatibility',
      'Optimized page load times achieving 90+ Lighthouse scores',
      'Collaborated with designers to implement pixel-perfect UIs',
    ],
    tech: ['JavaScript', 'React', 'SCSS', 'WordPress'],
  },
];

export function Experience() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">
            {t('experience.title')}
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 * index }}
                  className={`relative mb-12 md:w-1/2 print-avoid-break ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`hidden md:block absolute top-0 w-4 h-4 rounded-full border-4 border-background ${
                    exp.current ? 'bg-accent' : 'bg-muted-foreground'
                  } ${index % 2 === 0 ? '-right-2' : '-left-2'}`} />

                  <div className="bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-colors">
                    {/* Header */}
                    <div className={`flex items-start gap-3 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                        <h3 className="font-semibold text-foreground text-lg">{exp.title}</h3>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                      {exp.current && (
                        <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                          {t('experience.present')}
                        </span>
                      )}
                    </div>

                    {/* Achievements */}
                    <div className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded text-xs font-medium bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}