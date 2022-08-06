import * as React from 'react';
import styled from 'styled-components';
import { useNavigate, NavigateFunction } from 'react-router-dom';

import { WizardFooter } from '../footer/footer';
import { LeftNavigation } from './components/left-navigation';
import type { StepChildrenTypes, Step } from '../../types/shared-types';

/// UTIL BELOW
/** ******************************************************** */
type CurrentStep = { stepIndex: number; childIndex: number };

function getWizardFooterProps(
  steps: Step[],
  currentChild: StepChildrenTypes,
  updateCurrentStep: (stepIndex: number, childIndex: number) => void,
  navigate: NavigateFunction
) {
  const hasPrevStepIndex = !(currentChild.prevStepIndex < 0);
  const hasPrevChildIndex = !(currentChild.prevChildIndex < 0);
  const prevStep = steps[currentChild.prevStepIndex];

  const hasNextStepIndex = !(currentChild.nextStepIndex < 0);
  const hasNextChildIndex = !(currentChild.nextChildIndex < 0);
  const nextStep = steps[currentChild.nextStepIndex];

  function onNext() {
    updateCurrentStep(currentChild.nextStepIndex, currentChild.nextChildIndex);
    navigate(nextStep.children[currentChild.nextChildIndex].route);
  }

  function onPrev() {
    updateCurrentStep(currentChild.prevStepIndex, currentChild.prevChildIndex);
    navigate(prevStep.children[currentChild.prevChildIndex].route);
  }

  return {
    prev: !hasPrevStepIndex && !hasPrevChildIndex ? undefined : { title: prevStep.title, onPrev },
    next: !hasNextStepIndex && !hasNextChildIndex ? undefined : { title: nextStep.title, onNext },
  };
}

/// COMPONENT BELOW
/** ******************************************************** */
const Main = styled.main``;

const INITIAL_CURRENT_STEP: CurrentStep = { stepIndex: 0, childIndex: 0 };

type WizardBodyPropTypes = { steps: Step[] };

export function WizardBody({ steps }: WizardBodyPropTypes) {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = React.useState<CurrentStep>(INITIAL_CURRENT_STEP);
  const currentChild = steps[currentStep.stepIndex].children[currentStep.childIndex];

  function updateCurrentStep(stepIndex: number, childIndex: number) {
    setCurrentStep({ stepIndex, childIndex });
  }

  return (
    <Main>
      <LeftNavigation steps={steps} onNavigate={updateCurrentStep} />

      <h2 title={currentChild.metaDescription}>{currentChild.title}</h2>
      <currentChild.component />

      <WizardFooter {...getWizardFooterProps(steps, currentChild, updateCurrentStep, navigate)} />
    </Main>
  );
}
