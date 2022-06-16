import React, { FunctionComponent, ReactNode } from 'react';
import RenderIf from 'components/RenderIf';
import AbsoluteContent from './AbsoluteContent';

interface Props {
  icon: ReactNode;
  topSpaced?: boolean;
  disabled?: boolean;
}

const InputIcon: FunctionComponent<Props> = (props) => {
  const { topSpaced, icon } = props;

  return (
    <RenderIf condition={!!icon}>
      <AbsoluteContent topSpaced={topSpaced}>
        {icon}
      </AbsoluteContent>
    </RenderIf>
  );
};

export default InputIcon;
