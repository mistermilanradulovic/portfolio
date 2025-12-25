import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Globe, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'pt', label: 'PT' },
  { code: 'de', label: 'DE' },
  { code: 'it', label: 'IT' },
  { code: 'sr', label: 'SR' },
  { code: 'sr-Cyrl', label: 'СР' },
];

export function CVControls() {
  const { i18n } = useTranslation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.add('theme-transition');
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark', newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 200);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-3 sm:bottom-4 sm:left-auto sm:right-4 sm:translate-x-0 sm:top-4 sm:bottom-auto flex items-center justify-center gap-1 sm:gap-1.5 no-print z-50 bg-background/95 backdrop-blur-md rounded-full px-2 sm:px-3 py-1.5 sm:py-2 border border-border/50 shadow-lg shadow-foreground/5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-6 sm:h-7 px-1.5 sm:px-2 rounded-full text-[10px] sm:text-xs font-medium hover:bg-muted">
            <Globe className="h-3 sm:h-3.5 w-3 sm:w-3.5 mr-0.5 sm:mr-1" />
            <span className="hidden xs:inline">{i18n.language.toUpperCase()}</span>
            <span className="xs:hidden">{i18n.language.substring(0, 2).toUpperCase()}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-[80px]">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => i18n.changeLanguage(lang.code)}
              className={cn('cursor-pointer text-xs', i18n.language === lang.code && 'bg-primary/10 text-primary font-medium')}
            >
              {lang.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant="ghost" size="sm" onClick={toggleTheme} className="h-6 sm:h-7 w-6 sm:w-7 p-0 rounded-full hover:bg-muted">
        {isDark ? <Sun className="h-3 sm:h-3.5 w-3 sm:w-3.5" /> : <Moon className="h-3 sm:h-3.5 w-3 sm:w-3.5" />}
      </Button>

      <Button variant="default" size="sm" onClick={handlePrint} className="h-6 sm:h-7 text-[10px] sm:text-xs rounded-full px-2 sm:px-3">
        <Printer className="h-3 sm:h-3.5 w-3 sm:w-3.5 mr-0.5 sm:mr-1" />
        <span className="hidden xs:inline">PDF</span>
        <span className="xs:hidden">⬇</span>
      </Button>
    </div>
  );
}