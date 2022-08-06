import { Wizard } from 'app/src/components';

import { config } from './config/index';

export default function Documentation() {
  return (
    <Wizard
      title="Home of React Multi-selector"
      metaDescription="Documentation on how to use react multi-selector. Everything you need to know about the library."
      steps={config}
    />
  );
}
