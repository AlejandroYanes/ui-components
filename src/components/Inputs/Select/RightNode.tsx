import { FunctionComponent } from 'react';
import { Spring, Variants } from 'framer-motion';
import SvgIcon from 'components/SvgIcon';
import { SpinningDots } from 'components/Loaders';
import AbsoluteContent from '../base/AbsoluteContent';
import ClearButton from '../base/ClearButton';
import { IconBox } from './styled';
import { SelectOption } from './';

interface Props {
  isLoading: boolean;
  isHovered: boolean;
  isOpen: boolean;
  showClear: boolean;
  multiple: boolean;
  value: SelectOption | SelectOption[];
  onChange: (event) => void;
}

const transition: Spring = {
  type: 'spring',
  stiffness: 450,
  damping: 15,
};

const iconVariants: Variants = {
  closed: {
    transform: 'rotate(0deg)',
    transition,
  },
  open: {
    transform: 'rotate(180deg)',
    transition,
  },
};

const RightNode: FunctionComponent<Props> = (props) => {
  const {
    isLoading,
    isHovered,
    isOpen,
    showClear,
    multiple,
    value,
    onChange,
  } = props;

  const hasValue = (
    (multiple && !!value && value.length > 0) ||
    (!multiple && !!value)
  );
  const showClearBtn = isHovered && showClear && hasValue;

  if (isLoading) {
    return (
      <AbsoluteContent floatRight>
        <SpinningDots size="x-small" margin="0 6px" />
      </AbsoluteContent>
    );
  }

  if (showClearBtn) {
    return (
      <ClearButton
        returnValue={multiple ? [] : undefined}
        onClick={onChange}
        showClear
      />
    );
  }

  return (
    <AbsoluteContent floatRight>
      <IconBox
        variants={iconVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
      >
        <SvgIcon icon="CHEVRON_DOWN" width={18} />
      </IconBox>
    </AbsoluteContent>
  );
};

export default RightNode;
