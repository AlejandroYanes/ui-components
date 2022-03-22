/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from './types/icon-props';

const PetIcon: FunctionComponent<IconProps> = (props) => {
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
      <g transform="translate(1.9029339,3.5134711)">
        <g id="pet-icon">
          <path
            d="m 15.347,13.627 a 2.4,2.4 0 0 1 -2.4,2.4 2.362,2.362 0 0 1 -1.339,-0.407 c -0.071,-0.047 -0.131,-0.1 -0.191,-0.143 a 2.4,2.4 0 0 0 -2.772,0.072 c -0.036,0.024 -0.06,0.048 -0.1,0.071 a 2.374,2.374 0 0 1 -1.433,0.478 2.4,2.4 0 0 1 -0.789,-4.672 3.061,3.061 0 0 0 1.613,-1.6 c 0,-0.012 0,-0.012 0.012,-0.024 a 2.438,2.438 0 0 1 2.1,-1.23 2.4,2.4 0 0 1 2.055,1.159 1.846,1.846 0 0 0 0.132,0.263 0.062,0.062 0 0 0 0.024,0.047 3.08,3.08 0 0 0 1.469,1.315 2.392,2.392 0 0 1 1.619,2.271 z"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="1.75"
            id="path2"
          />
          <ellipse
            cx="13.091"
            cy="3.96"
            rx="1.798"
            ry="3.085"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="1.75"
            id="ellipse4"
          />
          <ellipse
            cx="7.0910001"
            cy="3.96"
            rx="1.798"
            ry="3.085"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="1.75"
            id="ellipse6"
          />
          <path
            d="m 19.18,9.152 c -0.313,1.327 -1.234,2.245 -2.058,2.05 C 16.298,11.007 15.884,9.775 16.2,8.448 A 2.35,2.35 0 0 1 18.255,6.4 c 1.067,0 1.238,1.425 0.925,2.752 z"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="1.75"
            id="path8"
          />
          <path
            d="M 1.015,9.083 C 1.328,10.41 2.25,11.328 3.073,11.134 3.896,10.94 4.311,9.706 4,8.38 A 2.348,2.348 0 0 0 1.94,6.329 c -1.067,0 -1.24,1.428 -0.925,2.754 z"
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            strokeWidth="1.75"
            id="path10"
          />
        </g>
      </g>
    </svg>
  );
};

export default PetIcon;
