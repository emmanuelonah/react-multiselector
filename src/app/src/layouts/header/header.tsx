import * as React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ROUTES = Object.freeze({
  home: '/',
  fallback: '/fallback',
  documentation: Object.freeze({
    overview: (stepIndex: number, childIndex: number) => `/docs/overview/${stepIndex}/${childIndex}`,
    getStarted: (stepIndex: number, childIndex: number) => `/docs/get-started/${stepIndex}/${childIndex}`,
    basicUsage: (stepIndex: number, childIndex: number) => `/docs/basic-usage/${stepIndex}/${childIndex}`,
  }),
});

/// UTILS BELOW
/** ******************************************************************* */

const BlueNode = styled.span`
  color: rgb(30, 144, 255);
`;
const GreenNode = styled.span`
  color: green;
`;
const OrangeNode = styled.span`
  color: orange;
`;

const ELEMENTS = [BlueNode, GreenNode, OrangeNode];
const LOGO_TEXTS = ['R', 'E', 'A', 'C', 'T', ' M', 'U', 'L', 'T', 'I', 'S', 'E', 'L', 'E', 'C', 'T', 'O', 'R'];

function generateLogo() {
  return (
    <>
      {LOGO_TEXTS.map((node, index) => {
        const Element = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];
        return <Element key={index.toString()}>{node}</Element>;
      })}
      👆
    </>
  );
}

/// COMPONENT BELOW
/** ******************************************************************* */
const HeaderNode = styled.header`
  margin: 0 auto;
  font-weight: 900;
  border-bottom: solid 1px #d1cfcf;
  padding: 1rem 1rem 0 1rem;
  width: ${(props) => props.theme.pageWidth.width};

  & nav {
    width: ${(props) => props.theme.pageWidth.width};
    max-width: ${(props) => props.theme.pageWidth.maxWidth};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    & section {
      padding-bottom: 1rem;
      &:nth-child(2) {
        border-bottom: solid 2px dodgerblue;
      }
    }
  }
`;

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
