import { useTranslation } from 'react-i18next';

const languages = [
  { name: 'Serbian', level: 'native' },
  { name: 'English', level: 'fluent' },
  { name: 'German', level: 'conversational' },
  { name: 'Italian', level: 'conversational' },
];

export function CVLanguages() {
  const { t } = useTranslation();

  return (
    <section>
      <h2 className="cv-section-title">{t('languages.title')}</h2>
      <div className="flex flex-wrap gap-x-6 gap-y-1">
        {languages.map((lang) => (
          <span key={lang.name} className="cv-item-description">
            <span className="font-medium text-foreground">{lang.name}</span>
            <span className="text-muted-foreground"> ({t(`languages.${lang.level}`)})</span>
          </span>
        ))}
      </div>
    </section>
  );
}