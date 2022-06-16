import React, { FunctionComponent } from 'react';
import Backdrop from 'components/Backdrop';
import DateView from './DateView';
import DateRangeView from './DateRangeView';
import DateTimeView from './DateTimeView';
import TimeView from './TimeView';
import TimeRangeView from './TimeRangeView';
import { StyledCalendarModal, } from './styled';

interface Props {
  isOpen: boolean;
  type?: 'date' | 'date-range' | 'date-time' | 'time' | 'time-range';
  value: Date | Date[];
  onChange: (date: Date | Date[]) => void;
  onClose: () => void;
  showOptions?: boolean;
}

const viewMap = {
  'date': DateView,
  'time': TimeView,
  'date-time': DateTimeView,
  'date-range': DateRangeView,
  'time-range': TimeRangeView,
};

const CalendarModal: FunctionComponent<Props> = (props) => {
  const { isOpen, type, value, onClose, onChange, showOptions } = props;
  const View = viewMap[type];

  if (isOpen) {
    return (
      <Backdrop onClick={onClose}>
        <StyledCalendarModal type={type}>
          <View
            value={value as any}
            showOptions={showOptions}
            onChange={onChange}
            onClose={onClose}
          />
        </StyledCalendarModal>
      </Backdrop>
    );
  }

  return null;
};

export default CalendarModal;
