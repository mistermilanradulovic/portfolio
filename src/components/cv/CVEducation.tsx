import { useTranslation } from 'react-i18next';

export function CVEducation() {
  const { t } = useTranslation();

  return (
    <section className="mb-5">
      <h2 className="cv-section-title">{t('education.title')}</h2>
      <div className="flex justify-between items-start">
        <div>
          <span className="cv-item-title">{t('education.degree')}</span>
          <p className="cv-item-subtitle">{t('education.university')}</p>
        </div>
        <span className="cv-item-date">Čačak, Serbia</span>
      </div>
    </section>
  );
}