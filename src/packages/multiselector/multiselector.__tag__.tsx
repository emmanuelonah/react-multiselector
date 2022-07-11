import * as React from 'react';

import { AccessibleIcon } from '@components/accessible-icon';
import { useMultiSelectContext, TYPES } from './multiselector.__implementation__';

type PrimitiveUlTypes = React.ComponentPropsWithoutRef<'ul'>;
type MultiSelectorTagElement = React.ElementRef<'ul'>;
interface MultiSelectorTagPropTypes extends PrimitiveUlTypes {
  cancelIconLabel?: string;
}

export const MultiSelectorTag = React.forwardRef<MultiSelectorTagElement, MultiSelectorTagPropTypes>(
  function MultiSelectorTag({ cancelIconLabel, ...restProps }, forwardedRef) {
    if (restProps.children) delete restProps.children;

    const { selectedItems, dispatch } = useMultiSelectContext();
    const hasSelectedItems = !!selectedItems.length;

    return (
      <React.Fragment>
        {hasSelectedItems && (
          <ul {...restProps} ref={forwardedRef} aria-live="polite" aria-atomic="true">
            {selectedItems.map((item) => (
              <li key={item.id}>
                <section>
                  <span>{item.textContent}</span>
                  <AccessibleIcon
                    label={cancelIconLabel ?? 'Click to remove item from list'}
                    onClick={() => {
                      const copiedSelectedItems = [...selectedItems];
                      const itemIndex = copiedSelectedItems.findIndex((copiedItem) => copiedItem.id === item.id);
                      copiedSelectedItems.splice(itemIndex, 1);
                      dispatch({ type: TYPES.UPDATE_SELECTED_ITEMS, payload: { selectedItems: copiedSelectedItems } });
                    }}
                  >
                    <>&#10005;</>
                  </AccessibleIcon>
                </section>
              </li>
            ))}
          </ul>
        )}
      </React.Fragment>
    );
  }
);
