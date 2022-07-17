import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyle } from 'styles';

import { UITest } from 'packages/multiselector/__experiment🧪__/ui.test';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <a href="#main" className="skip-content">
        Skip to main content
      </a>
      <UITest />
    </ThemeProvider>
  );
}

export default App;
