import { useTranslation } from 'react-i18next';
import { Briefcase, FolderKanban, User, Calendar } from 'lucide-react';

const experiences = [
  {
    titleKey: 'experience.jobs.endava.title',
    companyKey: 'experience.jobs.endava.company',
    periodKey: 'experience.jobs.endava.period',
    achievementKeys: [
      'experience.jobs.endava.achievements.0',
      'experience.jobs.endava.achievements.1',
      'experience.jobs.endava.achievements.2',
      'experience.jobs.endava.achievements.3',
      'experience.jobs.endava.achievements.4',
      'experience.jobs.endava.achievements.5',
    ],
  },
  {
    titleKey: 'experience.jobs.rbt.title',
    companyKey: 'experience.jobs.rbt.company',
    periodKey: 'experience.jobs.rbt.period',
    achievementKeys: [
      'experience.jobs.rbt.achievements.0',
      'experience.jobs.rbt.achievements.1',
      'experience.jobs.rbt.achievements.2',
    ],
  },
];

const projectKeys = [
  'experience.projects.music',
  'experience.projects.esignature',
  'experience.projects.customerSuccess',
  'experience.projects.uno',
  'experience.projects.restaurant',
  'experience.projects.shootingClub',
];

const getYearsOfExperience = () => {
  const startYear = 2018;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

export function CVMain() {
  const { t } = useTranslation();
  const yearsOfExperience = getYearsOfExperience();

  return (
    <main className="cv-main">
      {/* Summary */}
      <section className="mb-5 print:mb-4 animate-fade-in">
        <h2 className="cv-section-title">
          <User className="h-3.5 w-3.5" />
          {t('about.title')}
        </h2>
        <p className="cv-body-text text-muted-foreground">
          {t('about.description', { years: yearsOfExperience })}
        </p>
      </section>

      {/* Experience */}
      <section className="mb-4 sm:mb-5 pt-4 sm:pt-6 print:mb-4 print:pt-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <h2 className="cv-section-title">
          <Briefcase className="h-3 sm:h-3.5 w-3 sm:w-3.5" />
          {t('experience.title')}
          <span className="ml-auto text-[9px] sm:text-[10px] font-medium text-primary/70 bg-primary/10 px-1.5 sm:px-2 py-0.5 rounded-full normal-case tracking-normal">
            {yearsOfExperience}+ {t('experience.yearsLabel')}
          </span>
        </h2>
        <div className="cv-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="cv-timeline-item group">
              <div className="cv-timeline-dot" />
              <div className="mb-1">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-0.5">
                  <span className="font-semibold cv-body-text text-foreground group-hover:text-primary transition-colors">
                    {t(exp.titleKey)}
                  </span>
                  <span className="text-primary cv-body-text font-medium">@ {t(exp.companyKey)}</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground/70">
                  <Calendar className="h-3 w-3" />
                  <span className="cv-small-text">{t(exp.periodKey)}</span>
                </div>
              </div>
              <ul className="cv-small-text text-muted-foreground space-y-0.5 ml-0.5">
                {exp.achievementKeys.map((key, i) => (
                  <li key={i} className="flex gap-2 leading-relaxed">
                    <span className="text-primary/60 shrink-0">•</span>
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="pt-4 sm:pt-6 print:pt-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="cv-section-title">
          <FolderKanban className="h-3 sm:h-3.5 w-3 sm:w-3.5" />
          {t('projects.title')}
        </h2>
        <p className="text-[11px] text-muted-foreground/60 italic mb-3 print:mb-2">
          {t('projects.selectedHighlights')}
        </p>
        <div className="cv-projects-grid">
          {projectKeys.map((key, index) => (
            <div key={index} className="cv-project-item group">
              <div className="cv-project-name">{t(`${key}.name`)}</div>
              <div className="cv-project-desc">{t(`${key}.description`)}</div>
              <div className="cv-project-tech">{t(`${key}.tech`)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* References footer */}
      <div className="mt-6 pt-3 border-t border-border/40 animate-fade-in print:mt-3 print:pt-2" style={{ animationDelay: '0.3s' }}>
        <p className="text-[11px] text-muted-foreground/50 text-center italic">
          {t('footer.referencesAvailable')}
        </p>
      </div>
    </main>
  );
}