import styled from 'styled-components';

const Header = styled.header`
  color: #929191;
  font-size: 0.7rem;
  font-style: italic;
  padding-left: 0.3rem;
`;

type WizardHeaderPropTypes = { title: string; description?: string };

export function WizardHeader(props: WizardHeaderPropTypes) {
  return <Header {...(props.description ? { title: props.description } : {})}>{props.title}</Header>;
}
