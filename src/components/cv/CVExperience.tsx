import { useTranslation } from 'react-i18next';

const experiences = [
  {
    title: 'Senior Frontend Engineer',
    company: 'Enterprise Technology Solutions',
    period: '2022 - Present',
    achievements: [
      'Led React migration increasing performance by 40%',
      'Architected scalable component library used by 5+ teams',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'FinTech Innovations',
    period: '2020 - 2022',
    achievements: [
      'Built real-time trading dashboard handling 10k+ updates/sec',
      'Integrated Stripe payments processing $2M+ monthly',
      'Achieved 98% test coverage with Jest and React Testing Library',
    ],
  },
  {
    title: 'Web Developer',
    company: 'Digital Agency Studio',
    period: '2018 - 2020',
    achievements: [
      'Delivered 20+ client projects from concept to launch',
      'Optimized page load times achieving 90+ Lighthouse scores',
    ],
  },
];

export function CVExperience() {
  const { t } = useTranslation();

  return (
    <section className="mb-5">
      <h2 className="cv-section-title">{t('experience.title')}</h2>
      <div className="space-y-3">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex justify-between items-start mb-0.5">
              <div>
                <span className="cv-item-title">{exp.title}</span>
                <span className="text-muted-foreground text-sm"> — </span>
                <span className="cv-item-subtitle">{exp.company}</span>
              </div>
              <span className="cv-item-date shrink-0">{exp.period}</span>
            </div>
            <ul className="cv-item-description list-disc list-inside space-y-0.5 ml-1">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}