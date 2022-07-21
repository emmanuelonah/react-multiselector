import * as React from 'react';

import { __DEV__ } from 'utils';
import { TYPES, type ActionType } from './multiselector.__implementation__';

const SELECT_ACTIONS = Object.freeze({
  // BELOW ARE THE INPUT ELEMENT ACTION TYPES
  NONE: -1,
  INPUT_ARROW_DOWN: 0,
  INPUT_ALT_ARROW_DOWN: 1,
  INPUT_ARROW_UP: 2,
  INPUT_ENTER: 3,
  INPUT_SPACE: 4,
  INPUT_HOME: 5,
  INPUT_END: 6,
  INPUT_PRINTABLE_CHARACTERS: 7,
  // BELOW ARE THE LISTBOX ELEMENT ACTION TYPES
  LISTBOX_ENTER: 8,
  LISTBOX_SPACE: 9,
  LISTBOX_TAB: 10,
  LISTBOX_ESCAPE: 11,
  LISTBOX_DOWN_ARROW: 12,
  LISTBOX_UP_ARROW: 13,
  LISTBOX_ALT_UP_ARROW: 14,
  LISTBOX_HOME: 15,
  LISTBOX_END: 16,
  LISTBOX_PAGE_UP: 17,
  LISTBOX_PAGE_DOWN: 18,
  LISTBOX_PRINTABLE_CHARACTERS: 19,
});

function inputAccessibilityKeyHandler(dispatch: React.Dispatch<ActionType>) {
  return function onInputKeydownHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    switch (event.key) {
      case 'ArrowDown': {
        const KEY = event.altKey ? 'INPUT_ALT_ARROW_DOWN' : 'INPUT_ARROW_DOWN';

        dispatch({ type: TYPES.UPDATE_SHOWN_ITEMS, payload: { shownItems: true } });
        dispatch({ type: TYPES.UPDATE_ACTION, payload: { action: SELECT_ACTIONS[KEY] } });
        break;
      }

      case 'ArrowUp':
        dispatch({ type: TYPES.UPDATE_SHOWN_ITEMS, payload: { shownItems: true } });
        dispatch({ type: TYPES.UPDATE_ACTION, payload: { action: SELECT_ACTIONS.INPUT_ARROW_UP } });
        break;

      case 'Enter':
        dispatch({ type: TYPES.UPDATE_SHOWN_ITEMS, payload: { shownItems: true } });
        dispatch({ type: TYPES.UPDATE_ACTION, payload: { action: SELECT_ACTIONS.INPUT_ENTER } });
        break;

      case 'Space':
        dispatch({ type: TYPES.UPDATE_SHOWN_ITEMS, payload: { shownItems: true } });
        dispatch({ type: TYPES.UPDATE_ACTION, payload: { action: SELECT_ACTIONS.INPUT_SPACE } });
        break;

      case 'End':
        dispatch({ type: TYPES.UPDATE_SHOWN_ITEMS, payload: { shownItems: true } });
        dispatch({ type: TYPES.UPDATE_ACTION, payload: { action: SELECT_ACTIONS.INPUT_END } });
        break;

      case 'Home':
        dispatch({ type: TYPES.UPDATE_SHOWN_ITEMS, payload: { shownItems: true } });
        dispatch({ type: TYPES.UPDATE_ACTION, payload: { action: SELECT_ACTIONS.INPUT_HOME } });
        break;

      default: {
        if (__DEV__) console.error('Unhandled action: ', event.key);
        break;
      }
    }
  };
}

function listBoxAccessibilityKeyHandler(dispatch: React.Dispatch<ActionType>) {
  return function onInputKeydownHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    switch (event.key) {
      case 'Enter':
        dispatch({ type: TYPES.UPDATE_SHOWN_ITEMS, payload: { shownItems: false } });
        dispatch({ type: TYPES.UPDATE_ACTION, payload: { action: SELECT_ACTIONS.LISTBOX_ENTER } });
        break;

      case 'Space':
        dispatch({ type: TYPES.UPDATE_SHOWN_ITEMS, payload: { shownItems: false } });
        dispatch({ type: TYPES.UPDATE_ACTION, payload: { action: SELECT_ACTIONS.LISTBOX_SPACE } });
        break;

      case 'Tab':
        dispatch({ type: TYPES.UPDATE_SHOWN_ITEMS, payload: { shownItems: false } });
        dispatch({ type: TYPES.UPDATE_ACTION, payload: { action: SELECT_ACTIONS.LISTBOX_TAB } });
        break;

      case 'Escape':
        dispatch({ type: TYPES.UPDATE_SHOWN_ITEMS, payload: { shownItems: false } });
        dispatch({ type: TYPES.UPDATE_ACTION, payload: { action: SELECT_ACTIONS.LISTBOX_ESCAPE } });
        break;

      default: {
        if (__DEV__) console.error('Unhandled action: ', event.key);
        break;
      }
    }
  };
}

export { inputAccessibilityKeyHandler, listBoxAccessibilityKeyHandler, SELECT_ACTIONS };
