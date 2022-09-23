import * as React from 'react';

const TESTING_DATA = {
  id: '001',
  name: 'Emmanuel Onah',
  occupation: 'JavaScript Architect',
};

type RenderPropsComposerPropTypes<DataType> = {
  theirData?: DataType;
  children(data: DataType): React.ReactNode;
};

/** ********************************************************************
 * @RenderPropsComposer
 * a clean pattern for composing components which avoids props drilling
 * @sampleUsage
 * ````
        function SampleUsage() {
          return (
            <RenderPropsComposer<{ id: string; name: string; occupation: string }>>
              {(data) => (
                <>
                  <label htmlFor={data.id}>{data.id}</label>
                  <span id={data.id}>{data.name}</span>
                  <span>{data.occupation}</span>
                </>
              )}
            </RenderPropsComposer>
          );
        }
````
  **** */
export function RenderPropsComposer<DataType>(props: RenderPropsComposerPropTypes<DataType>) {
  const data = props.theirData ?? (TESTING_DATA as unknown as DataType);

  return <>{props.children(data)}</>;
}
