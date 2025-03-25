import { useState } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import WelcomeBand from '../components/WelcomeBand';
import ProjectList from '../components/ProjectList';
import CookieConsent from 'react-cookie-consent';
import Fingerprint from '../components/Fingerprint';
import CartSummary from '../components/CartSummary';

function ProjectPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <>
      <div className="container mt-4">
        <CartSummary />
        <WelcomeBand />
        <div className="row">
          <div className="col-md-3">
            <CategoryFilter
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          </div>
          <div className="col-md-9">
            <ProjectList selectedCategories={selectedCategories} />
            <CookieConsent>
              This website uses cookies to enhance the user experience.
            </CookieConsent>
            <Fingerprint />
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default ProjectPage;
