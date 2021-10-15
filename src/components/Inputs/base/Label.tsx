import React, { FunctionComponent } from 'react';
import RenderIf from 'components/base-components/RenderIf';
import { StyledLabel } from './styled/label';

interface Props {
  text: string;
  required?: boolean;
}

const InputLabel: FunctionComponent<Props> = (props) => {
  const { text, required } = props;

  if (text) {
    return (
      <StyledLabel>
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
