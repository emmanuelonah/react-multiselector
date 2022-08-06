/* eslint-disable no-unused-vars */
import * as React from 'react';

import { __DEV__ } from 'utils/env';
import { ValueOf } from 'types/global';

export const ACCESSIBILITY_KEYS = Object.freeze({
  NONE: -1,
  SPACE_OR_ENTER: 0,
  TAB: 1,
  SHIFT_TAB: 2,
});

export function manageAccordionAccessibility(
  dispatch: (key: ValueOf<typeof ACCESSIBILITY_KEYS>) => void,
  setToTrue: () => void
) {
  return function onKeydownHandler(ev: React.KeyboardEvent<HTMLElement>) {
    console.log('GBA', ev);
    const key = ev.key;

    if (key === 'SpaceEnter' && ev.target.nodeName === 'H3') {
      setToTrue();
      return dispatch(ACCESSIBILITY_KEYS.SPACE_OR_ENTER);
    }

    if (key === 'Tab') return dispatch(ACCESSIBILITY_KEYS.TAB);

    if (key === 'ShiftTab') return dispatch(ACCESSIBILITY_KEYS.SHIFT_TAB);

    if (__DEV__) console.error('Unhandled action: ', key);
  };
}
