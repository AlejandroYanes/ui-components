import React, { FunctionComponent, useCallback, useState } from 'react';
import { getEventValue } from 'helpers';
import { IconButton } from 'components/Button';
import { LockIcon, UnlockIcon } from 'components/Icons';
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
    disabled,
    ...rest
  } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChange = useCallback((event) => {
    onChange(getEventValue(event));
  }, [onChange]);

  const toggleShowPassword = useCallback(() => {
    setShowPassword(old => !old);
  }, []);

  const lockIcon = showPassword
    ? <UnlockIcon width={14} height={14} />
    : <LockIcon width={14} height={14} />;

  return (
    <StyledContainer {...rest} disabled={disabled} data-el="input-wrapper">
      <InputLabel text={label} required={required} />
      <InputIcon icon={icon} disabled={disabled} topSpaced={!!label} />
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
          disabled={disabled}
          onClick={toggleShowPassword}
          icon={lockIcon}
          color="font"
          size="small"
        />
      </AbsoluteContent>
      <ErrorText text={error} />
    </StyledContainer>
  );
};

export default PasswordInput;
