import React, { FunctionComponent } from 'react';
import { IconButton } from 'components/Button';
import AbsoluteContent from './AbsoluteContent';
import { CloseIcon } from '../../Icons';

interface Props {
  showClear?: boolean;
  topSpaced?: boolean;
  returnValue?: any;
  onClick: (event) => void;
  style?: any;
}

const ClearButton: FunctionComponent<Props> = (props) => {
  const { topSpaced, showClear, returnValue, onClick, style } = props;

  if (showClear) {
    const clearInput = (event) => {
      event.stopPropagation();
      onClick(returnValue);
    };

    return (
      <AbsoluteContent style={style} topSpaced={topSpaced} floatRight>
        <IconButton
          onClick={clearInput}
          icon={<CloseIcon height={16} width={16} />}
          color="font"
          size="small"
        />
      </AbsoluteContent>
    );
  }

  return null;
};

ClearButton.defaultProps = {
  returnValue: '',
};

export default ClearButton;
