import styled from 'styled-components';
import {
  getAccentColor,
  getBgdColor,
  getBgdLightColor,
  getBrandColor,
  getBrandHlColor,
  getInfoShadeColor,
  getPositionStyles,
  getWarningColor
} from 'helpers';

export const Wrapper = styled.div`
  ${getPositionStyles};

  .cls-1{fill:${getBgdLightColor};}
  .cls-2{fill:${getInfoShadeColor};}
  .cls-3{fill:${getInfoShadeColor};}
  .cls-4{fill:${getWarningColor};}
  .cls-5{fill:#fff;}
  .cls-13,.cls-15,.cls-6,.cls-7{
    fill:none;
    stroke-linecap:round;
    stroke-linejoin:round;
  }
  .cls-6{
    stroke:${getWarningColor};
    stroke-width:3px;
  }
  .cls-13,.cls-7{stroke:${getBrandColor};}
  .cls-15,.cls-7{stroke-width:3.69px;}
  .cls-8{fill:${getAccentColor};}
  .cls-9{fill:${getBrandHlColor};}
  .cls-10{fill:${getBgdColor};}
  .cls-11{fill:${getAccentColor};}
  .cls-12{fill:${getAccentColor};}
  .cls-13{stroke-width:3.14px;}
  .cls-15{
    stroke:${getWarningColor};
    fill:${getWarningColor};
  }
`;
