/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import * as React from 'react';

import { composeClassNames, createContext } from '@utils/index';

// UTILS BELOW
/** ************************************************** */
const SELECT_ACTIONS = Object.freeze({
  NONE: -1,
  CLOSE: 0,
  CLOSE_SELECT: 1,
  FIRST: 2,
  LAST: 3,
  NEXT: 4,
  OPEN: 5,
  PAGE_DOWN: 6,
  PAGE_UP: 7,
  PREVIOUS: 8,
  SELECT: 9,
  TYPE: 10,
});

export type SelectedItem = {
  id: string;
  textContent: string;
  [key: string]: any;
};

type BaseState = {
  shownItems: boolean;
  selectedItems: SelectedItem[];
  action: ValueOf<typeof SELECT_ACTIONS>;
  accessibility: { selectedItem: SelectedItem; labelId: string; comboBoxId: string; menuId: string };
};

// REDUCER BELOW
/** ************************************************** */
enum TYPES {
  UPDATE_ACTION = '@react-multiselector/UPDATE_ACTION',
  UPDATE_SHOWN_ITEMS = '@react-multiselector/UPDATE_SHOWN_ITEMS',
  UPDATE_SELECTED_ITEMS = '@react-multiselector/UPDATE_SELECTED_ITEMS',
  UPDATE_ACCESSIBILITY_SELECTED_ITEM = '@react-multiselector/UPDATE_ACCESSIBILITY_SELECTED_ITEM',
}

interface StateType extends BaseState {}

type ActionType = {
  type: ValueOf<typeof TYPES>;
  payload: Partial<Omit<BaseState, 'accessibility'>> & { selectedItem?: SelectedItem };
};

function multiSelectorReducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case TYPES.UPDATE_ACTION:
      return {
        ...state,
        action: action.payload.action!,
      };
    case TYPES.UPDATE_SHOWN_ITEMS:
      return {
        ...state,
        shownItems: action.payload.shownItems!,
      };
    case TYPES.UPDATE_ACCESSIBILITY_SELECTED_ITEM:
      return {
        ...state,
        accessibility: {
          ...state.accessibility,
          selectedItem: action.payload.selectedItem!,
        },
      };
    case TYPES.UPDATE_SELECTED_ITEMS:
      return { ...state, selectedItems: action.payload.selectedItems! };
    default:
      return state;
  }
}

// COMPONENT BELOW
/** ************************************************** */

interface MultiSelectorContextTypes extends BaseState {
  dispatch: React.Dispatch<ActionType>;
  selectedItems: SelectedItem[];
}

const [Provider, useMultiSelectContext] = createContext<MultiSelectorContextTypes>('MultiSelectorContext');

type PrimitiveDivTypes = React.ComponentPropsWithoutRef<'div'>;
type MultiSelectorElement = React.ElementRef<'div'>;
interface MultiSelectorPropTypes extends Omit<PrimitiveDivTypes, 'id'> {
  shownItems?: boolean;
  selectedItems: SelectedItem[];
}

const MultiSelectorImp = React.forwardRef<MultiSelectorElement, MultiSelectorPropTypes>(function MultiSelectorImp(
  { shownItems, className, selectedItems, ...restProps },
  forwardedRef
) {
  const [state, dispatch] = React.useReducer(multiSelectorReducer, {
    selectedItems,
    action: SELECT_ACTIONS.NONE,
    shownItems: shownItems ?? false,
    accessibility: {
      labelId: React.useId(),
      comboBoxId: React.useId(),
      menuId: React.useId(),
      selectedItem: Object.create(null) as SelectedItem,
    },
  });
  const values = React.useMemo<MultiSelectorContextTypes>(() => ({ ...state, dispatch }), [state]);

  return (
    <Provider value={values}>
      <div
        {...restProps}
        ref={forwardedRef}
        tabIndex={0}
        role="combobox"
        aria-haspopup="listbox"
        aria-labelledby="combo1-label"
        aria-expanded={values.shownItems}
        aria-owns={values.accessibility.menuId}
        aria-controls={values.accessibility.menuId}
        id={values.accessibility.comboBoxId}
        className={composeClassNames('combo-input', className)}
        /* aria-activedescendant={values.accessibility.selectedItem} */
      />
    </Provider>
  );
});

export { useMultiSelectContext, MultiSelectorImp, TYPES };
