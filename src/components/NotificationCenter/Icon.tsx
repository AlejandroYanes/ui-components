import React, { FunctionComponent } from 'react';
import { NotificationType } from 'notifications';
import {
  CheckCircleIcon,
  ExclamationOctagonIcon,
  ExclamationTriangleIcon,
  InfoCircleIcon
} from 'components/Icons';

interface Props {
  type: NotificationType;
}

const iconMap = {
  [NotificationType.SUCCESS]: <CheckCircleIcon color="SUCCESS" />,
  [NotificationType.INFO]: <InfoCircleIcon color="INFO" />,
  [NotificationType.WARNING]: <ExclamationTriangleIcon color="WARNING" />,
  [NotificationType.ERROR]: <ExclamationOctagonIcon color="ERROR" />,
};

const Icon: FunctionComponent<Props> = (props) => {
  const { type } = props;

  return (
    <>{iconMap[type]}</>
  );
}

export default Icon;
