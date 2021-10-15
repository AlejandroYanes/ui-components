import React, { FunctionComponent } from 'react';
import { Day as StyledDay, DayNumber, Mark } from './styled';
import RenderIf from '../RenderIf';

interface Props {
  day: Date;
  isSelected: boolean;
  onClick: (event) => void;
}

const spring = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
};

const Day: FunctionComponent<Props> = (props) => {
  const { day, isSelected, onClick } = props;

  return (
    <StyledDay
      role="button"
      tabIndex={0}
      key={day.getTime()}
      data-day={day}
      onClick={onClick}
    >
      <DayNumber data-day={day} isSelected={isSelected}>
        {day.getDate()}
      </DayNumber>
      <RenderIf condition={isSelected}>
        <Mark layoutId="dayMarker" initial={false} transition={spring} />
      </RenderIf>
    </StyledDay>
  );
};

export default Day;
