import styled, { css } from 'styled-components';
import { Button } from 'components/base-components/Button';
import { getBgdLighterColor } from 'helpers';

export const StyledList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const getBasicStyles = (props) => {
  const { isSelected, theme: { colors } } = props;

  if (isSelected) {
    return css`
      background-color: ${colors.BRAND_BG};
      color: ${getBgdLighterColor};

      &:hover {
        background-color: ${colors.BRAND_BG_HIGHLIGHT};
        color: ${getBgdLighterColor};
      }
    `;
  }

  return '';
};

export const Item = styled(Button).attrs((props: any) => props)`
  width: 30%;
  ${getBasicStyles};
`;
