import React, { FunctionComponent, ReactNode } from 'react';
import { PositionProps } from 'helpers';
import { Text } from 'components/base-components/Typography';
import {
  FauxContainer,
  FauxNob,
  HiddenInput,
  StyledToggle,
} from './styled';
import RenderIf from '../RenderIf';

interface Props extends PositionProps {
  value: boolean;
  onChange: (event) => void;
  label?: string;
  nobNode?: ReactNode;
  rtl?: boolean;
}

const springAnimation = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
};

const labelPadding = '0 0 0 8px';
const labelPaddingRtl = '0 8px 0 0';

const Toggle: FunctionComponent<Props> = (props) => {
  const { value, onChange,nobNode, label, rtl, ...rest } = props;

  return (
    <StyledToggle rtl={rtl} {...rest}>
      <HiddenInput type="checkbox" checked={value} readOnly />
      <FauxContainer
        tabIndex={0}
        role="checkbox"
        data-el="faux-container"
        checked={value}
        onClick={onChange}
      >
        <FauxNob layout transition={springAnimation} data-el="faux-nob">
          {nobNode}
        </FauxNob>
      </FauxContainer>
      <RenderIf condition={!!label}>
        <Text padding={rtl ? labelPaddingRtl : labelPadding}>{label}</Text>
      </RenderIf>
    </StyledToggle>
  );
};

export default Toggle;
