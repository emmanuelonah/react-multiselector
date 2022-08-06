import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyle } from 'styles';
import { Router } from 'app/src/routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <a href="#main" className="skip-content">
        Skip to main content
      </a>

      <Router />
    </ThemeProvider>
  );
}

export default App;
