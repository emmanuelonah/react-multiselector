/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';

import { Input } from '@components/index';
import { composeClassNames } from '@utils/compose-classnames';
import { SelectedItem, useMultiSelectContext, TYPES } from './multiselector.__implementation__';
import { useComposeRefs } from '@hooks/useComposeRefs';

type PrimitiveDivTypes = React.ComponentPropsWithoutRef<'div'>;
type MultiSelectorMenuElement = React.ElementRef<'div'>;
interface MultiSelectorMenuPropTypes extends Omit<PrimitiveDivTypes, 'children'> {
  isLoading?: boolean;
  // eslint-disable-next-line no-unused-vars
  children?: (selectedItems: SelectedItem[]) => React.ReactElement | React.ReactElement[] | React.ReactElement;
  searchBarPlaceholder?: string;
  searchBarName?: string;
  searchBarRef?: React.Ref<HTMLInputElement>;
}

export const MultiSelectorMenu = React.forwardRef<MultiSelectorMenuElement, MultiSelectorMenuPropTypes>(
  (
    { children, className, isLoading, searchBarName, searchBarPlaceholder, searchBarRef, ...restProps },
    forwardedRef
  ) => {
    const { selectedItems, accessibility, shownItems, dispatch } = useMultiSelectContext();

    // THIS IS USEFUL WHEN THE USER WANTS TO CONTROL THE RENDERING SYSTEM BY TAPPING THE DATA WHILE RENDERING IT TO
    if (typeof children === 'function') return children(selectedItems) as React.ReactElement;

    // THIS IS USEFUL WHEN THE USER IS CONSUMING INFINITE DATA USING OUR INFINITE SCROLLER FUNCTIONALITY
    if (React.isValidElement(children)) return React.cloneElement(children, { selectedItems });

    /** ******************************************************* */
    const [searchedText, setSearchedText] = React.useState('');
    const composeSearchBarRef = useComposeRefs<HTMLInputElement>(searchBarRef!, React.useRef(null));
    const shouldRenderListItems = !!selectedItems.length && shownItems;

    return (
      <>
        <Input
          ref={composeSearchBarRef}
          type="search"
          name={searchBarName}
          placeholder={searchBarPlaceholder ?? 'Search item....'}
          value={searchedText}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchedText(event.target.value)}
        />
        <div
          {...restProps}
          ref={forwardedRef}
          role="listbox"
          tabIndex={-1}
          aria-labelledby={accessibility.labelId}
          className={composeClassNames('combo-menu', className)}
          id={accessibility.menuId}
        >
          {shouldRenderListItems &&
            selectedItems.map((item) => (
              <span
                key={item.id}
                role="option"
                className="combo-menu__option"
                onClick={() => {
                  dispatch({ type: TYPES.UPDATE_ACCESSIBILITY_SELECTED_ITEM, payload: { selectedItem: item } });

                  const copiedSelectedItems = [...selectedItems];
                  const itemIndex = copiedSelectedItems.findIndex((copiedItem) => copiedItem.id === item.id);
                  const isItemAlreadySelected = itemIndex >= 0;

                  if (isItemAlreadySelected) copiedSelectedItems.splice(itemIndex, 1);
                  else copiedSelectedItems.push(item);

                  dispatch({ type: TYPES.UPDATE_SELECTED_ITEMS, payload: { selectedItems: copiedSelectedItems } });
                }}
              >
                {item.textContent}
              </span>
            ))}
          {isLoading && (
            <span role="alert" aria-live="polite" className="combo-menu__loading">
              is loading...
            </span>
          )}
        </div>
      </>
    );
  }
);
