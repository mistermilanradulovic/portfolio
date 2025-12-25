import { useTranslation } from 'react-i18next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* CTA Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4"
          >
            {t('contact.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8"
          >
            {t('contact.subtitle')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl font-serif text-foreground/90 mb-12"
          >
            {t('contact.cta')}
          </motion.p>

          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
          >
            <a
              href="mailto:work.milanradulovic@gmail.com"
              className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border hover:border-accent/50 transition-all hover:-translate-y-1"
            >
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <Mail className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">{t('contact.email')}</p>
                <p className="font-medium text-foreground">work.milanradulovic@gmail.com</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/milanradulovic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border hover:border-accent/50 transition-all hover:-translate-y-1"
            >
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <Linkedin className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">{t('contact.linkedin')}</p>
                <p className="font-medium text-foreground">linkedin.com/in/milanradulovic</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border">
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <Phone className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">{t('contact.phone')}</p>
                <p className="font-medium text-foreground">061 234 5678</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border">
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">{t('contact.location')}</p>
                <p className="font-medium text-foreground">Beograd, Srbija</p>
              </div>
            </div>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="no-print"
          >
            <Button asChild size="lg" className="min-w-[200px]">
              <a href="mailto:work.milanradulovic@gmail.com">
                <Send className="h-5 w-5 mr-2" />
                {t('contact.email')}
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}