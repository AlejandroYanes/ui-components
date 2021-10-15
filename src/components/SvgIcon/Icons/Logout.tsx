/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const LogoutIcon: FunctionComponent<IconProps> = (props) => {
  const { color, height, width, className, style } = props;

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 24 24"
      className={className}
      style={style}
      height={height}
      width={width}
      fill="none"
      xmlSpace="preserve"
    >
      <path d="M7 20H4V4H7M20 20V4L10 1V23L20 20ZM13 11.8V12.2H13.4V11.8H13Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default LogoutIcon;
