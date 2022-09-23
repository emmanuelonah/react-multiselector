import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { STORYBOOK_TITLES } from 'utils';
import { Experiment } from 'app/src/pages/documentation/config/pages/basic-usage/components/experiment';

export default {
  title: STORYBOOK_TITLES.packages('Multiselector'),
  component: Experiment,
} as ComponentMeta<typeof Experiment>;

export const MultiSelector: ComponentStory<typeof Experiment> = () => <Experiment />;
