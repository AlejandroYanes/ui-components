import React, { FunctionComponent } from 'react';
import { Fallback } from './styled';

interface Props {
  condition: boolean;
  asPortal?: boolean;
  fallback?: any;
  content?: any;
  [x: string]: any;
}

const RenderIf: FunctionComponent<Props> = (props) => {
  const {
    children,
    content: Content,
    condition,
    fallback,
    ...rest
  } = props;

  if (condition) {
    return children || <Content {...rest} />;
  }
  if (fallback) {
    if (typeof fallback === 'string') {
      return (
        <Fallback>
          {fallback}
        </Fallback>
      );
    }

    return fallback;
  }

  return null;
};

export default RenderIf;
