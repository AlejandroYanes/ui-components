import styled from 'styled-components';
import {
  getAccentColor,
  getAccentHlColor,
  getBgdColor,
  getBgdLightColor,
  getBrandColor,
  getBrandHlColor,
  getInfoShadeColor,
  getPositionStyles,
  getSuccessColor,
} from 'helpers';

export const Wrapper = styled.div`
  ${getPositionStyles};

  .cls-1{fill:${getBgdLightColor};}
  .cls-2,.cls-5,.cls-7,.cls-9{fill:none;stroke-linecap:round;stroke-linejoin:round;}
  .cls-2,.cls-5,.cls-7{stroke-width:35.31px;}
  //pager
  .cls-3{fill:${getInfoShadeColor};}
  .cls-10,.cls-11,.cls-12,.cls-13,.cls-3,.cls-4,.cls-6,.cls-8{fill-rule:evenodd;}
  // paper lines and hand sheet
  .cls-4{fill:${getAccentHlColor};}
  // paper checks
  .cls-5{stroke:${getAccentColor};}
  // paper lines without check
  .cls-6{fill:${getBgdColor};}
  // circle
  .cls-7{stroke:${getSuccessColor};}
  .cls-8{fill:${getBrandHlColor};}
  .cls-9{stroke:${getBrandColor};stroke-width:21.13px;}
  // skin
  .cls-10{fill:#fff;}
  .cls-11{fill:${getBrandColor};}
  .cls-12{fill:${getAccentColor};}
  .cls-13{fill:${getBgdLightColor};}
  [data-el="triangle"] {
    stroke: ${getSuccessColor};
  }
`;
