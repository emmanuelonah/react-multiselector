import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyle } from 'styles';

import { Experiment } from 'packages/multiselector/stories/experiment';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <a href="#main" className="skip-content">
        Skip to main content
      </a>
      <Experiment />
    </ThemeProvider>
  );
}

export default App;
