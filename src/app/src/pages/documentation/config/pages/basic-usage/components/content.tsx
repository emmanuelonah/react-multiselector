import * as React from 'react';
import styled from 'styled-components';

import { Accordion } from 'app/src/components';

const Section = styled.section`
  border-top: dashed 1px #707070;
  margin: 1rem 0 2rem 0;
  border-bottom: dashed 1px #707070;

  & .accordion {
    & .accordion__heading {
      font-weight: 900;

      & button {
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
`;

const Heading = styled.span`
  font-size: 1rem;
  color: #000;
  padding: 1rem 0 0.2rem 0;
  font-weight: 700;
  display: inline-block;

  & .code {
    color: #ce9178;
  }

  & .meta-info {
    font-size: 0.8rem;
    font-weight: 500;
    font-style: italic;
    padding-left: 0.2rem;
  }
`;

const Pre = styled.pre`
  background-color: #002240;
  border-radius: 10px;
  color: #ce9178;
  padding: 1rem;
  max-height: 500px;
  overflow: hidden;
  overflow: scroll;
`;

type ContentPropTypes = {
  heading: React.ReactNode;
  playground?: React.ReactNode;
  code: React.ReactNode;
};

export function Content(props: ContentPropTypes) {
  return (
    <Section>
      <Accordion title={<Heading>{props.heading}</Heading>}>
        {props.code && (
          <>
            <Heading>Code snippet</Heading>
            <Pre>
              <code>{props.code}</code>
            </Pre>
          </>
        )}
        {props.playground && (
          <>
            <Heading>Playground</Heading>
            {props.playground}
          </>
        )}
      </Accordion>
    </Section>
  );
}
