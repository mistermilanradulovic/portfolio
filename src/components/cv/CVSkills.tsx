import { useTranslation } from 'react-i18next';

const skillGroups = [
  {
    key: 'frameworks',
    skills: ['React', 'TypeScript', 'JavaScript', 'Vue', 'Angular', 'Vanilla JS', 'HTML5'],
  },
  {
    key: 'styling',
    skills: ['CSS', 'SCSS', 'Sass', 'Less', 'Bootstrap'],
  },
  {
    key: 'tooling',
    skills: ['Git', 'CI/CD', 'Jest', 'Sentry', 'Webpack', 'JIRA', 'Scrum'],
  },
  {
    key: 'stateData',
    skills: ['Redux', 'Stripe', 'SQL', 'OOP'],
  },
  {
    key: 'design',
    skills: ['Figma', 'Adobe XD', 'Adobe React Spectrum', 'Canva'],
  },
];

export function CVSkills() {
  const { t } = useTranslation();

  return (
    <section className="mb-5">
      <h2 className="cv-section-title">{t('skills.title')}</h2>
      <div className="space-y-2">
        {skillGroups.map((group) => (
          <div key={group.key} className="flex items-start gap-2">
            <span className="cv-item-date w-24 shrink-0 pt-0.5">
              {t(`skills.categories.${group.key}`)}:
            </span>
            <div className="flex flex-wrap gap-1">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}