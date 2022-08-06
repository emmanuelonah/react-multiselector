import * as React from 'react';
import styled from 'styled-components';

import type { Step } from './types/shared-types';
import { WizardBody } from './components/body/body';
import { WizardHeader } from './components/header/header';

const Container = styled.div``;

type PrimitiveDivTypes = React.ComponentPropsWithoutRef<'div'>;
type WizardElement = React.ElementRef<'div'>;
interface WizardPropTypes extends PrimitiveDivTypes {
  title: string;
  metaDescription?: string;
  steps: Step[];
}

/** *********************************************************************************************************
 * @Wizard
 * @description a Component with a finite state machine that can be used to guide the user through a process.
 * @sampleUsage
 *   ```
        <Wizard
          title="Documentation"
          metaDescription="Documentation on how to use react multi-selector"
          steps={[
            {
              title: 'Documentation',
              metaDescription: 'get a quick grasp on how to use react multi-selector',
              children: [
                {
                  component: Overview,
                  route: ROUTES.documentation.overview,
                  title: 'Overview',
                  metaDescription: 'Get an overview of the configuration options for the wizard.',
                  prevStepIndex: -1, // means none
                  prevChildIndex: -1, // means none
                  nextStepIndex: 0,
                  nextChildIndex: 1,
            }]} />
 *   ```
 *::::************:::: */

export const Wizard = React.forwardRef<WizardElement, WizardPropTypes>(function Wizard(
  { title, metaDescription, steps, ...restProps },
  forwardedRef
) {
  return (
    <Container {...restProps} ref={forwardedRef}>
      <WizardHeader title={title} description={metaDescription} />
      <WizardBody steps={steps} />
    </Container>
  );
});
