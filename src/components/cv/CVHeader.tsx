import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export function CVHeader() {
  const { t } = useTranslation();

  return (
    <header className="flex gap-6 mb-6">
      {/* Photo */}
      <div className="shrink-0">
        <div className="w-24 h-24 rounded-lg bg-secondary border border-border overflow-hidden flex items-center justify-center">
          <img 
            src="/placeholder.svg" 
            alt="Milan Radulovic"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h1 className="text-2xl font-bold text-foreground mb-0.5">
          Milan Radulovic
        </h1>
        <p className="text-primary font-semibold text-base mb-2">
          {t('hero.title')} • {t('hero.subtitle')}
        </p>
        
        {/* Contact row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <a href="mailto:work.milanradulovic@gmail.com" className="flex items-center gap-1 hover:text-primary">
            <Mail className="h-3 w-3" />
            work.milanradulovic@gmail.com
          </a>
          <a href="tel:+381612345678" className="flex items-center gap-1 hover:text-primary">
            <Phone className="h-3 w-3" />
            061 234 5678
          </a>
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            Beograd, Srbija
          </span>
          <a href="https://www.linkedin.com/in/milan-radulovic/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary">
            <Linkedin className="h-3 w-3" />
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}