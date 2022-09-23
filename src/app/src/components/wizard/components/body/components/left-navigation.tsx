import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import { Accordion } from 'app/src/components/accordion/accordion';
import type { StepChildrenTypes } from '../../../types/shared-types';

const Nav = styled.nav`
  /************************************************************
   * Accordion is a reusable component, we are styling it in
   * its "place" of consumption because we are treating our 
   * reusable components as a library with variants styles
   * decided by the consumer
   *****/
  & .accordion {
    & .accordion__heading {
      font-weight: 900;

      & button {
        font-size: 1.1rem;
        font-weight: 700;
        background-color: transparent;
        border: none;
        border: 0; // for IE

        & .accordion-icon {
          padding-right: 0.5rem;

          & .mgd-icon {
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 1;
            text-align: center;
          }
        }
      }
    }
  }

  width: 100%;

  & ul {
    color: #333;
    padding-left: 1rem;
    margin-top: 0.5rem;
    font-size: 1rem;

    & li {
      padding-bottom: 0.5rem;
      cursor: pointer;

      &.active {
        color: rgb(30, 144, 255) !important;
      }

      &:hover {
        color: #929191;
      }
    }
  }
`;

type LeftNavigationPropTypes = {
  steps: { title: string; metaDescription?: string; children: StepChildrenTypes[] }[];
  onNavigate(stepIndex: number, childIndex: number): void;
};

export function LeftNavigation(props: LeftNavigationPropTypes) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Nav>
      {props.steps.map((step, stepIndex) => (
        <Accordion key={stepIndex.toString()} title={step.title} metaDescription={step.metaDescription} openOnMount>
          <ul>
            {step.children.map((child, childIndex) => (
              <li
                key={childIndex.toString()}
                title={child.metaDescription}
                className={location.pathname === child.route ? 'active' : ''}
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
