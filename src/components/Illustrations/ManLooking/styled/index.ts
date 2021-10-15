import styled from 'styled-components';
import {
  getAccentColor,
  getBrandColor,
  getPositionStyles
} from 'helpers';

export const Wrapper = styled.div`
  ${getPositionStyles};

  .cls-2 {
    fill: ${({ theme }) => theme.colors.BACKGROUND_LIGHT};
  }
  .cls-3 {
    fill:#fff;
  }
  .cls-4, .cls-6 {
    fill:none;
    stroke-linecap:round;
    stroke-linejoin:round;
    stroke-width:17.9px;
  }
  .cls-4 {
    stroke:${getBrandColor};
  }
  .cls-5 {
    fill: ${({ theme }) => theme.colors.BRAND_HIGHLIGHT};
  }

  .cls-7 {
    fill:${getBrandColor};
  }
  .cls-8{
    fill:${getAccentColor};
  }
`;
