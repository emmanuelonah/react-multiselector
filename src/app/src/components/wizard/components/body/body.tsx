import * as React from 'react';
import styled from 'styled-components';
import { useNavigate, NavigateFunction, useParams } from 'react-router-dom';

import { WizardFooter } from '../footer/footer';
import { Main as MainLayout } from 'app/src/layouts';
import { LeftNavigation } from './components/left-navigation';
import type { StepChildrenTypes, Step, DocumentationRouteParams } from '../../types/shared-types';

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
const Main = styled(MainLayout)`
  display: flex;
  width: ${(props) => props.theme.pageWidth.width};
  max-width: ${(props) => props.theme.pageWidth.maxWidth};
  margin: 5rem auto;
  min-height: 100vh;
  padding-bottom: 2rem;

  // left navigation
  & .main-section1 {
    width: 45%;
    max-width: 300px;
  }

  // main content
  & .main-section2 {
    width: 55%;
    min-width: calc(100% - 300px);
    padding: 1rem;

    & .row-1 {
      width: 100%;
    }
    & .row-2 {
      margin-top: 1rem;
    }
  }
`;

const INITIAL_CURRENT_STEP: CurrentStep = { stepIndex: 0, childIndex: 0 };

type WizardBodyPropTypes = { steps: Step[] };

export function WizardBody({ steps }: WizardBodyPropTypes) {
  const params = useParams<DocumentationRouteParams>();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = React.useState<CurrentStep>(() => {
    if (params.stepIndex && params.childIndex) {
      return { stepIndex: Number(params.stepIndex), childIndex: Number(params.childIndex) };
    }
    return INITIAL_CURRENT_STEP;
  });
  const currentChild = steps[currentStep.stepIndex].children[currentStep.childIndex];

  function updateCurrentStep(stepIndex: number, childIndex: number) {
    setCurrentStep({ stepIndex, childIndex });
  }

  return (
    <Main>
      <section className="main-section1">
        <LeftNavigation steps={steps} onNavigate={updateCurrentStep} />
      </section>

      <section className="main-section2">
        <div className="row-1">
          <h1 title={currentChild.metaDescription}>{currentChild.title}</h1>
          <currentChild.component />
        </div>

        <div className="row-2">
          <WizardFooter {...getWizardFooterProps(steps, currentChild, updateCurrentStep, navigate)} />
        </div>
      </section>
    </Main>
  );
}
