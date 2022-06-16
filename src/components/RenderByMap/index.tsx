import { FunctionComponent } from 'react';

interface Props {
  map: { [option: string]: any };
  option: string;
  fallback?: any;
  [x: string]: any;
}

const RenderByMap: FunctionComponent<Props> = (props) => {
  const { map, option, fallback, ...rest } = props;
  const Component = map[option] || fallback;

  return <Component {...rest} />;
};

RenderByMap.defaultProps = {
  fallback: () => null,
};

export default RenderByMap;
