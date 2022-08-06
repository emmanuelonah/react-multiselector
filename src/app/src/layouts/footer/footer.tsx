import * as React from 'react';
import styled from 'styled-components';

const FooterNode = styled.footer`
  background-color: ${(props) => props.theme.colors.white};
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  text-align: center;
  padding: 1rem;
  color: #666;
  border-top: solid 1px #d1cfcf;
  font-size: 0.8rem;
`;

type PrimitiveFooterPropTypes = React.ComponentPropsWithoutRef<'footer'>;
type FooterElement = React.ElementRef<'footer'>;
interface FooterPropTypes extends PrimitiveFooterPropTypes {}

export const Footer = React.forwardRef<FooterElement, FooterPropTypes>(function Footer(props, forwardedRef) {
  return (
    <FooterNode {...props} ref={forwardedRef} data-testid="footer">
      &copy;
      <time>2022 - {new Date().getFullYear()}, </time>
      AfricLite. All rights reserved.
    </FooterNode>
  );
});
