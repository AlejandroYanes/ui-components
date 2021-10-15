import React, { FunctionComponent } from 'react';
import SvgIcon, { Icons } from 'components/SvgIcon';
import RenderIf from 'components/RenderIf';
import AbsoluteContent from './AbsoluteContent';

interface Props {
  icon: Icons;
  topSpaced?: boolean;
}

const InputIcon: FunctionComponent<Props> = (props) => {
  const { topSpaced, icon } = props;

  return (
    <RenderIf condition={!!icon}>
      <AbsoluteContent topSpaced={topSpaced}>
        <SvgIcon icon={icon} color="FONT" />
      </AbsoluteContent>
    </RenderIf>
  );
};

export default InputIcon;
