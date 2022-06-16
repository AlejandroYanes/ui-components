import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { Heading } from './styled/title';

interface Props extends PositionProps {
  level?: 1 | 2 | 3;
  color?: 'brand' | 'accent' | 'font' | 'background' | 'secondary';
  align?: 'left' | 'center' | 'right';
  weight?: 'light' | 'normal' | 'bold';
  size?: number;
  lineHeight?: number;
  italic?: boolean;
  inline?: boolean;
}

const componentMap = {
  1: undefined,
  2: 'h2',
  3: 'h3',
};

const Title: FunctionComponent<Props> = (props) => {
  const { level, children, ...rest } = props;

  return (
    <Heading as={componentMap[level]} level={level} {...rest}>{children}</Heading>
  );
};

Title.defaultProps = {
  level: 1,
  color: 'font',
  align: 'left',
  weight: 'normal',
};

export default Title;
