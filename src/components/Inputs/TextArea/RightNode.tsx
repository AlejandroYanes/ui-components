import React, { FunctionComponent } from 'react';
import { Text } from 'components/Typography';
import ClearButton from '../base/ClearButton';
import AbsoluteContent from '../base/AbsoluteContent';

interface Props {
  topSpaced?: boolean;
  showClear?: boolean;
  value?: string;
  onChange?: (event) => void;
  maxLength?: number;
}

const RightNode: FunctionComponent<Props> = (props) => {
  const { topSpaced, showClear, value, onChange, maxLength } = props;

  if (showClear) {
    return (
      <ClearButton
        topSpaced={topSpaced}
        showClear={showClear && !!value}
        onClick={onChange}
      />
    );
  }

  if (maxLength && value) {
    return (
      <AbsoluteContent topSpaced={topSpaced} floatRight>
        <Text size="small" color="secondary">{maxLength - value.length}</Text>
      </AbsoluteContent>
    );
  }

  return null;
};

export default RightNode;
