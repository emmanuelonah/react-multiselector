import * as React from 'react';

import { useComposeRefs } from '@hooks/index';
import { composeEvents } from '@utils/compose-events';
import { MultiSelectorLoader } from './multiselector.__loader__';

type PrimitiveDivTypes = React.ComponentPropsWithoutRef<'div'>;
type MultiSelectorInfiniteScrollerElement = React.ElementRef<'div'>;
interface MultiSelectorInfiniteScrollerPropTypes extends PrimitiveDivTypes {
  isLoading: boolean;
  loaderNode?: React.ReactNode;
  // eslint-disable-next-line no-unused-vars
  onScroll: (event: React.UIEvent<HTMLDivElement>) => void;
  children: React.ReactElement | React.ReactElement[];
}

export const MultiSelectorInfiniteScroller = React.forwardRef<
  MultiSelectorInfiniteScrollerElement,
  MultiSelectorInfiniteScrollerPropTypes
>(function MultiSelectorInfiniteScroller(props, forwardedRef) {
  const { isLoading, loaderNode, onScroll, children } = props;
  const composeContainerRef = useComposeRefs<HTMLDivElement>(forwardedRef, React.useRef<HTMLDivElement>(null));

  function ourScrollHandler(event: React.UIEvent<HTMLDivElement>) {
    console.log('ourScrollHandler', event);
  }

  return (
    <div ref={composeContainerRef} onScroll={composeEvents(ourScrollHandler, onScroll)}>
      {children}
      {loaderNode ?? <MultiSelectorLoader isLoading={isLoading} />}
    </div>
  );
});
