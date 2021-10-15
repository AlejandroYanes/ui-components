import React, { FunctionComponent } from 'react';
import RenderIf from 'components/base-components/RenderIf';
import { SpinningDots } from 'components/base-components/Loaders';
import { LoadingLayer, Text } from './styled';
import SvgIcon, { Icons } from '../SvgIcon';

interface Props {
  label: string;
  color: string;
  variant: 'text' | 'flat' | 'outline' | 'fill';
  rightIcon: Icons;
  leftIcon: Icons;
  loading: boolean;
  sm: boolean;
}

const Content: FunctionComponent<Props> = (props) => {
  const {
    sm,
    label,
    color,
    variant,
    loading,
    leftIcon,
    rightIcon,
  } = props;

  if (label) {
    const spinnerColors = variant !== 'fill'
      ? `${color.toUpperCase()}_FONT`
      : 'BACKGROUND_LIGHTER';

    return (
      <>
        <SvgIcon icon={leftIcon} height={sm ? 14 : 20} width={sm ? 14 : 20} />
        <Text data-el="button-label" show={!loading}>{label}</Text>
        <SvgIcon icon={rightIcon} height={sm ? 14 : 20} width={sm ? 14 : 20} />
        <RenderIf condition={loading}>
          <LoadingLayer show={loading}>
            <SpinningDots size="x-small" color={spinnerColors as any} />
          </LoadingLayer>
        </RenderIf>
      </>
    );
  }

  return null;
}

export default Content;
