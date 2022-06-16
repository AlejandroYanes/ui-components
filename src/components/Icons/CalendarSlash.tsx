/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from './types/icon-props';
import { useAppColors } from 'components/Configuration';

const CalendarSlashIcon: FunctionComponent<IconProps> = (props) => {
  const { color = 'currentcolor', height = 24, width = 24, className, style } = props;
  const colors = useAppColors();

  return (
    <svg
      className={className}
      style={style}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={colors[color] || color}
        d="M11.66,7H15V8a1,1,0,0,0,2,0V7h1a1,1,0,0,1,1,1v3H17.66a1,1,0,0,0,0,2H19v1.34a1,1,0,1,0,2,0V8a3,3,0,0,0-3-3H17V4a1,1,0,0,0-2,0V5H11.66a1,1,0,0,0,0,2ZM21.71,20.29l-1.6-1.6h0L3.71,2.29A1,1,0,0,0,2.29,3.71L4.2,5.61A3,3,0,0,0,3,8V18a3,3,0,0,0,3,3H18a3,3,0,0,0,1.29-.3l1,1a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM5,8a1,1,0,0,1,.66-.93L9.59,11H5ZM6,19a1,1,0,0,1-1-1V13h6.59l6,6Z"
      />
    </svg>
  );
};

export default CalendarSlashIcon;
