import React, { FunctionComponent, ReactNode } from 'react';
import { mobileHeaderHeight } from 'styles/variables';
import { Title } from 'components/Typography';
import { IconButton } from 'components/Button';
import FlexBox from 'components/FlexBox';
import RenderIf from '../RenderIf';
import { ArrowLeftIcon, CloseIcon } from '../Icons';

interface Props {
  title?: string | ReactNode;
  size?: 'auto' | 'small' | 'medium' | 'large' | 'drawer' | 'mobile';
  onClose: () => void;
}

const PrimaryHeader = ({ title, onClose }) => (
  <FlexBox
    direction="row"
    justify="space-between"
    align="center"
    padding="0 16px 20px 16px"
  >
    <RenderIf condition={typeof title === 'string'} fallback={title}>
      <Title margin="0" padding="0 0 0 12px" level={3} color="font">{title}</Title>
      <IconButton onClick={onClose} icon={<CloseIcon />} variant="flat" />
    </RenderIf>
  </FlexBox>
);

const DrawerHeader = ({ title, onClose }) => (
  <FlexBox
    direction="row"
    justify="flex-start"
    align="center"
    padding="0 6px 0"
    height={mobileHeaderHeight}
  >
    <RenderIf condition={typeof title === 'string'} fallback={title}>
      <IconButton
        onClick={onClose}
        icon={<ArrowLeftIcon />}
        variant="flat"
      />
      <Title margin="0" padding="0 0 0 12px" level={3} color="font">{title}</Title>
    </RenderIf>
  </FlexBox>
);

const MobileHeader = ({ title, onClose }) => (
  <FlexBox
    direction="row"
    justify="flex-start"
    align="center"
    padding="0 6px 0"
    height={mobileHeaderHeight}
  >
    <RenderIf condition={typeof title === 'string'} fallback={title}>
      <IconButton onClick={onClose} icon={<ArrowLeftIcon />} variant="flat" />
      <Title margin="0" padding="0 0 0 12px" level={2} color="font">{title}</Title>
    </RenderIf>
  </FlexBox>
);

const sizeMap = {
  auto: PrimaryHeader,
  small: PrimaryHeader,
  medium: PrimaryHeader,
  large: PrimaryHeader,
  drawer: DrawerHeader,
  mobile: MobileHeader,
};

const Header: FunctionComponent<Props> = (props) => {
  const { size, title, onClose } = props;

  if (title) {
    const HeaderComponent = sizeMap[size];

    return (
      <HeaderComponent title={title} onClose={onClose} />
    );
  }

  return null;
};

export default Header;
