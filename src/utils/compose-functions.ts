/* eslint-disable no-unused-vars */
import { __DEV__, __TEST__ } from './env';

export function composeFunctions(...fns: ((...args: any[]) => any)[]) {
  return function enclosedEventHandler(...args: any[]) {
    return fns.forEach((fn: (...args: any[]) => any) => fn(...args));
  };
}

if (__TEST__ || __DEV__) {
  const onClick = composeFunctions(
    (event, hello) => console.log(`FN 1 ${JSON.stringify(event)}`, hello),
    (event) => console.log(`FN 2 ${JSON.stringify(event)}`),
    (event) => console.log(`FN 3 ${JSON.stringify(event)}`),
    (event) => console.log(`FN 4${JSON.stringify(event)}`)
  );

  onClick({ event: 'click', value: 'Emmanuel Onah' }, 'Hello');
}
