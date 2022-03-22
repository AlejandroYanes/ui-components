/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from './types/icon-props';

const ArrowRightIcon: FunctionComponent<IconProps> = (props) => {
  const { color = 'currentcolor', height = 24, width = 24, className, style } = props;

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
        transform="rotate(180,12,12)"
        fill={color}
        d="M 19.6193,10.474706 H 8.0474321 L 13.078677,5.4587047 A 1.5308585,1.5308585 0 1 0 10.913719,3.2937439 L 3.2906167,10.916845 a 1.5246204,1.5246204 0 0 0 -0.3201703,0.503127 1.5246204,1.5246204 0 0 0 0,1.158709 1.5246204,1.5246204 0 0 0 0.3201703,0.503127 l 7.6231023,7.623102 a 1.5246204,1.5246204 0 0 0 2.164958,0 1.5246204,1.5246204 0 0 0 0,-2.164963 l -5.0312449,-5.016 H 19.6193 a 1.5246205,1.5246205 0 0 0 0,-3.049241 z"
        strokeWidth={1.52463}
      />
    </svg>
  );
};

export default ArrowRightIcon;
