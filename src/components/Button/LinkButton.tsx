import { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { StyledLink } from './styled';

interface Props extends PositionProps {
  to: string;
  label?: string;
  variant?: 'text' | 'flat' | 'outline' | 'fill';
  color?: 'brand' | 'accent' | 'success' | 'info' | 'warning' | 'error' | 'background';
  sm?: boolean;
}

const LinkButton: FunctionComponent<Props> = (props) => {
  const { to, label, children, ...rest } = props;

  return (
    <StyledLink to={to} {...rest}>
      {children || label}
    </StyledLink>
  );
};

LinkButton.defaultProps = {
  variant: 'text',
  color: 'background',
};

export default LinkButton;
