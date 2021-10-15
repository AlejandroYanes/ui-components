/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const AddBookmarkIcon: FunctionComponent<IconProps> = (props) => {
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
      <path fillRule="evenodd" clipRule="evenodd" d="M17 17V19.382L12 16.882L7 19.382V4H17V5H19V4C19 2.89543 18.1046 2 17 2H7C5.89543 2 5 2.89543 5 4V22.618L12 19.118L19 22.618V17H17ZM18 8V10H16V12H18V14H20V12H22V10H20V8H18Z" fill={color} />
    </svg>
  );
};

export default AddBookmarkIcon;
