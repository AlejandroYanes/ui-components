/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const GridIcon: FunctionComponent<IconProps> = (props) => {
  const { color, height, width, className, style } = props;

  return (
    <svg
      className={className}
      style={style}
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2.5" y="3" width="8" height="8" rx="2" stroke={color} strokeWidth="1.8" />
      <rect x="13.5" y="3" width="8" height="8" rx="2" stroke={color} strokeWidth="1.8" />
      <rect x="2.5" y="14" width="8" height="8" rx="2" stroke={color} strokeWidth="1.8" />
      <rect x="13.5" y="14" width="8" height="8" rx="2" stroke={color} strokeWidth="1.8" />
    </svg>
  );
};

export default GridIcon;
