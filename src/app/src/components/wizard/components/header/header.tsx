import styled from 'styled-components';

const Header = styled.header``;

type WizardHeaderPropTypes = { title: string; description?: string };

export function WizardHeader(props: WizardHeaderPropTypes) {
  return <Header {...(props.description ? { title: props.description } : {})}>{props.title}</Header>;
}
