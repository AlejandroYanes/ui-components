import React, { FunctionComponent, ReactNode } from 'react';
import { PositionProps } from 'helpers';
import RenderIf from 'components/RenderIf';
import { StyledBadge } from './styled';

export interface BadgeProps extends PositionProps {
  color: 'brand' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'light';
  label?: string;
  icon?: ReactNode;
  sm?: boolean;
  asButton?: boolean;
}

const Badge: FunctionComponent<BadgeProps> = (props) => {
  const {
    label,
    color,
    icon = null,
    sm,
    children,
    ...rest
  } = props;

  return (
    <RenderIf condition={!!children || !!label}>
      <StyledBadge color={color} sm={sm} {...rest}>
        <RenderIf condition={!children} fallback={children}>
          {icon}
          <label>{label}</label>
        </RenderIf>
      </StyledBadge>
    </RenderIf>
  );
};

Badge.defaultProps = {
  color: 'brand',
};

export default Badge;
