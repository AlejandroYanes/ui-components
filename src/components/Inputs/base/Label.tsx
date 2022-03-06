import React, { FunctionComponent } from 'react';
import RenderIf from 'components/RenderIf';
import { StyledLabel } from './styled/label';

interface Props {
  text: string;
  required?: boolean;
  disabled?: boolean;
}

const InputLabel: FunctionComponent<Props> = (props) => {
  const { text, required, disabled } = props;

  if (text) {
    return (
      <StyledLabel disabled={disabled}>
        {text}
        <RenderIf condition={required}>
          <sup>*</sup>
        </RenderIf>
      </StyledLabel>
    );
  }

  return null;
};

export default InputLabel;
