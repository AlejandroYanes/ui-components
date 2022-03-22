/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from './types/icon-props';

const MessageIcon: FunctionComponent<IconProps> = (props) => {
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
      <path
        fill={color}
        d="M12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Zm5-9H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm-2,4H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,9h6a1,1,0,0,0,0-2H9A1,1,0,0,0,9,9Z"
      />
    </svg>
  );
};

export default MessageIcon;
