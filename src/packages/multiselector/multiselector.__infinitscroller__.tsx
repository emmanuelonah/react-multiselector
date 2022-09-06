import * as React from 'react';

import { If } from '@components';
import { useComposeRefs } from 'hooks';
import { composeClassNames } from 'utils';
import { MultiSelectorLoader } from './multiselector.__loader__';

type PrimitiveDivTypes = React.ComponentPropsWithoutRef<'div'>;
type MultiSelectorInfiniteScrollerElement = React.ElementRef<'div'>;
interface MultiSelectorInfiniteScrollerPropTypes extends PrimitiveDivTypes {
  isLoading: boolean;
  hasMoreItemsToLoad: boolean;
  loaderNode?: React.ReactNode;
  children: React.ReactElement | React.ReactElement[];
  onScroll: (event: React.UIEvent<HTMLDivElement>) => void;
}

export const MultiSelectorInfiniteScroller = React.forwardRef<
  MultiSelectorInfiniteScrollerElement,
  MultiSelectorInfiniteScrollerPropTypes
>(function MultiSelectorInfiniteScroller(
  { isLoading, loaderNode, children, hasMoreItemsToLoad, className, onScroll, ...restProps },
  forwardedRef
) {
  const composeContainerRef = useComposeRefs<HTMLDivElement>(forwardedRef, React.useRef<HTMLDivElement>(null));

  function onScrollHandler(event: React.UIEvent<HTMLDivElement>) {
    if (!hasMoreItemsToLoad) return;

    const element = event.currentTarget;
    const hasHitBottom = element.scrollHeight - element.scrollTop === element.clientHeight;

    if (hasHitBottom) onScroll(event);
  }

  return (
    <div
      {...restProps}
      ref={composeContainerRef}
      className={composeClassNames('multiselector-infinite-scroller', className)}
      onScroll={onScrollHandler}
    >
      {children}

      <If condition={loaderNode == undefined} do={<MultiSelectorLoader isLoading={isLoading} />} />
    </div>
  );
});
