import { useTranslation } from 'react-i18next';
import { Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const { t } = useTranslation();

  const handlePrint = () => {
    window.print();
  };

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t('footer.copyright')}
          </p>

          <Button
            variant="ghost"
            size="sm"
            onClick={handlePrint}
            className="no-print"
          >
            <Printer className="h-4 w-4 mr-2" />
            {t('footer.print')}
          </Button>
        </div>
      </div>
    </footer>
  );
}