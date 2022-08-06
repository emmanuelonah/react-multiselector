import * as React from 'react';
import styled from 'styled-components';

const FooterNode = styled.footer``;

type PrimitiveFooterPropTypes = React.ComponentPropsWithoutRef<'footer'>;
type FooterElement = React.ElementRef<'footer'>;
interface FooterPropTypes extends PrimitiveFooterPropTypes {}

export const Footer = React.forwardRef<FooterElement, FooterPropTypes>(function Footer(props, forwardedRef) {
  return (
    <FooterNode {...props} ref={forwardedRef} data-testid="footer">
      &copy;&nbsp;
      <time>2022 - {new Date().getFullYear()},</time>
      AfricLite. All rights reserved.
    </FooterNode>
  );
});
