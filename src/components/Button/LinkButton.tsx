import { FunctionComponent } from 'react';
import { StyledLink } from './styled';
import { CommonButtonProps } from './types';

interface Props extends Omit<CommonButtonProps, 'onClick'> {
  to: string;
  label?: string;
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
