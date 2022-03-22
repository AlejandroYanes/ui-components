/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from './types/icon-props';
import { useAppColors } from 'components/Configuration';

const LockCircleIcon: FunctionComponent<IconProps> = (props) => {
  const { color = 'currentcolor', height = 24, width = 24, className, style } = props;
  const colors = useAppColors();

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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 11C1 17.0751 5.92487 22 12 22C18.0751 22 23 17.0751 23 11C23 4.92487 18.0751 0 12 0C5.92487 0 1 4.92487 1 11ZM21 11C21 15.9706 16.9706 20 12 20C7.02944 20 3 15.9706 3 11C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11ZM11 7V9H13V7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7ZM15 9C16.1046 9 17 9.89543 17 11V15C17 16.1046 16.1046 17 15 17H9C7.89543 17 7 16.1046 7 15V11C7 9.89543 7.89543 9 9 9V7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7V9ZM9 11V15H15V11H9ZM11 13C11 13.5523 11.4477 14 12 14C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13Z"
        fill={colors[color] || color}
      />
    </svg>
  );
};

export default LockCircleIcon;
