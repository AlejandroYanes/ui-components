/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from './types/icon-props';
import { useAppColors } from 'components/Configuration';

const BookIcon: FunctionComponent<IconProps> = (props) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H21V18C20.4477 18 20 18.4477 20 19C20 19.5523 20.4477 20 21 20V22ZM18 19C18 18.6494 18.0602 18.3128 18.1707 18H6C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20H18.1707C18.0602 19.6872 18 19.3506 18 19ZM6 4H19V16H6C5.64936 16 5.31278 16.0602 5 16.1707V5C5 4.44772 5.44772 4 6 4Z"
        fill={colors[color] || color}
      />
    </svg>
  );
};

export default BookIcon;
