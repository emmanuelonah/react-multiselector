/* eslint-disable max-len */
import * as React from 'react';

type PrimitiveSvgProps = React.ComponentPropsWithoutRef<'svg'>;
type ArrowElement = React.ElementRef<'svg'>;
interface ArrowPropTypes extends PrimitiveSvgProps {
  isOpen: boolean;
}

export const IconArrow = React.forwardRef<ArrowElement, ArrowPropTypes>(function IconArrow(
  { isOpen, ...restProps },
  forwardedRef
) {
  return isOpen ? (
    <svg
      {...restProps}
      ref={forwardedRef}
      aria-hidden="true"
      className="mgd-icon"
      focusable="false"
      height="8px"
      viewBox="0 0 24 24"
      width="8px"
    >
      <path d="M0.541,5.627L11.666,18.2c0.183,0.207,0.499,0.226,0.706,0.043c0.015-0.014,0.03-0.028,0.043-0.043L23.541,5.627" />
    </svg>
  ) : (
    <svg
      {...restProps}
      ref={forwardedRef}
      aria-hidden="true"
      className="mgd-icon"
      focusable="false"
      height="8px"
      viewBox="0 0 24 24"
      width="8px"
    >
      <path d="M23.535,18.373L12.409,5.8c-0.183-0.207-0.499-0.226-0.706-0.043C11.688,5.77,11.674,5.785,11.66,5.8L0.535,18.373" />
    </svg>
  );
});
