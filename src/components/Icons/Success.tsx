/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from './types/icon-props';

const SuccessIcon: FunctionComponent<IconProps> = (props) => {
  const { color = 'currentcolor', height = 24, width = 24, className, style } = props;

  return (
    <svg
      className={className}
      style={style}
      height={height}
      width={width}
      fill={color}
      viewBox="0 0 16 16"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.7550166,13.2349229 L1.2050166,8.68492285 C0.931661133,8.41156738 0.931661133,7.96835254 1.2050166,7.69496973 L2.19494238,6.7050166 C2.46829785,6.43163379 2.91154004,6.43163379 3.18489551,6.7050166 L6.24999316,9.77008691 L12.8150908,3.2050166 C13.0884463,2.93166113 13.5316885,2.93166113 13.8050439,3.2050166 L14.7949697,4.19496973 C15.0683252,4.4683252 15.0683252,4.91154004 14.7949697,5.18492285 L6.74496973,13.2349502 C6.47158691,13.5083057 6.02837207,13.5083057 5.7550166,13.2349229 Z" />
    </svg>
  );
};

export default SuccessIcon;
