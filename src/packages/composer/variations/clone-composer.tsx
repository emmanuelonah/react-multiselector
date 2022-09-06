import * as React from 'react';

const TESTING_DATA = {
  id: '001',
  name: 'Emmanuel Onah',
  occupation: 'JavaScript Architect',
};

type CloneComposerPropTypes<PropType> = {
  props?: Record<string | number | symbol, PropType>;
  children: React.ReactElement | React.ReactElement[];
};

/** ********************************************************************
 * @CloneComposer
 * a clean pattern for composing components which avoids props drilling
 * @sampleUsage
 *
    ```
            const CompA = (props: any) => {
            console.log('CompA', props);
            return null;
            };

            const CompB = (props: any) => {
            console.log('CompB', props);
            return null;
            };

            function SampleUsage() {
            const props = {
                type: 'High level',
                mode: 'Interpreted',
                language: 'JavaScript',
            };

            return (
                <CloneComposer props={{ ...props }}<any>>
                <CompA />
                <CompB />
                </CloneComposer>
            );
            }

    ```
 **** */
export function CloneComposer<PropTypes>(props: CloneComposerPropTypes<PropTypes>) {
  return (
    <>
      {React.Children.map(props.children, function iterator(child: React.ReactElement) {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...props.props,
            testData: { ...TESTING_DATA },
          } as unknown as Record<string, PropTypes>);
        }

        return child;
      })}
    </>
  );
}
