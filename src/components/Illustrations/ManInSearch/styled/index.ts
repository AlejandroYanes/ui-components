import styled from 'styled-components';
import {
  getAccentColor,
  getBgdLighterColor,
  getBrandColor,
  getBrandHlColor,
  getGrayLightColor,
  getInfoColor,
  getPositionStyles,
  getWarningColor
} from 'helpers';

export const Wrapper = styled.div`
  ${getPositionStyles};

  .cls-1{fill: ${getBgdLighterColor};}
  .cls-1,.cls-10,.cls-11,.cls-12,.cls-2,.cls-3,.cls-5,.cls-6,.cls-7,.cls-9{
    fill-rule:evenodd;
  }
  // body parts
  .cls-2,.cls-7{fill: #fff;}
  // input
  .cls-3{fill:${getGrayLightColor};}
  .cls-4,.cls-8{fill:none;}
  // body lines
  .cls-4,.cls-7{stroke:${getBrandHlColor};stroke-width:17.9px;}
  .cls-4,.cls-7,.cls-8{stroke-linecap:round;stroke-linejoin:round;}
  // legs
  .cls-5{fill:${getAccentColor};}
  // body
  .cls-6{fill:${getBrandColor};}
  // left list items lines
  .cls-8 {
    fill: ${getWarningColor};
    stroke: ${getWarningColor};
    stroke-width:28.22px;
  }
  // eye
  .cls-9{fill:${getBrandHlColor};}
  // hair
  .cls-10{fill:${getAccentColor};}
  .cls-11{fill:#d7e0ff;}
  .cls-12{fill:#fb5e64;}
  // blocks the man is sitting on
  .cls-13 {
    fill: ${getGrayLightColor};
  }
  // badges bellow the input
  .cls-14 {
    fill: ${getInfoColor};
  }
`;
