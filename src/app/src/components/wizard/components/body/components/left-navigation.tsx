import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { Accordion } from 'app/src/components/accordion/accordion';
import type { StepChildrenTypes } from '../../../types/shared-types';

const Nav = styled.nav``;

type LeftNavigationPropTypes = {
  steps: { title: string; metaDescription?: string; children: StepChildrenTypes[] }[];
  onNavigate(stepIndex: number, childIndex: number): void;
};

export function LeftNavigation(props: LeftNavigationPropTypes) {
  const navigate = useNavigate();

  return (
    <Nav>
      {props.steps.map((step, stepIndex) => (
        <Accordion key={stepIndex.toString()} title={step.title} metaDescription={step.metaDescription} openOnMount>
          <ul>
            {step.children.map((child, childIndex) => (
              <li
                key={childIndex.toString()}
                title={child.metaDescription}
                onClick={() => {
                  props.onNavigate(stepIndex, childIndex);

                  navigate(child.route);
                }}
              >
                {child.title}
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </Nav>
  );
}
