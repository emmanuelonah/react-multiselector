import * as React from 'react';

import { useMultiSelectContext } from './multiselector.__implementation__';

type PrimitiveLabelTypes = React.ComponentPropsWithoutRef<'label'>;
type MultiSelectorLabelElement = React.ElementRef<'label'>;
interface MultiSelectorLabelPropTypes extends PrimitiveLabelTypes {}

const MultiSelectorLabel = React.forwardRef<MultiSelectorLabelElement, MultiSelectorLabelPropTypes>(
  function MultiSelectorLabel({ htmlFor, ...restProps }, forwardedRef) {
    const state = useMultiSelectContext();

    return <label {...restProps} ref={forwardedRef} htmlFor={htmlFor ?? state.accessibility.labelId} />;
  }
);

export { MultiSelectorLabel };
