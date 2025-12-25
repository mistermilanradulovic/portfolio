import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowDown, Linkedin, Mail, Github, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const { t } = useTranslation();

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground text-lg mb-4"
          >
            {t('hero.greeting')}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-4"
          >
            {t('hero.name')}
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-serif font-medium gradient-text mb-2"
          >
            {t('hero.title')}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground text-base sm:text-lg mb-6"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-8"
          >
            <MapPin className="h-4 w-4" />
            <span>Beograd, Srbija (CET/CEST)</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-foreground/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10"
          >
            {t('hero.tagline')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Button asChild size="lg" className="min-w-[180px]">
              <a href="#contact">
                {t('hero.cta')}
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handlePrint}
              className="min-w-[180px] no-print"
            >
              {t('hero.downloadCV')}
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href="https://linkedin.com/in/milanradulovic"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:work.milanradulovic@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              aria-label="Send Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 no-print"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}