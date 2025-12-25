import { useTranslation } from 'react-i18next';

export function CVSummary() {
  const { t } = useTranslation();

  return (
    <section className="mb-5">
      <h2 className="cv-section-title">{t('about.title')}</h2>
      <p className="cv-item-description">
        {t('about.description')}
      </p>
    </section>
  );
}