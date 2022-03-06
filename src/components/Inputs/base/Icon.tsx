import React, { FunctionComponent } from 'react';
import SvgIcon, { Icons } from 'components/SvgIcon';
import RenderIf from 'components/RenderIf';
import AbsoluteContent from './AbsoluteContent';

interface Props {
  icon: Icons;
  topSpaced?: boolean;
  disabled?: boolean;
}

const InputIcon: FunctionComponent<Props> = (props) => {
  const { topSpaced, disabled, icon } = props;

  return (
    <RenderIf condition={!!icon && icon !== 'null'}>
      <AbsoluteContent topSpaced={topSpaced}>
        <SvgIcon icon={icon} color={disabled ? 'FONT_SHADE' : 'FONT'} />
      </AbsoluteContent>
    </RenderIf>
  );
};

export default InputIcon;
