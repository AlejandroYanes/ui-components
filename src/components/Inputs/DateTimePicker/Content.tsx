import React, { FunctionComponent, ReactNode, useMemo } from 'react';
import { formatDate, formatDateTime, formatTime } from 'helpers';
import RenderIf from 'components/RenderIf';
import { Text } from 'components/Typography';
import { useAppLocale } from 'components/Configuration';
import AbsoluteContent from '../base/AbsoluteContent';
import { CalendarIcon, ClockIcon } from 'components/Icons';
import { Separator, StyledContent } from './styled/content';
import ClearButton from '../base/ClearButton';

interface Props {
  value: Date | Date[];
  type: 'date' | 'date-range' | 'date-time' | 'time' | 'time-range';
  onClick: () => void;
  onChange: (event) => void;
  onFocus: () => void;
  onBlur: () => void;
  icon?: ReactNode;
  padLeft: boolean;
  padRight: boolean;
  isFocused: boolean;
  disabled: boolean;
  showClearButton?: boolean;
}

function getDateString(
  date: Date,
  type: Props['type'],
  locale: string,
) {
  switch (type) {
    case 'date':
    case 'date-range':
      return formatDate(date, locale);
    case 'time':
    case 'time-range':
      return formatTime(date, locale);
    default:
      return formatDateTime(date, locale);
  }
}

function getIcon(type: Props['type']) {
  switch (type) {
    case 'time':
    case 'time-range':
      return <ClockIcon width={20} height={20} />;
    default:
      return <CalendarIcon width={20} height={20} />;
  }
}

const Content: FunctionComponent<Props> = (props) => {
  const locale = useAppLocale();
  const {
    type,
    value,
    padLeft,
    padRight,
    disabled,
    icon,
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
      return getDateString(date, type, locale);
    }

    return undefined;
  }, [type, useRange, value]);

  const endDate = useMemo(() => {
    if (value && useRange) {
      const date = value[1];
      return getDateString(date, type, locale);
    }

    return undefined;
  }, [type, useRange, value]);

  return (
    <StyledContent
      data-el="date-time-picker-content"
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      padLeft={padLeft}
      padRight={padRight}
      tabIndex={0}
    >
      <RenderIf condition={icon !== null}>
        <AbsoluteContent>
          <RenderIf condition={!!icon} fallback={getIcon(type)}>{icon}</RenderIf>
        </AbsoluteContent>
      </RenderIf>
      <Text color="current" padding="0 16px 0 0">
        {startDate}
      </Text>
      <RenderIf condition={!!endDate}>
        <Separator disabled={disabled} />
        <Text color="current" padding="0 0 0 16px">
          {endDate}
        </Text>
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
