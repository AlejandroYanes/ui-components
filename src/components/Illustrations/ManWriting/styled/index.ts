import styled from 'styled-components';
import {
  getAccentColor,
  getAccentHlColor,
  getBgdLightColor,
  getBrandColor,
  getBrandHlColor,
  getBrandShadeColor,
  getPositionStyles,
  getWarningColor,
} from 'helpers';

export const Wrapper = styled.div`
  ${getPositionStyles};

  //bg
  .cls-1{fill:${getBgdLightColor};}
  //pants
  .cls-2{fill:${getAccentHlColor};}
  //skin
  .cls-3{fill:#fff;}
  .cls-11,.cls-4{
    fill:none;
    stroke-linecap:round;
    stroke-linejoin:round;
    stroke-width:3.19px;
  }
  // man borders
  .cls-4{stroke:${getBrandColor};}
  // pencil eraser
  .cls-5{fill:${getAccentHlColor};}
  // pencil
  .cls-6{fill:${getBrandHlColor};}
  // shirt
  .cls-7{fill:${getBrandHlColor};}
  // top right dot
  .cls-8{fill:${getWarningColor};}
  // eye
  .cls-9{fill:${getBrandColor};}
  // hair
  .cls-10{fill:${getAccentColor};}
  .cls-11{stroke:#d8dfff;}
  // top left rect
  .cls-12 {
    fill: ${getBrandShadeColor};
  }
`;
