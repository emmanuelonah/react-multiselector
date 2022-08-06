import * as React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;

  & button {
    border: 0;
    background-color: transparent;
    color: rgb(30, 144, 255);
    font-weight: 500;
  }
`;

type WizardFooterPropTypes = {
  prev?: { title: string; onPrev: React.MouseEventHandler };
  next?: { title: string; onNext: React.MouseEventHandler };
};

export function WizardFooter({ prev, next }: WizardFooterPropTypes) {
  return (
    <Footer>
      {prev && (
        <button type="button" onClick={prev?.onPrev}>
          Back
        </button>
      )}

      {next && (
        <button type="button" onClick={next.onNext}>
          Next
        </button>
      )}
    </Footer>
  );
}
