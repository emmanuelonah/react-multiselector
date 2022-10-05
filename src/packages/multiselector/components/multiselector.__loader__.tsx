import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import { composeClassNames } from 'utils';
import { If, AccessibleIcon, VisuallyHidden } from 'components';

// LOADING ICON BELOW
/** ********************************************************* */
const spin = keyframes`
  100% { transform: rotate(360deg); }
`;

const LoadingIcon = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 auto;
  border-radius: 100px;
  border-top: 3px solid #292929;
  border-right: 3px solid #efefef;
  border-bottom: 3px solid #efefef;
  border-left: 3px solid #efefef;
  animation: ${spin} 1s infinite linear;
`;

// COMPONENT BELOW
/** ********************************************************* */
type PrimitiveDivTypes = React.ComponentPropsWithoutRef<'div'>;
type MultiSelectorLoaderElement = React.ElementRef<'div'>;
interface MultiSelectorLoaderPropTypes extends PrimitiveDivTypes {
  isLoading: boolean;
  loaderNode?: React.ReactNode;
  accessibleLoadingTextContent?: string;
  accessibleDoneLoadingTextContent?: string;
}

export const MultiSelectorLoader = React.forwardRef<MultiSelectorLoaderElement, MultiSelectorLoaderPropTypes>(
  function MultiSelectorLoader(
    { className, accessibleLoadingTextContent, accessibleDoneLoadingTextContent, isLoading, loaderNode, ...restProps },
    forwardedRef
  ) {
    const [shownLoader, setShownLoader] = React.useState(false);
    const [isDoneLoading, setIsDoneLoading] = React.useState(false);

    // LETS TRIGGER THE LOADER ACCESSIBLY BY GIVEN A BENEFIT OF 1 SECONDS,
    // PROBABLY WHAT EVER IS LOADING MIGHT BE FASTER THAN 1 SECOND
    /** ********************************************************* */
    React.useEffect(() => {
      if (!isLoading) return;

      let timeout: ReturnType<typeof setTimeout> = null!;
      timeout = setTimeout(() => setShownLoader(true), 1000);

      return function RELEASE_TIMEOUT_FROM_MEMORY() {
        window.clearTimeout(timeout);
      };
    }, [isLoading]);

    // LETS NOTIFY ACCESSIBLE TOOLS THAT WE ARE DONE LOADING SINCE MOST
    // OF THE TIMES THE LOADER IS A LOADING ICON
    /** ********************************************************* */
    React.useEffect(() => {
      if (!isLoading && shownLoader) {
        setShownLoader(false);
        setIsDoneLoading(true);

        let timeout: ReturnType<typeof setTimeout> = null!;
        timeout = setTimeout(() => setIsDoneLoading(false), 1000);

        return function RELEASE_TIMEOUT_FROM_MEMORY() {
          window.clearTimeout(timeout);
        };
      }
    }, [isLoading, shownLoader]);

    return (
      <div
        {...restProps}
        ref={forwardedRef}
        role="alert"
        aria-live="polite"
        aria-busy={isLoading}
        aria-label={accessibleLoadingTextContent}
        className={composeClassNames('multiselector-loader', className)}
      >
        <If
          condition={shownLoader}
          do={
            <AccessibleIcon label={accessibleLoadingTextContent!}>
              <>{loaderNode}</>
            </AccessibleIcon>
          }
        />
        <If condition={isDoneLoading} do={<VisuallyHidden>{accessibleDoneLoadingTextContent}</VisuallyHidden>} />
      </div>
    );
  }
);

MultiSelectorLoader.defaultProps = {
  loaderNode: <LoadingIcon />,
  accessibleLoadingTextContent: 'Loading your items...',
  accessibleDoneLoadingTextContent: 'Done loading your items.',
};
