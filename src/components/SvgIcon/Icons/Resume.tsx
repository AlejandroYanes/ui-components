/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const ResumeIcon: FunctionComponent<IconProps> = (props) => {
  const { color, height, width, className, style } = props;

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
      <path
        d="M18 6.5V4C18 2.89543 17.1046 2 16 2H5C3.89543 2 3 2.89543 3 4V17C3 18.1046 3.89543 19 5 19H12"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="12.5" r="3.5" fill={color} />
      <path
        d="M18 17.5C15.2225 17.5 14.1594 19.2143 13.7524 20.5267C13.507 21.318 14.1716 22 15 22H21C21.8284 22 22.493 21.318 22.2476 20.5267C21.8406 19.2143 20.7775 17.5 18 17.5Z"
        fill={color}
      />
      <path
        d="M7 6H14"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 9.5L11 9.5"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ResumeIcon;
