import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ROUTES = Object.freeze({
  home: '/',
  fallback: '/fallback',
  documentation: Object.freeze({
    overview: '/docs/overview',
    getStarted: '/docs/get-started',
    basicUsage: '/docs/basic-usage',
  }),
});

/// UTILS BELOW
/** ******************************************************************* */
const LogoWrapper = styled.div``;
const BlueNode = styled.div``;
const GreenNode = styled.div``;
const OrangeNode = styled.div``;

const ELEMENTS = [BlueNode, GreenNode, OrangeNode];
const LOGO_TEXTS = ['R', 'E', 'A', 'C', 'T', ' M', 'U', 'L', 'T', 'I', '-S', 'E', 'L', 'E', 'C', 'T', 'O', 'R'];

function generateLogo() {
  const renderableNode = (
    <LogoWrapper>
      {LOGO_TEXTS.map((node) => {
        const Element = ELEMENTS[Math.random() * ELEMENTS.length - 1];
        return <Element>{node}</Element>;
      })}
      👆
    </LogoWrapper>
  );
  return renderableNode;
}

/// COMPONENT BELOW
/** ******************************************************************* */
const HeaderNode = styled.header``;

type PrimitiveHeaderPropTypes = React.ComponentPropsWithoutRef<'header'>;
type HeaderElement = React.ElementRef<'header'>;
interface HeaderPropTypes extends PrimitiveHeaderPropTypes {}

export const Header = React.forwardRef<HeaderElement, HeaderPropTypes>(function Header(props, forwardedRef) {
  return (
    <HeaderNode {...props} ref={forwardedRef} data-testid="header">
      <nav>
        <section>
          <NavLink to={ROUTES.home}>{generateLogo()}</NavLink>
        </section>
        <section>
          <ul>
            <li>
              <NavLink to={ROUTES.home}>Documentation</NavLink>
            </li>
          </ul>
        </section>
      </nav>
    </HeaderNode>
  );
});
