import { Step } from '../../../components/wizard/types/shared-types';

import Overview from './pages/overview/overview';
import GetStarted from './pages/get-started/get-started';
import BasicUsage from './pages/basic-usage/basic-usage';

const ROUTES = Object.freeze({
  home: '/',
  fallback: '/fallback',
  documentation: Object.freeze({
    overview: '/docs/overview',
    getStarted: '/docs/get-started',
    basicUsage: '/docs/basic-usage',
  }),
});

export const config: Step[] = [
  {
    title: 'Documentation',
    metaDescription: 'get a quick grasp on how to use react multi-selector',
    children: [
      {
        component: Overview,
        route: ROUTES.documentation.overview,
        title: 'Overview',
        metaDescription: 'Get an overview of the configuration options for the wizard.',
        prevStepIndex: -1, // means none
        prevChildIndex: -1, // means none
        nextStepIndex: 0,
        nextChildIndex: 1,
      },
      {
        component: GetStarted,
        route: ROUTES.documentation.getStarted,
        title: 'Get started',
        metaDescription: 'Get started with the react multi-selector.',
        prevStepIndex: 0,
        prevChildIndex: 0,
        nextStepIndex: 0,
        nextChildIndex: 2,
      },
      {
        component: BasicUsage,
        route: ROUTES.documentation.basicUsage,
        title: 'Basic usage',
        metaDescription: 'Test basic usage of the react multi-selector.',
        prevStepIndex: 0,
        prevChildIndex: 1,
        nextStepIndex: -1, // means none
        nextChildIndex: -1, // means none
      },
    ],
  },
];
