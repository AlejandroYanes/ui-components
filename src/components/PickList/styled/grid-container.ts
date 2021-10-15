import styled from 'styled-components';
import { anyPropsAttrs, getPositionStyles } from 'helpers';
import { Layout } from 'components/Configuration';

const getColumns = (props) => {
  const { cols } = props;
  return `grid-template-columns: repeat(${cols}, auto);`;
};

const gapSizeMap = {
  [Layout.DESKTOP]: '24px',
  [Layout.TABLET]: '24px',
  [Layout.MOBILE]: '16px 8px',
};

export const Wrapper = styled.ul.attrs(anyPropsAttrs)`
  position: relative;
  display: grid;
  justify-content: normal;
  justify-items: center;
  align-items: center;
  max-width: 100%;
  padding: 0;
  margin: 0;
  gap: ${({ theme }) => gapSizeMap[theme.layout]};
  ${getColumns};
  ${getPositionStyles};
`;
