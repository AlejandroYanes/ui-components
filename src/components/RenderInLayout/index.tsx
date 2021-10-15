import { FunctionComponent } from 'react';
import { Layout, useAppLayout } from '../Configuration';

interface Props {
  layout: Layout;
  ifNot?: boolean;
}

const RenderInLayout: FunctionComponent<Props> = (props): any => {
  const { layout: targetLayout, ifNot, children } = props;
  const layout = useAppLayout();
  const condition = ifNot ? layout !== targetLayout : layout === targetLayout;

  if (condition) {
    return children;
  }

  return null;
};

export default RenderInLayout;
