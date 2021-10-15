import React, { FunctionComponent } from 'react';
import { useAppLayout } from 'components/Configuration';
import RenderByMap from '../RenderByMap';

interface Props {
  options: { [s: string]: any };
  fallback?: any;
  [x: string]: any;
}

const RenderByLayout: FunctionComponent<Props> = (props) => {
  const layout = useAppLayout();
  const { options, ...rest } = props;

  return <RenderByMap map={options} option={layout} {...rest} />;
};

RenderByLayout.defaultProps = {
  fallback: () => null,
}

export default RenderByLayout;
