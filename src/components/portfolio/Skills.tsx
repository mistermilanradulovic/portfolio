import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    key: 'languages',
    skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    key: 'frameworks',
    skills: ['React', 'Next.js', 'Vite', 'React Native'],
  },
  {
    key: 'stateData',
    skills: ['Redux', 'Zustand', 'React Query', 'Context API', 'REST APIs', 'GraphQL'],
  },
  {
    key: 'styling',
    skills: ['Tailwind CSS', 'Bootstrap', 'Styled Components', 'CSS Modules', 'Sass', 'Framer Motion'],
  },
  {
    key: 'monitoring',
    skills: ['Sentry', 'Stripe', 'Firebase', 'Analytics', 'A/B Testing'],
  },
  {
    key: 'tooling',
    skills: ['Git', 'GitHub', 'JIRA', 'CI/CD', 'Jest', 'Testing Library', 'Storybook', 'Webpack', 'ESLint', 'Prettier'],
  },
];

export function Skills() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">
            {t('skills.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
                className="bg-card rounded-2xl p-6 border border-border print-avoid-break"
              >
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                  {t(`skills.categories.${category.key}`)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* React highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-2xl">⚛️</span>
              <span className="text-foreground font-medium">
                Primary Focus: <span className="text-accent font-semibold">React Ecosystem</span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}