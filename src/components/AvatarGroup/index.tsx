/* eslint-disable react/no-array-index-key */
import React, { FunctionComponent, useMemo } from 'react';
import { PositionProps } from 'helpers';
import Avatar from 'components/Avatar';
import RenderIf from 'components/RenderIf';
import { Text } from 'components/Typography';
import { StyledAvatarGroup } from './styled';

interface Props extends PositionProps {
  label?: string;
  icons: string[];
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
}

function resolveTextSize({ size }: Props) {
  switch (size) {
    case 'large':
    case 'x-large':
      return 'large';
    case 'x-small':
      return 'small';
    default:
      return 'medium';
  }
}

const AvatarGroup: FunctionComponent<Props> = (props) => {
  const { label, icons, size, ...rest } = props;

  const avatars = useMemo(() => (
    icons.map((icon, index) => (
      <Avatar key={`${icon}-${index}`} size={size} src={icon} />
    ))
  ), [icons, size]);

  return (
    <StyledAvatarGroup {...rest}>
      {avatars}
      <RenderIf condition={!!label}>
        <Text
          as="label"
          margin="0 0 0 6px"
          size={resolveTextSize(props)}
        >
          {label}
        </Text>
      </RenderIf>
    </StyledAvatarGroup>
  );
};

AvatarGroup.defaultProps = {
  size: 'small',
};

export default AvatarGroup;
