import styled from 'styled-components';
import {
  getAccentColor,
  getBgdLightColor,
  getBrandColor, getBrandHlColor,
  getPositionStyles
} from 'helpers';

export const Wrapper = styled.div`
  ${getPositionStyles};

  .cls-1{
    fill: ${getBgdLightColor};
  }
  .cls-1,.cls-2,.cls-4,.cls-5,.cls-7{
    fill-rule:evenodd;
  }
  .cls-2{
    fill:#fff;
  }
  .cls-3,.cls-6{
    fill:none;
    stroke:${getBrandColor};
    stroke-linecap:round;
    stroke-linejoin:round;
  }
  .cls-3{stroke-width:17.9px;}
  .cls-4{
    fill:${getBrandHlColor};
  }
  .cls-5{
    fill:${getBrandColor};
  }
  .cls-6{stroke-width:21.13px;}
  .cls-7{
    fill:${getAccentColor};
  }
`;
