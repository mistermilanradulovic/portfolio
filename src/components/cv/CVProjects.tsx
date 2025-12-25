import { useTranslation } from 'react-i18next';

const projects = [
  {
    name: 'Enterprise SaaS Platform',
    description: 'Real-time collaboration platform with role-based access and analytics dashboard',
    tech: 'React, TypeScript, Node.js, PostgreSQL',
  },
  {
    name: 'FinTech Dashboard',
    description: 'Trading interface with live data visualization and Stripe integration',
    tech: 'Next.js, D3.js, WebSocket, TailwindCSS',
  },
  {
    name: 'Component Library',
    description: 'Accessible UI library with 50+ components and comprehensive Storybook docs',
    tech: 'React, TypeScript, Radix UI, Storybook',
  },
];

export function CVProjects() {
  const { t } = useTranslation();

  return (
    <section className="mb-5">
      <h2 className="cv-section-title">{t('projects.title')}</h2>
      <div className="space-y-2">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="flex items-baseline gap-2">
              <span className="cv-item-title">{project.name}</span>
              <span className="cv-item-description flex-1">— {project.description}</span>
            </div>
            <p className="cv-item-date ml-0">{project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}