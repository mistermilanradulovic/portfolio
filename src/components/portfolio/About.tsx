import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Rocket, Gauge, Users, Bug, Lightbulb } from 'lucide-react';

const highlights = [
  { key: 'react', icon: Code2 },
  { key: 'product', icon: Rocket },
  { key: 'performance', icon: Gauge },
  { key: 'agile', icon: Users },
  { key: 'architecture', icon: Bug },
  { key: 'learning', icon: Lightbulb },
];

export function About() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8 text-center">
            {t('about.title')}
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center">
            {t('about.description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/50 transition-colors print-avoid-break"
              >
                <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {t(`about.highlights.${item.key}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}