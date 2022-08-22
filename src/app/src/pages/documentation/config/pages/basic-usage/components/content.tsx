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
  padding-bottom: 1.5rem;
  font-weight: 700;
  display: inline-block;

  & .code {
    color: #bd8ce0;
  }

  & .meta-info {
    font-size: 0.8rem;
    font-weight: 500;
    font-style: italic;
    padding-left: 0.2rem;
  }
`;

const Iframe = styled.iframe`
  min-width: 625px;
  max-width: 100%;
  height: 400px;
  background-color: #a9b7c2;
  border-radius: 20px;
  border: solid 1px #959595;
`;

type ContentPropTypes = {
  heading: React.ReactNode;
  playground?: React.ReactNode;
  iframeProps?: React.IframeHTMLAttributes<HTMLIFrameElement>;
};

export function Content(props: ContentPropTypes) {
  return (
    <Section>
      <Accordion title={<Heading>{props.heading}</Heading>}>
        {props.iframeProps && (
          <>
            <Heading>Code snippet</Heading>
            <Iframe sandbox="allow-scripts allow-same-origin" loading="lazy" {...props.iframeProps} />
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
