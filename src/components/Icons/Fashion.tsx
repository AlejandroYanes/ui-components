/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from './types/icon-props';

const FashionIcon: FunctionComponent<IconProps> = (props) => {
  const { color = 'currentcolor', height = 24, width = 24, className, style } = props;

  return (
    <svg
      className={className}
      style={style}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(2.3658508,1.9389996)">
        <g id="fashion-icon">
          <path
            d="m 18.316,11.889 -1.158,1.8 a 0.475,0.475 0 0 1 -0.652,0.147 L 14.32,12.431 v 6.338 a 0.48,0.48 0 0 1 -0.478,0.478 L 9.635,19.238 5.428,19.247 A 0.48,0.48 0 0 1 4.95,18.769 V 12.431 L 2.764,13.837 A 0.475,0.475 0 0 1 2.112,13.69 L 0.954,11.89 A 0.464,0.464 0 0 1 1.092,11.238 L 5.143,7.792 C 5.363,7.654 6.493,6.956 7.017,7.48 l 0.138,0.2 A 3.052,3.052 0 0 0 7.4,8.04 l 0.027,0.028 a 2.9,2.9 0 0 0 4.41,0 L 11.864,8.04 a 3.052,3.052 0 0 0 0.248,-0.358 l 0.138,-0.2 c 0.524,-0.524 1.654,0.174 1.874,0.312 l 4.051,3.445 a 0.464,0.464 0 0 1 0.141,0.65 z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
            id="path2"
          />
          <path
            d="m 9.548,5.835 c 0,-0.058 0,-0.116 0,-0.174 0,0 -0.024,-0.388 -0.073,-0.689 A 0.972,0.972 0 0 0 8.933,4.32 0.073,0.073 0 0 0 8.9,4.3 1.786,1.786 0 0 1 7.844,2.694 V 2.666 a 1.791,1.791 0 0 1 3.582,0"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="1.75"
            id="path4"
          />
        </g>
      </g>
    </svg>
  );
};

export default FashionIcon;
