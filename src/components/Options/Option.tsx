import React, { FunctionComponent, useCallback } from 'react';
import RenderIf from 'components/RenderIf';
import { Icons } from 'components/SvgIcon';
import { Text } from 'components/Typography';
import { useOptionsContext } from './context';
import { Icon, Label, Mark, Option as StyledOption } from './styled';

interface Props {
  value: string;
  label: string;
  icon?: Icons;
}

const spring = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
};

const Option: FunctionComponent<Props> = (props) => {
  const { value, label, icon } = props;
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
    <StyledOption
      role="button"
      tabIndex={0}
      size={size}
      color={color}
      fullWidth={fullWidth}
      onClick={handleOnClick}
    >
      <Label>
        <RenderIf condition={!!icon}>
          <Icon
            icon={icon}
            size={size}
            color={isSelected ? 'BACKGROUND' : 'FONT'}
          />
        </RenderIf>
        <Text
          weight="bold"
          size={size}
          color={isSelected ? 'background' : 'font'}
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
    </StyledOption>
  );
};

export default Option;
