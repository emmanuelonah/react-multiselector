import { MultiSelectorTag } from './multiselector.__tag__';
import { MultiSelectorMenu } from './multiselector.__menu__';
import { MultiSelectorLabel } from './multiselector.__label__';
import { MultiSelectorImp } from './multiselector.__implementation__';
import { MultiSelectorInfiniteScroller } from './multiselector.__infinitscroller__';

export default {
  Root: MultiSelectorImp,
  Tag: MultiSelectorTag,
  Body: MultiSelectorMenu,
  Label: MultiSelectorLabel,
  InfiniteScroller: MultiSelectorInfiniteScroller,
};
