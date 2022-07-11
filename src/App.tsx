import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyle } from '@styles/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <a href="#main" className="skip-content">
        Skip to main content
      </a>
    </ThemeProvider>
  );
}

export default App;
