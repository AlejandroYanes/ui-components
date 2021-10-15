import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import Content from './Content';
import { StyledAvatar } from './styled';

export interface AvatarProps extends PositionProps {
  src: string;
  alt?: string;
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large';
  onClick?: (event) => void;
}

const Avatar: FunctionComponent<AvatarProps> = (props) => {
  const { src, alt, size, onClick, ...rest } = props;


  return (
    <StyledAvatar
      clicable={!!onClick}
      onClick={onClick}
      role={onClick ? 'button' : ''}
      tabIndex={onClick ? 1 : -1}
      size={size}
      data-el="avatar"
      {...rest}
    >
      <Content src={src} alt={alt} />
    </StyledAvatar>
  );
};

Avatar.defaultProps = {
  src: 'user1',
  size: 'medium',
  alt: 'user\'s avatar',
};

export default Avatar;
