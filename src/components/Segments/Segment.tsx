import React, { FunctionComponent, ReactNode, useCallback } from 'react';
import RenderIf from 'components/RenderIf';
import { Text } from 'components/Typography';
import { useOptionsContext } from './context';
import { Label, Mark, Segment as StyledSegment } from './styled/segment';

interface Props {
  value: any;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
}

const spring = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
};

const Segment: FunctionComponent<Props> = (props) => {
  const { value, label, icon = null } = props;
  const {
    color,
    size,
    fullWidth,
    value: selectedValue,
    onChange,
  } = useOptionsContext();
  const isSelected = value === selectedValue;

  const handleOnClick = useCallback(() => {
    onChange(value);
  }, [value, onChange]);

  return (
    <StyledSegment
      role="button"
      tabIndex={0}
      size={size}
      color={color}
      fullWidth={fullWidth}
      onClick={handleOnClick}
    >
      <Label isSelected={isSelected}>
        <RenderIf condition={!!icon}>
          {icon}
        </RenderIf>
        <Text
          weight="bold"
          size={size}
          color="current"
        >
          {label}
        </Text>
      </Label>
      <RenderIf condition={isSelected}>
        <Mark
          color={color}
          layoutId="optionMarker"
          initial={false}
          transition={spring}
          data-el="option-mark"
        />
      </RenderIf>
    </StyledSegment>
  );
};

export default Segment;
