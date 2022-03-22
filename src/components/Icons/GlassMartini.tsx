/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from './types/icon-props';
import { useAppColors } from 'components/Configuration';

const GlassMartiniIcon: FunctionComponent<IconProps> = (props) => {
  const { color = 'currentcolor', height = 24, width = 24, className, style } = props;
  const colors = useAppColors();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      width={width}
      height={height}
    >
      <path
        fill={colors[color] || color}
        d="M21.78,3.62a1,1,0,0,0,.12-1.05A1,1,0,0,0,21,2H3a1,1,0,0,0-.9.57,1,1,0,0,0,.12,1.05L11,14.6V20H5.25a1,1,0,0,0,0,2h13.5a1,1,0,0,0,0-2H13V14.6ZM5.08,4H18.92l-2.4,3h-9ZM12,12.65,9.08,9h5.84Z"
      />
    </svg>
  );
};

export default GlassMartiniIcon;
