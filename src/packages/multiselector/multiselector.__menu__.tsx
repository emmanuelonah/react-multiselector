import * as React from 'react';

import { Input } from 'components';
import { useComposeRefs } from 'hooks';
import { composeClassNames } from 'utils';
import { MultiSelectorLoader } from './multiselector.__loader__';
import { inputAccessibilityKeyHandler, SELECT_ACTIONS, CUSTOM_EVENT_KEYS } from './accessibility.utils';
import { type SelectedItem, useMultiSelectContext, TYPES } from './multiselector.__implementation__';

/// UTILS BELOW
/** ******************************************************************************** */
const checkIsItemFirstToMatchSearchedText = (searchedText: string, filteredItems: SelectedItem[], index: number) => {
  const itemIndex = filteredItems.findIndex((item) =>
    item.textContent.toLowerCase().includes(searchedText.toLowerCase())
  );

  return !!searchedText.length && itemIndex === index;
};

const checkIsItemSelected = (selectedItems: SelectedItem[], item: SelectedItem) => {
  const index = selectedItems.findIndex((selectedItem) => selectedItem.id === item.id);

  return index >= 0;
};

/// COMPONENT BELOW
/** ******************************************************************************** */
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
    const { action, selectedItems, accessibility, shownItems, dispatch } = useMultiSelectContext();

    // THIS IS USEFUL WHEN THE USER WANTS TO CONTROL THE RENDERING SYSTEM BY TAPPING THE DATA WHILE RENDERING IT TO
    if (typeof children === 'function') return children(items) as React.ReactElement;

    // THIS IS USEFUL WHEN THE USER IS CONSUMING INFINITE DATA USING OUR INFINITE SCROLLER FUNCTIONALITY
    if (React.isValidElement(children)) return React.cloneElement(children, { items });

    /* eslint-disable react-hooks/rules-of-hooks */
    const [searchedText, setSearchedText] = React.useState('');
    const ourRef = React.useRef<HTMLInputElement>(null);
    const composeSearchBarRef = useComposeRefs<HTMLInputElement>(searchBarRef!, ourRef);

    const shouldRenderListItems = !!items.length && shownItems;
    const onInputKeydownHandler = inputAccessibilityKeyHandler(dispatch);
    const filteredItems = items.filter((item) => item.textContent.toLowerCase().includes(searchedText.toLowerCase()));
    const shouldVisuallyFocusOnSearchBar = [
      SELECT_ACTIONS.LISTBOX_ENTER,
      SELECT_ACTIONS.LISTBOX_SPACE,
      SELECT_ACTIONS.LISTBOX_ESCAPE,
    ].includes(action);

    return (
      <>
        <Input
          {...(searchBarName ? { name: searchBarName } : {})}
          ref={composeSearchBarRef}
          type="search"
          value={searchedText}
          className={composeClassNames(
            'multiselector-search-bar',
            shouldVisuallyFocusOnSearchBar ? 'multiselector-search-bar--visually-focused' : ''
          )}
          placeholder={searchBarPlaceholder ?? 'Search items'}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (!shownItems) dispatch({ type: TYPES.UPDATE_SHOWN_ITEMS, payload: { shownItems: !shownItems } });

            setSearchedText(event.target.value);

            /// INPUT ACCESSIBILITY
            onInputKeydownHandler({
              ...event,
              key: CUSTOM_EVENT_KEYS.INPUT_PRINTABLE_KEY,
            } as React.KeyboardEvent<HTMLInputElement>);
          }}
          onClick={() => dispatch({ type: TYPES.UPDATE_SHOWN_ITEMS, payload: { shownItems: !shownItems } })}
          onKeyDown={onInputKeydownHandler}
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
            {filteredItems.map((item, index) => {
              const isItemSelected = checkIsItemSelected(selectedItems, item);
              const shouldVisuallyFocusOnFirstItem =
                [SELECT_ACTIONS.INPUT_ARROW_UP, SELECT_ACTIONS.INPUT_HOME].includes(action) && index === 0;
              const shouldVisuallyFocusOnLastItem =
                [SELECT_ACTIONS.INPUT_END].includes(action) && index === filteredItems.length - 1;
              const areYouFirstToMatchSearchedText = checkIsItemFirstToMatchSearchedText(
                searchedText,
                filteredItems,
                index
              );

              /* eslint-disable jsx-a11y/interactive-supports-focus */
              return (
                <div
                  key={item.id}
                  role="option"
                  aria-selected={isItemSelected}
                  className={composeClassNames(
                    'multiselector-listbox__option',
                    isItemSelected ? 'multiselector-listbox__option--selected' : '',
                    shouldVisuallyFocusOnFirstItem || shouldVisuallyFocusOnLastItem || areYouFirstToMatchSearchedText
                      ? 'multiselector-listbox__option--visually-focused'
                      : ''
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
