import styled from 'styled-components';
import { anyPropsAttrs } from 'helpers';

const getPadding = (props) => {
  const { size } = props;

  if (size !== 'drawer' && size !== 'mobile') {
    return '0 16px';
  }

  return '0';
};

export const Content = styled.div.attrs(anyPropsAttrs)`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${getPadding};
  overflow: hidden auto;
`;
