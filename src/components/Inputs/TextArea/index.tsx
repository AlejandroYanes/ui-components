import React, { FunctionComponent, useCallback, useEffect, useRef } from 'react';
import autosizeTextArea from 'autosize';
import { getEventValue, PositionProps } from 'helpers';
import InputLabel from '../base/Label';
import { StyledContainer, StyledTextArea } from './styled/text-area';
import RightNode from './RightNode';

interface Props extends PositionProps {
  id?: string;
  placeholder?: string;
  label?: string;
  value: string;
  rows?: number;
  showClear?: boolean;
  autosize?: boolean;
  maxLength?: number;
  onChange: (event) => void;
  onFocus?: (event) => void;
  onBlur?: (event) => void;
}

const TextArea: FunctionComponent<Props> = (props) => {
  const {
    label,
    placeholder,
    value,
    onChange,
    onFocus,
    onBlur,
    showClear,
    rows,
    autosize,
    maxLength,
    ...rest
  } = props;
  const textAreaRef = useRef(undefined);

  const handleChange = useCallback((event) => {
    const txt = getEventValue(event);

    if (maxLength) {
      if (txt.length <= maxLength) {
        onChange(txt);
      }
    } else {
      onChange(txt);
    }
  }, [maxLength]);


  useEffect(() => {
    if (autosize) {
      autosizeTextArea(textAreaRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledContainer {...rest}>
      <InputLabel text={label} />
      <StyledTextArea
        ref={textAreaRef}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <RightNode
        topSpaced={!!label}
        showClear={showClear}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
    </StyledContainer>
  );
};

TextArea.defaultProps = {
  rows: 5,
};

export default TextArea;
