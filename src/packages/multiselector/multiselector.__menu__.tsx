/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';

import { Input } from 'components';
import { useComposeRefs } from 'hooks';
import { composeClassNames } from 'utils';
import { type SelectedItem, useMultiSelectContext, TYPES } from './multiselector.__implementation__';
import { MultiSelectorLoader } from './multiselector.__loader__';

const checkIsItemSelected = (selectedItems: SelectedItem[], item: SelectedItem) => {
  const index = selectedItems.findIndex((selectedItem) => selectedItem.id === item.id);

  return index >= 0;
};

type PrimitiveDivTypes = React.ComponentPropsWithoutRef<'div'>;
type MultiSelectorMenuElement = React.ElementRef<'div'>;
interface MultiSelectorMenuPropTypes extends Omit<PrimitiveDivTypes, 'children'> {
  isLoading?: boolean;
  searchBarName?: string;
  items: SelectedItem[];
  searchBarPlaceholder?: string;
  withMeta?: boolean;
  searchBarRef?: React.Ref<HTMLInputElement>;
  // eslint-disable-next-line no-unused-vars
  children?: (selectedItems: SelectedItem[]) => React.ReactElement | React.ReactElement[] | React.ReactElement;
}

export const MultiSelectorMenu = React.forwardRef<MultiSelectorMenuElement, MultiSelectorMenuPropTypes>(
  (
    {
      children,
      className,
      isLoading,
      searchBarName,
      searchBarPlaceholder,
      searchBarRef,
      items,
      withMeta,
      ...restProps
    },
    forwardedRef
  ) => {
    const { selectedItems, accessibility, shownItems, dispatch } = useMultiSelectContext();

    // THIS IS USEFUL WHEN THE USER WANTS TO CONTROL THE RENDERING SYSTEM BY TAPPING THE DATA WHILE RENDERING IT TO
    if (typeof children === 'function') return children(items) as React.ReactElement;

    // THIS IS USEFUL WHEN THE USER IS CONSUMING INFINITE DATA USING OUR INFINITE SCROLLER FUNCTIONALITY
    if (React.isValidElement(children)) return React.cloneElement(children, { items });

    const [searchedText, setSearchedText] = React.useState('');
    const ourRef = React.useRef<HTMLInputElement>(null);
    const composeSearchBarRef = useComposeRefs<HTMLInputElement>(searchBarRef!, ourRef);
    const shouldRenderListItems = !!items.length && shownItems;

    return (
      <>
        <Input
          ref={composeSearchBarRef}
          type="search"
          value={searchedText}
          className="multiselector-search-bar"
          placeholder={searchBarPlaceholder ?? 'Search items'}
          {...(searchBarName ? { name: searchBarName } : {})}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (!shownItems) dispatch({ type: TYPES.UPDATE_SHOWN_ITEMS, payload: { shownItems: !shownItems } });

            setSearchedText(event.target.value);
          }}
          onClick={() => dispatch({ type: TYPES.UPDATE_SHOWN_ITEMS, payload: { shownItems: !shownItems } })}
        />
        {shouldRenderListItems && (
          <div
            {...restProps}
            ref={forwardedRef}
            role="listbox"
            tabIndex={-1}
            id={accessibility.menuId}
            aria-labelledby={accessibility.labelId}
            className={composeClassNames('multiselector-listbox', className)}
          >
            {items
              .filter((item) => item.textContent.toLowerCase().includes(searchedText.toLowerCase()))
              .map((item) => {
                const isItemSelected = checkIsItemSelected(selectedItems, item);

                return (
                  <div
                    key={item.id}
                    role="option"
                    className={composeClassNames(
                      'multiselector-listbox__option',
                      isItemSelected ? 'multiselector-listbox__option--selected' : ''
                    )}
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
                    {withMeta && isItemSelected && <span className="with-meta">selected</span>}
                  </div>
                );
              })}

            {isLoading && (
              <span role="alert" aria-live="polite" className="multiselector-listbox__loader">
                <MultiSelectorLoader isLoading={isLoading} />
              </span>
            )}
          </div>
        )}
      </>
    );
  }
);
