import React, { FunctionComponent, ReactNode } from 'react';
import { headerHeight } from 'styles/variables';
import FlexBox from 'components/FlexBox';

interface Props {
  footer?: ReactNode;
  size?: 'auto' | 'small' | 'medium' | 'large' | 'drawer' | 'mobile';
}

const commonPadding = '24px 16px 0';

const footerSpacingMap = {
  drawer: '0 6px',
  mobile: '0 6px',
  auto: commonPadding,
  small: commonPadding,
  medium: commonPadding,
  large: commonPadding,
};

const Footer: FunctionComponent<Props> = (props): any => {
  const { footer, size } = props;
  const footerSpacing = footerSpacingMap[size];

  if (footer) {
    return (
      <FlexBox
        align="center"
        justify="flex-end"
        height={headerHeight}
        padding={footerSpacing}
      >
        {footer}
      </FlexBox>
    );
  }

  return null;
};

export default Footer;
