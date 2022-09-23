import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header, ErrorBoundary, Footer } from 'app/src/layouts';
import { DocumentationPage, FallbackPage } from 'app/src/pages';

const ROUTES = Object.freeze({
  home: '/',
  fallback: '/fallback',
  documentation: Object.freeze({
    overview: (stepIndex: number, childIndex: number) => `/docs/overview/${stepIndex}/${childIndex}`,
    getStarted: (stepIndex: number, childIndex: number) => `/docs/get-started/${stepIndex}/${childIndex}`,
    basicUsage: (stepIndex: number, childIndex: number) => `/docs/basic-usage/${stepIndex}/${childIndex}`,
  }),
});

function Router() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={ROUTES.home} element={<DocumentationPage />} />
          <Route path="/docs/:subViewPathname/:stepIndex/:childIndex" element={<DocumentationPage />} />
          <Route path="*" element={<FallbackPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export { ROUTES, Router };
