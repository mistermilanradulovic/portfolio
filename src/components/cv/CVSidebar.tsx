import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Linkedin, Code, GraduationCap, Languages, Heart, ExternalLink } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpeg';

const skills = {
  frameworks: ['React', 'TypeScript', 'JavaScript', 'Vue', 'Angular', 'Vanilla JS', 'HTML5'],
  styling: ['CSS', 'SCSS', 'Sass', 'Less', 'Bootstrap'],
  tools: ['Git', 'CI/CD', 'Jest', 'Sentry', 'Webpack', 'JIRA', 'Scrum', 'Wiki'],
  stateData: ['Redux', 'Stripe', 'SQL', 'OOP'],
  design: ['Figma', 'Adobe XD', 'Adobe React Spectrum', 'Canva'],
};

const languageKeys = [
  { nameKey: 'serbian', levelKey: 'native' },
  { nameKey: 'english', levelKey: 'fullProficiency' },
  { nameKey: 'spanish', levelKey: 'fullProficiency' },
  { nameKey: 'portuguese', levelKey: 'fullProficiency' },
];

const interestKeys = ['programming', 'ai', 'uiux', 'aviation', 'languages', 'music'];

export function CVSidebar() {
  const { t } = useTranslation();

  return (
    <aside className="cv-sidebar">
      {/* Photo */}
      <div className="cv-photo animate-fade-in">
        <img
          src={profilePhoto}
          alt="Milan Radulovic"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name & Title */}
      <div className="text-center mb-3 sm:mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <h1 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-1.5 tracking-tight">{t('sidebar.name')}</h1>
        <p className="text-white/70 text-[11px] sm:text-xs font-medium leading-tight">
          {t('hero.title')}
        </p>
      </div>

      {/* Open to Work Status */}
      <div className="mb-4 sm:mb-5 animate-fade-in" style={{ animationDelay: '0.12s' }}>
        <div className="bg-emerald-500/20 border border-emerald-400/30 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-center">
          <p className="text-emerald-300 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider mb-0.5">
            {t('sidebar.openToWork')}
          </p>
          <p className="text-white/70 text-[9px] sm:text-[10px] leading-tight">
            {t('sidebar.workPreference')}
          </p>
        </div>
      </div>

      {/* Contact */}
      <div className="cv-sidebar-section animate-fade-in" style={{ animationDelay: '0.15s' }}>
        <h2 className="cv-sidebar-title">
          <Mail className="h-3 w-3 opacity-60" />
          {t('nav.contact')}
        </h2>
        <div className="space-y-1.5">
          <a href="mailto:mistermilan@icloud.com" className="cv-sidebar-link group">
            <Mail className="h-3.5 w-3.5 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="truncate text-[12px]">mistermilan@icloud.com</span>
          </a>
          <a href="tel:+381677425456" className="cv-sidebar-link group">
            <Phone className="h-3.5 w-3.5 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="text-[12px]">+381 67 742 5456</span>
          </a>
          <div className="cv-sidebar-link">
            <MapPin className="h-3.5 w-3.5 shrink-0 opacity-60" />
            <span className="text-[12px]">{t('contact.location')}</span>
          </div>
          <a href="https://www.linkedin.com/in/milan-radulovic/" target="_blank" rel="noopener noreferrer" className="cv-sidebar-link group">
            <Linkedin className="h-3.5 w-3.5 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="text-[12px]">LinkedIn</span>
            <ExternalLink className="h-2.5 w-2.5 opacity-0 group-hover:opacity-60 transition-opacity ml-auto" />
          </a>
        </div>
      </div>

      {/* Skills with tags */}
      <div className="cv-sidebar-section animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="cv-sidebar-title">
          <Code className="h-3 w-3 opacity-60" />
          {t('skills.title')}
        </h2>
        <div className="space-y-3">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-white/50 mb-2 font-medium">
              {t('skills.categories.frameworks')}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {skills.frameworks.map((skill) => (
                <span key={skill} className="cv-sidebar-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-white/50 mb-2 font-medium">
              {t('skills.categories.styling')}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {skills.styling.map((skill) => (
                <span key={skill} className="cv-sidebar-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-white/50 mb-2 font-medium">
              {t('skills.categories.tooling')}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {skills.tools.map((skill) => (
                <span key={skill} className="cv-sidebar-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-white/50 mb-2 font-medium">
              {t('skills.categories.stateData')}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {skills.stateData.map((skill) => (
                <span key={skill} className="cv-sidebar-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-white/50 mb-2 font-medium">
              {t('sidebar.design')}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {skills.design.map((skill) => (
                <span key={skill} className="cv-sidebar-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Languages */}
      <div className="cv-sidebar-section animate-fade-in" style={{ animationDelay: '0.25s' }}>
        <h2 className="cv-sidebar-title">
          <Languages className="h-3 w-3 opacity-60" />
          {t('languages.title')}
        </h2>
        <div className="space-y-2">
          {languageKeys.map((lang) => (
            <div key={lang.nameKey} className="flex justify-between items-center text-[13px]">
              <span className="text-white/90">{t(`languages.items.${lang.nameKey}`)}</span>
              <span className="text-white/50 text-[11px]">{t(`languages.levels.${lang.levelKey}`)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="cv-sidebar-section animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <h2 className="cv-sidebar-title">
          <GraduationCap className="h-3 w-3 opacity-60" />
          {t('education.title')}
        </h2>
        <p className="text-[13px] text-white/90 font-medium leading-snug mb-1">
          {t('education.degree')}
        </p>
        <p className="text-[11px] text-white/55 leading-snug">
          {t('education.university')}
        </p>
      </div>

      {/* Interests */}
      <div className="cv-sidebar-section animate-fade-in" style={{ animationDelay: '0.35s' }}>
        <h2 className="cv-sidebar-title">
          <Heart className="h-3 w-3 opacity-60" />
          {t('sidebar.interests')}
        </h2>
        <div className="flex flex-wrap gap-1.5">
          {interestKeys.map((interest) => (
            <span key={interest} className="cv-sidebar-tag">{t(`sidebar.interestItems.${interest}`)}</span>
          ))}
        </div>
      </div>
    </aside>
  );
}