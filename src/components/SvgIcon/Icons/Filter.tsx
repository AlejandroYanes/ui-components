/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from '../icon-props';

const FilterIcon: FunctionComponent<IconProps> = (props) => {
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
        fill={color}
        d="M 3,6 A 1,1 0 0 0 2,7 1,1 0 0 0 3,8 h 18 a 1,1 0 0 0 0,-2 z m 3.7695312,5 a 0.95087421,1 0 0 0 -0.9492187,1 0.95087421,1 0 0 0 0.9492187,1 H 17.230469 a 0.9508743,1.0000001 0 0 0 0,-2 z m 2.3652344,5 a 0.95495984,1 0 0 0 -0.9550781,1 0.95495984,1 0 0 0 0.9550781,1 h 5.7304684 a 0.95495984,1 0 0 0 0,-2 z"
      />
    </svg>
  );
};

export default FilterIcon;
