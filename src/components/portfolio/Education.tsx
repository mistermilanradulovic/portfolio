import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin } from 'lucide-react';

export function Education() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-20 md:py-32">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center">
            {t('education.title')}
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-colors print-avoid-break"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-xl bg-accent/10 text-accent shrink-0">
                <GraduationCap className="h-8 w-8" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {t('education.university')}
                </h3>
                <p className="text-accent font-medium mb-3">
                  {t('education.degree')}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Čačak, Serbia</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Languages Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
              {t('languages.title')}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { lang: 'Serbian', level: 'native', flag: '🇷🇸' },
                { lang: 'English', level: 'fluent', flag: '🇬🇧' },
                { lang: 'German', level: 'conversational', flag: '🇩🇪' },
                { lang: 'Italian', level: 'conversational', flag: '🇮🇹' },
              ].map((item, index) => (
                <motion.div
                  key={item.lang}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="bg-card rounded-xl p-4 border border-border text-center hover:border-accent/30 transition-colors"
                >
                  <span className="text-3xl mb-2 block">{item.flag}</span>
                  <p className="font-medium text-foreground">{item.lang}</p>
                  <p className="text-sm text-muted-foreground capitalize">
                    {t(`languages.${item.level}`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}