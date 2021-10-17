import React, { FunctionComponent } from 'react';
import { NotificationType } from 'notifications';
import SvgIcon, { Icons } from 'components/SvgIcon';

interface Props {
  type: NotificationType;
}

const iconMap = {
  [NotificationType.SUCCESS]: 'CHECK_CIRCLE',
  [NotificationType.INFO]: 'INFO_CIRCLE',
  [NotificationType.WARNING]: 'EXCLAMATION_TRIANGLE',
  [NotificationType.ERROR]: 'EXCLAMATION_OCTAGON',
};

const Icon: FunctionComponent<Props> = (props) => {
  const { type } = props;

  return (
    <SvgIcon size="large" icon={iconMap[type] as Icons} color={type} />
  );
}

export default Icon;
