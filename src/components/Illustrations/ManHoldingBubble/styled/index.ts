import styled from 'styled-components';
import {
  getAccentColor,
  getBgdColor,
  getBgdLightColor,
  getBrandColor,
  getBrandHlColor,
  getGrayLightColor,
  getPositionStyles,
  getWarningColor,
} from 'helpers';

export const Wrapper = styled.div`
  ${getPositionStyles};

  // bg
  .cls-1{fill:${getBgdLightColor};}
  .cls-10,.cls-2,.cls-4,.cls-7,.cls-9{
    fill:none;
    stroke-linecap:round;
    stroke-linejoin:round;
  }
  // dashed lines and closing tag
  .cls-2,.cls-7{stroke:${getAccentColor};}
  .cls-2{stroke-width:6px;stroke-dasharray:36;}
  // skin
  .cls-3{fill:#fff;}
  // body lines
  .cls-4,.cls-9{stroke:${getBrandColor};}
  .cls-4{stroke-width:5.43px;}
  // pants
  .cls-5{fill:${getBgdColor};}
  // bubble and arrow
  .cls-6{fill:${getGrayLightColor};}
  .cls-7,.cls-9{stroke-width:5.3px;}
  // shirt
  .cls-8{fill:${getBrandHlColor};}
  // shapes outside
  .cls-10{
    stroke:${getWarningColor};
    stroke-width:3.95px;
  }
  // hair
  .cls-11{fill:${getAccentColor};}
  // eye
  .cls-12{fill:${getBrandColor};}
`;
