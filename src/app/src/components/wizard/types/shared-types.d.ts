import * as React from 'react';

export type StepChildrenTypes = {
  component: React.ComponentType;
  route: string;
  title: string;
  metaDescription?: string;
  prevStepIndex: number;
  prevChildIndex: number;
  nextStepIndex: number;
  nextChildIndex: number;
};

export type Step = {
  title: string;
  metaDescription?: string;
  children: StepChildrenTypes[];
};
