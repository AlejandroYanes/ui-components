import { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { Emoji as StyledEmoji } from './styled';

interface Props extends PositionProps {
  size?: 'small' | 'normal' | 'large' | 'page' | number;
}

const Emoji: FunctionComponent<Props> = (props) => {
  const { children, ...rest } = props;

  return <StyledEmoji {...rest}>{children}</StyledEmoji>;
};

Emoji.defaultProps = {
  size: 'normal',
};

export default Emoji;
