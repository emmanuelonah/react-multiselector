import * as React from 'react';
import styled from 'styled-components';

const Footer = styled.footer``;

type WizardFooterPropTypes = {
  prev?: { title: string; onPrev: React.MouseEventHandler };
  next?: { title: string; onNext: React.MouseEventHandler };
};

export function WizardFooter({ prev, next }: WizardFooterPropTypes) {
  return (
    <Footer>
      {prev && (
        <button type="button" onClick={prev?.onPrev}>
          {prev?.title}
        </button>
      )}

      {next && (
        <button type="button" onClick={next.onNext}>
          {prev?.title}
        </button>
      )}
    </Footer>
  );
}
