import * as React from 'react';
import { If } from './if';

type PrimitiveInputTypes = React.ComponentPropsWithoutRef<'input'>;
type InputElement = React.ElementRef<'input'>;
interface InputPropTypes extends PrimitiveInputTypes {
  labelContent?: string;
}

const Input = React.forwardRef<InputElement, InputPropTypes>(function Input(
  { labelContent, ...restProps },
  forwardedRef
) {
  const inputId = React.useId();
  const id = restProps.id ?? inputId;

  return (
    <>
      <If condition={labelContent !== undefined} do={<label htmlFor={id}>{labelContent}</label>} />

      <input {...restProps} ref={forwardedRef} id={id} />
    </>
  );
});

export { Input };
