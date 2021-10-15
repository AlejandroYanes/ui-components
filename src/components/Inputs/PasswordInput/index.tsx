import React, { FunctionComponent, useCallback, useState } from 'react';
import { getEventValue } from 'helpers';
import { IconButton } from 'components/base-components/Button';
import AbsoluteContent from '../base/AbsoluteContent';
import InputLabel from '../base/Label';
import InputIcon from '../base/Icon';
import ErrorText from '../base/ErrorText';
import { StyledContainer, StyledInput } from '../Input/styled/input';
import { InputProps } from '../types';

const PasswordInput: FunctionComponent<InputProps> = (props) => {
  const {
    label,
    placeholder,
    icon,
    value,
    onChange,
    onFocus,
    onBlur,
    required,
    error,
    ...rest
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChange = useCallback((event) => {
    onChange(getEventValue(event));
  }, [onChange]);

  const toggleShowPassword = useCallback(() => {
    setShowPassword(old => !old);
  }, []);

  return (
    <StyledContainer {...rest} data-el="input-wrapper">
      <InputLabel text={label} required={required} />
      <InputIcon icon={icon} topSpaced />
      <StyledInput
        type={showPassword ? 'text' : 'password'}
        padRight
        padLeft={!!icon}
        value={value}
        error={error}
        placeholder={placeholder}
        onChange={handleOnChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <AbsoluteContent topSpaced floatRight>
        <IconButton
          onClick={toggleShowPassword}
          icon={showPassword ? 'UNLOCK' : 'LOCK'}
          color="background"
          size="small"
        />
      </AbsoluteContent>
      <ErrorText text={error} />
    </StyledContainer>
  );
};

export default PasswordInput;
