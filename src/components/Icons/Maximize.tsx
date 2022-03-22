/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from './types/icon-props';
import { useAppColors } from 'components/Configuration';

const MaximizeIcon: FunctionComponent<IconProps> = (props) => {
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
        d="M4 4V12H2V2H12V4H4ZM15.7071 9.70711L20 5.41421V9H22V2H15V4H18.5858L14.2929 8.29289L15.7071 9.70711ZM20 12V20H12V22H22V12H20ZM9 22V20H5.41421L9.70711 15.7071L8.29289 14.2929L4 18.5858V15H2V22H9Z"
        fill={colors[color] || color}
      />
    </svg>
  );
};

export default MaximizeIcon;
