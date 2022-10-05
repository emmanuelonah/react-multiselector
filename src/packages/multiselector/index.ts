import { MultiSelectorTag } from './components/multiselector.__tag__';
import { MultiSelectorMenu } from './components/multiselector.__menu__';
import { MultiSelectorLabel } from './components/multiselector.__label__';
import MultiSelectorImp from './components/multiselector.__implementation__';
import { MultiSelectorInfiniteScroller } from './components/multiselector.__infinitscroller__';

export default {
  Root: MultiSelectorImp,
  Tag: MultiSelectorTag,
  Body: MultiSelectorMenu,
  Label: MultiSelectorLabel,
  InfiniteScroller: MultiSelectorInfiniteScroller,
};
