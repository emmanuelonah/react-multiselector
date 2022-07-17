import * as React from 'react';

import { composeClassNames } from 'utils';
import { AccessibleIcon } from 'components';
import { useMultiSelectContext, TYPES } from './multiselector.__implementation__';

type PrimitiveUlTypes = React.ComponentPropsWithoutRef<'ul'>;
type MultiSelectorTagElement = React.ElementRef<'ul'>;
interface MultiSelectorTagPropTypes extends PrimitiveUlTypes {
  cancelIconLabel?: string;
  cancelIcon?: React.ReactElement;
}

export const MultiSelectorTag = React.forwardRef<MultiSelectorTagElement, MultiSelectorTagPropTypes>(
  function MultiSelectorTag({ cancelIconLabel, cancelIcon, className, ...restProps }, forwardedRef) {
    if (restProps.children) delete restProps.children;

    const { selectedItems, dispatch } = useMultiSelectContext();
    const hasSelectedItems = !!selectedItems.length;

    return (
      <>
        {hasSelectedItems && (
          <ul
            {...restProps}
            ref={forwardedRef}
            aria-live="polite"
            aria-atomic="true"
            className={composeClassNames('multiselector-tag', className)}
          >
            {selectedItems.map((item) => (
              <li key={item.id}>
                <section>
                  <span>{item.textContent}</span>
                  <AccessibleIcon label={cancelIconLabel ?? 'Click to remove item from list'}>
                    <span
                      onClick={() => {
                        const copiedSelectedItems = [...selectedItems];
                        const itemIndex = copiedSelectedItems.findIndex((copiedItem) => copiedItem.id === item.id);
                        copiedSelectedItems.splice(itemIndex, 1);
                        dispatch({
                          type: TYPES.UPDATE_SELECTED_ITEMS,
                          payload: { selectedItems: copiedSelectedItems },
                        });
                      }}
                    >
                      {cancelIcon ?? <>&#10005;</>}
                    </span>
                  </AccessibleIcon>
                </section>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
);
