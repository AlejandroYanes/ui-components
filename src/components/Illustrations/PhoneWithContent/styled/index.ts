import styled from 'styled-components';
import {
  getAccentColor,
  getBgdLightColor,
  getBrandColor,
  getInfoColor,
  getPositionStyles,
  getWarningColor
} from 'helpers';

export const Wrapper = styled.div`
  ${getPositionStyles};

  .cls-1{fill:${getBgdLightColor};}
  .cls-2{fill:#fff;}
  .cls-3{fill:${({ theme }) => theme.colors.GRAY_LIGHT};}
  .cls-4,.cls-6{
    fill:none;
    stroke-linecap:round;
    stroke-linejoin:round;
    stroke-width:4.78px;
  }
  .cls-4{stroke:${getAccentColor};}
  .cls-5{fill:${getWarningColor};}
  .cls-6{stroke:${getBrandColor};}
  .cls-7{fill:${({ theme }) => theme.colors.GRAY};}
  .cls-8{
    stroke:${({ theme }) => theme.colors.GRAY_DARK};
    fill:${({ theme }) => theme.colors.GRAY_DARK};
  }
  .cls-9{fill:${getInfoColor};}
`;
