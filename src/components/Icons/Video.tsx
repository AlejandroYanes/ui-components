/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from './types/icon-props';
import { useAppColors } from 'components/Configuration';

const VideoIcon: FunctionComponent<IconProps> = (props) => {
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
        d="M21.53,7.15a1,1,0,0,0-1,0L17,8.89A3,3,0,0,0,14,6H5A3,3,0,0,0,2,9v6a3,3,0,0,0,3,3h9a3,3,0,0,0,3-2.89l3.56,1.78A1,1,0,0,0,21,17a1,1,0,0,0,.53-.15A1,1,0,0,0,22,16V8A1,1,0,0,0,21.53,7.15ZM15,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8h9a1,1,0,0,1,1,1Zm5-.62-3-1.5V11.12l3-1.5Z"
      />
    </svg>
  );
};

export default VideoIcon;
