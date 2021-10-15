import styled from 'styled-components';
import {
  getAccentColor,
  getBgdLightColor,
  getBrandColor,
  getBrandHlColor,
  getInfoColor,
  getPositionStyles,
} from 'helpers';

export const Wrapper = styled.div`
  ${getPositionStyles};

  .cls-1{fill:${getBgdLightColor};}
  .cls-2,.cls-4{
    fill:none;
    stroke-linecap:round;
    stroke-linejoin:round;
    stroke-width:4.78px;
  }
  .cls-2{stroke:${getInfoColor};}
  // hair
  .cls-3{fill:${getAccentColor};}
  // body and phone lines
  .cls-4{stroke:${getBrandColor};}
  // woman body
  .cls-5{fill:${getBrandHlColor};}
  .cls-6{
    fill:${getInfoColor};
    fill-rule:evenodd;
  }
  .cls-7{fill:#fff;}
  //eye
  .cls-8{fill:${getBrandColor};}
`;
