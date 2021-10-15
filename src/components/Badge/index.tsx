import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { Icons } from 'components/SvgIcon';
import RenderIf from 'components/RenderIf';
import { Icon, StyledBadge } from './styled';

export interface BadgeProps extends PositionProps {
  color: 'brand' | 'accent' | 'info' | 'success' | 'warning' | 'error' | 'light';
  label?: string;
  icon?: Icons;
  sm?: boolean;
  asButton?: boolean;
}

const Badge: FunctionComponent<BadgeProps> = (props) => {
  const {
    label,
    color,
    icon,
    sm,
    children,
    ...rest
  } = props;

  return (
    <RenderIf condition={!!children || !!label}>
      <StyledBadge color={color} sm={sm} {...rest}>
        <RenderIf condition={!children} fallback={children}>
          <Icon
            size={sm ? 'small' : 'medium'}
            icon={icon}
            color={color === 'light' ? 'FONT' : 'WHITE'}
          />
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
