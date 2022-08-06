import { Wizard } from 'app/src/components';

import { config } from './config/index';

export default function Documentation() {
  return (
    <Wizard title="Documentation" metaDescription="Documentation on how to use react multi-selector" steps={config} />
  );
}
