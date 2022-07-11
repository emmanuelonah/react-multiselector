import * as React from 'react';

type PrimitiveInputTypes = React.ComponentPropsWithoutRef<'input'>;
type InputElement = React.ElementRef<'input'>;
interface InputPropTypes extends PrimitiveInputTypes {
  labelContent?: string;
}

const Input = React.forwardRef<InputElement, InputPropTypes>(function Input(
  { labelContent, ...restProps },
  forwardedRef
) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const inputId = restProps.id ?? React.useId();

  return (
    <>
      {labelContent && <label htmlFor={inputId}>{labelContent}</label>}
      <input {...restProps} ref={forwardedRef} id={inputId} />
    </>
  );
});

export { Input };
