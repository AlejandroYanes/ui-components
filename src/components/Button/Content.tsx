import React, { FunctionComponent, ReactNode } from 'react';
import { SpinningDots } from 'components/Loaders';
import { LoadingLayer, Text, IconWrapper } from './styled';

interface Props {
  label: string;
  color: string;
  variant: 'text' | 'flat' | 'outline' | 'fill';
  rightIcon: ReactNode;
  leftIcon: ReactNode;
  loading: boolean;
}

const Content: FunctionComponent<Props> = (props) => {
  const {
    label,
    color,
    variant,
    loading,
    leftIcon = null,
    rightIcon = null,
    children,
  } = props;

  if (label || children) {
    const spinnerColors = variant !== 'fill'
      ? `${color.toUpperCase()}_FONT`
      : 'BACKGROUND_LIGHTER';

    return (
      <>
        <IconWrapper show={!loading}>
          {leftIcon}
        </IconWrapper>
        <Text data-el="button-label" show={!loading}>{label}</Text>
        <IconWrapper show={!loading}>
          {rightIcon}
        </IconWrapper>
        <LoadingLayer data-testid="button-loading" show={loading}>
          <SpinningDots size="x-small" color={spinnerColors as any} />
        </LoadingLayer>
      </>
    );
  }

  return null;
}

export default Content;
