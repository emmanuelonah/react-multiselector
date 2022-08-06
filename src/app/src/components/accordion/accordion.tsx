import * as React from 'react';

import { ValueOf } from 'types/global';
import { useBoolean } from 'hooks/useBoolean';
import { AccessibleIcon } from '../../../../components';
import { composeClassNames } from 'utils/compose-classnames';
import { ACCESSIBILITY_KEYS, manageAccordionAccessibility } from './accordion.accessibility.util';

type PrimitiveDivTypes = React.ComponentPropsWithoutRef<'div'>;
type AccordionElement = React.ElementRef<'div'>;
interface AccordionPropTypes extends PrimitiveDivTypes {
  title: string;
  metaDescription?: string;
  openOnMount?: boolean;
  children: React.ReactNode;
}

export const Accordion = React.forwardRef<AccordionElement, AccordionPropTypes>(function Accordion(
  { className, id, title, metaDescription, openOnMount, children, ...restProps },
  forwardedRef
) {
  const $id = React.useId();
  const headingId = React.useId();
  const bodyId = React.useId();
  const [isOpen, { toggle, setToTrue }] = useBoolean(openOnMount);
  const [, setKey] = React.useState<ValueOf<typeof ACCESSIBILITY_KEYS>>(ACCESSIBILITY_KEYS.NONE);

  function dispatch(key: ValueOf<typeof ACCESSIBILITY_KEYS>) {
    setKey(key);
  }

  const onKeydownHandler = manageAccordionAccessibility(dispatch, setToTrue);

  return (
    <div
      {...restProps}
      ref={forwardedRef}
      id={id ?? $id}
      className={composeClassNames('accordion', className)}
      onKeyDown={onKeydownHandler}
    >
      <h3 title={metaDescription}>
        <button
          type="button"
          id={headingId}
          aria-expanded={isOpen}
          aria-controls={bodyId}
          className="accordion-trigger"
          onClick={toggle}
        >
          <span className="accordion-title">
            {title}
            <span className="accordion-icon">
              <AccessibleIcon label={isOpen ? 'Click to close list' : 'Click to open list'}>
                <>👆</>
              </AccessibleIcon>
            </span>
          </span>
        </button>
      </h3>
      <div id={bodyId} role="region" aria-labelledby={headingId} className="accordion-panel">
        {isOpen && children}
      </div>
    </div>
  );
});
