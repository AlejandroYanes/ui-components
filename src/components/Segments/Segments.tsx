import React, { FunctionComponent } from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { PositionProps } from 'helpers';
import { OptionsProvider } from './context';
import { Segments as StyledSegments } from './styled/segments';

interface Props extends PositionProps {
  value: any;
  onChange: (value: any) => void;
  size?: 'small' | 'medium' | 'large';
  color?: 'brand' | 'accent' | 'success' | 'info' | 'warning' | 'error';
}

const Segments: FunctionComponent<Props> = (props) => {
  const { value, onChange, color, size, fullWidth, children, ...rest } = props;

  return (
    <StyledSegments color={color} {...rest} data-el="options-wrapper">
      <OptionsProvider
        value={value}
        onChange={onChange}
        size={size}
        color={color}
        fullWidth={fullWidth}
      >
        <AnimateSharedLayout>
          {children}
        </AnimateSharedLayout>
      </OptionsProvider>
    </StyledSegments>
  );
};

Segments.defaultProps = {
  color: 'brand',
  size: 'medium',
};

export default Segments;
