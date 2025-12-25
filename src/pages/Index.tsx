import '@/i18n';
import { CVControls } from '@/components/cv/CVControls';
import { CVSidebar } from '@/components/cv/CVSidebar';
import { CVMain } from '@/components/cv/CVMain';

const Index = () => {
  return (
    <>
      <CVControls />
      <div className="cv-page">
        <div className="cv-two-column">
          <CVSidebar />
          <CVMain />
        </div>
      </div>
    </>
  );
};

export default Index;