import { FunctionComponent, useCallback } from 'react';
import Input from '../Input';
import { InputProps } from '../types';

interface Props extends InputProps {
  onChange: (value: number) => void;
  allowDecimals?: boolean;
}

const integerNumberRegex = /^(-)?\d+$/;
const floatNumberRegex = /^(-)?\d+(\.)?(\d+)?$/;

const NumberInput: FunctionComponent<Props> = (props) => {
  const { allowDecimals, onChange, ...rest } = props;

  const handleOnChange = useCallback((value: string) => {
    const regex = allowDecimals ? floatNumberRegex : integerNumberRegex;
    if (value === '' || regex.test(value)) {
      onChange(allowDecimals ? parseFloat(value) : parseInt(value, 10));
    }
  }, [onChange]);

  return (
    <Input {...rest} onChange={handleOnChange} />
  );
};

export default NumberInput;
