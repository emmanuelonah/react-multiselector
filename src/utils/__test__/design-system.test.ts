import { STORYBOOK_TITLES } from '..';

describe('design-system', () => {
  it('should confirm that STORYBOOK_TITLES utils yields appropriate result', () => {
    expect(STORYBOOK_TITLES.components('Accordion')).toEqual('components/Accordion');
    expect(STORYBOOK_TITLES.hooks('useForceUpdate')).toEqual('hooks/useForceUpdate');
    expect(STORYBOOK_TITLES.packages('Multiselector')).toEqual('packages/Multiselector');
    expect(STORYBOOK_TITLES.utils('composeEvents')).toEqual('utils/composeEvents');
    expect(STORYBOOK_TITLES.styles('cssNormalizr')).toEqual('styles/cssNormalizr');
  });
});
