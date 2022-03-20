/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from './types/icon-props';

const BookmarkCheckedIcon: FunctionComponent<IconProps> = (props) => {
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
        d="M 6.8593365,1.6905224 A 2,2 0 0 0 4.9745709,3.2295849 L 11.914023,10.170993 18.853476,3.2295849 A 2,2 0 0 0 16.914023,1.6905224 H 6.914024 a 2,2 0 0 0 -0.054687,0 z M 21.203085,3.1807568 11.914023,12.469821 7.6249615,8.1807568 6.7948834,7.3799755 5.3847271,8.7706005 6.2030865,9.5909134 11.914023,15.299899 22.624961,4.590913 Z M 4.914024,10.081149 v 12.228516 l 6.999999,-3.5 7,3.5 V 10.081149 l -7,7 z"
      />
    </svg>
  );
};

export default BookmarkCheckedIcon;
