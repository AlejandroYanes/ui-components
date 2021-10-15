/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const SendIcon: FunctionComponent<IconProps> = (props) => {
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
        transform="rotate(0,12,12)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.74011 2.25203L4.10512 11.8071L4.87687 12L4.10512 12.1929L2.74011 21.748L22.236 12L2.74011 2.25203ZM5.89483 10.1929L5.25984 5.74796L17.7639 12L5.25984 18.252L5.89483 13.8071L13.1231 12L5.89483 10.1929Z"
        fill={color}
      />
    </svg>
  );
};

export default SendIcon;
