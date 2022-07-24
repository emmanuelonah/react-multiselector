import * as React from 'react';

import { composeClassNames } from 'utils';
import { useMultiSelectContext } from './multiselector.__implementation__';

type PrimitiveLabelTypes = React.ComponentPropsWithoutRef<'label'>;
type MultiSelectorLabelElement = React.ElementRef<'label'>;
interface MultiSelectorLabelPropTypes extends PrimitiveLabelTypes {}

export const MultiSelectorLabel = React.forwardRef<MultiSelectorLabelElement, MultiSelectorLabelPropTypes>(
  function MultiSelectorLabel({ htmlFor, className, ...restProps }, forwardedRef) {
    const state = useMultiSelectContext();

    return (
      <label
        {...restProps}
        ref={forwardedRef}
        className={composeClassNames('multiselector-label', className)}
        htmlFor={htmlFor ?? state.accessibility.labelId}
      />
    );
  }
);
