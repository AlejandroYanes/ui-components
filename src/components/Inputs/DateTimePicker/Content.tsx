import React, { FunctionComponent, useMemo } from 'react';
import { formatDate, formatDateTime, formatTime } from 'helpers';
import SvgIcon from 'components/SvgIcon';
import RenderIf from 'components/RenderIf';
import { Text } from 'components/Typography';
import AbsoluteContent from '../base/AbsoluteContent';
import { Separator, StyledContent } from './styled/content';
import ClearButton from '../base/ClearButton';

interface Props {
  showClearButton?: boolean;
  value: Date | Date[];
  type: 'date' | 'date-range' | 'date-time' | 'time' | 'time-range';
  padRight: boolean;
  isFocused: boolean;
  onClick: () => void;
  onChange: (event) => void;
  onFocus: () => void;
  onBlur: () => void;
}

function getDateString(
  date: Date,
  type: 'date' | 'date-range' | 'date-time' | 'time' | 'time-range',
) {
  switch (type) {
    case 'date':
    case 'date-range':
      return formatDate(date);
    case 'time':
    case 'time-range':
      return formatTime(date);
    default:
      return formatDateTime(date);
  }
}

const Content: FunctionComponent<Props> = (props) => {
  const {
    type,
    value,
    padRight,
    showClearButton,
    onClick,
    onChange,
    onFocus,
    onBlur,
  } = props;
  const useRange = type === 'date-range' || type === 'time-range';

  const startDate = useMemo(() => {
    if (value) {
      const date = useRange ? value[0] : value;
      return getDateString(date, type);
    }

    return undefined;
  }, [type, useRange, value]);

  const endDate = useMemo(() => {
    if (value && useRange) {
      const date = value[1];
      return getDateString(date, type);
    }

    return undefined;
  }, [type, useRange, value]);

  const iconSize = type === 'date-time' && useRange ? 'large' : 'medium';

  return (
    <StyledContent
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      padRight={padRight}
      tabIndex={0}
    >
      <AbsoluteContent>
        <SvgIcon
          color="FONT"
          size={iconSize}
          icon="CALENDAR"
        />
      </AbsoluteContent>
      <Text padding="0 16px 0 0">{startDate}</Text>
      <RenderIf condition={!!endDate}>
        <Separator />
        <Text padding="0 0 0 16px">{endDate}</Text>
      </RenderIf>
      <ClearButton
        returnValue={null}
        showClear={showClearButton}
        onClick={onChange}
      />
    </StyledContent>
  );
};

export default Content;
