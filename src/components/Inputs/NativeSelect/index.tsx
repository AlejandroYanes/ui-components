import React, { ChangeEvent, FC } from 'react';
import { ChevronDownIcon } from 'components/Icons';
import { InputProps } from '../types';
import InputLabel from '../base/Label';
import InputIcon from '../base/Icon';
import ErrorText from '../base/ErrorText';
import { StyledContainer } from './styled/container';
import { StyledNativeSelect } from './styled/select';
import AbsoluteContent from '../base/AbsoluteContent';

export interface NativeSelectOption {
  label: string;
  value: string | number;
}

interface Props extends Omit<InputProps, 'showClear'> {
  value: string | number;
  options: NativeSelectOption[];
}

const NativeSelect: FC<Props> = (props) => {
  const {
    label,
    placeholder,
    icon,
    value,
    options,
    onChange,
    required,
    error,
    disabled,
    ...rest
  } = props;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  const optionElements = options.map(({ value, label }: NativeSelectOption) => (
    <option key={value} value={value}>{label}</option>
  ));

  return (
    <StyledContainer
      {...rest}
      disabled={disabled}
      data-el="native-select-wrapper"
    >
      <InputLabel
        text={label}
        required={required}
        data-el="input-label"
      />
      <StyledNativeSelect
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        paddLeft={!!icon}
        disabled={disabled}
        error={!!error}
      >
        {optionElements}
      </StyledNativeSelect>
      <InputIcon topSpaced={!!label} icon={icon} />
      <AbsoluteContent topSpaced={!!label} floatRight>
        <ChevronDownIcon width={18} height={18} />
      </AbsoluteContent>
      <ErrorText text={error} />
    </StyledContainer>
  );
};

export default NativeSelect;
