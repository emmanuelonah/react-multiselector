import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ErrorBoundary } from 'app/src/layouts';
import { DocumentationPage, FallbackPage } from 'app/src/pages';

const ROUTES = Object.freeze({
  home: '/',
  fallback: '/fallback',
  documentation: Object.freeze({
    overview: '/docs/overview',
    getStarted: '/docs/get-started',
    basicUsage: '/docs/basic-usage',
  }),
});

function Router() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.home} element={<DocumentationPage />} />
          <Route path="/docs/:subViewPathname" element={<DocumentationPage />} />
          <Route path="*" element={<FallbackPage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export { ROUTES, Router };
