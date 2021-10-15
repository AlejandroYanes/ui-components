import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import {
  addHours,
  getHours,
  getMinutes,
  setHours,
  setMinutes,
  subHours,
} from 'date-fns';
import getMarkerPositions from './get-marker-positions';
import Marker from './Marker';
import HourButton from './HourButton';
import { Content, TimeLabel, OuterRing, StyledClock } from './styled/clock';

interface Props {
  value: Date;
  onChange: (time: Date) => void;
}

enum Selection {
  Hour,
  Minutes,
}

const Clock: FunctionComponent<Props> = (props) => {
  const { value, onChange } = props;
  const [selectionMode, setSelectionMode] = useState<Selection>(Selection.Hour);
  const outerRingRef = useRef(undefined);
  const isPast12 = getHours(value) > 12;
  const midDayMarker = isPast12 ? 'PM' : 'AM';
  const hours = `00${isPast12 ? getHours(value) - 12 : getHours(value)}`.slice(-2);
  const minutes = `00${getMinutes(value)}`.slice(-2);

  const handleMarkerClick = (event) => {
    if (selectionMode === Selection.Minutes) {
      const { min } = event.target.dataset;
      onChange(setMinutes(value, parseInt(min, 10)));
    } else {
      const { hour: nextHour } = event.target.dataset;
      const parsedHour = parseInt(nextHour, 10);
      const nextDate = setHours(value, isPast12 ? parsedHour + 12 : parsedHour);
      setSelectionMode(Selection.Minutes);
      onChange(nextDate);
    }
  };

  const handleMidDayMarkerChange = () => {
    const hoursModifier = getHours(value) > 12 ? subHours : addHours;
    onChange(hoursModifier(value, 12));
  };

  useEffect(() => {
    const { width } = outerRingRef.current.getBoundingClientRect();
    const positions = getMarkerPositions(width);
    const markers = outerRingRef.current.querySelectorAll('button[data-el="marker"]');
    markers.forEach((element, key) => {
      const { top, left } = positions[key];
      const style = `top: ${top}px; left: ${left}px;`;
      element.setAttribute('style', style);
    });
  }, []);

  const showMinutes = selectionMode === Selection.Minutes;

  return (
    <StyledClock data-el="clock">
      <OuterRing data-el="outer-ring" ref={outerRingRef}>
        <Content data-el="outer-ring-content">
          <Marker
            hour={12}
            showMinutes={showMinutes}
            onClick={handleMarkerClick}
            label={showMinutes ? '00' : '12'}
          />
          <Marker
            hour={1}
            showMinutes={showMinutes}
            onClick={handleMarkerClick}
            label={showMinutes ? '05' : '1'}
          />
          <Marker hour={2} showMinutes={showMinutes} onClick={handleMarkerClick} />
          <Marker hour={3} showMinutes={showMinutes} onClick={handleMarkerClick} />
          <Marker hour={4} showMinutes={showMinutes} onClick={handleMarkerClick} />
          <Marker hour={5} showMinutes={showMinutes} onClick={handleMarkerClick} />
          <Marker hour={6} showMinutes={showMinutes} onClick={handleMarkerClick} />
          <Marker hour={7} showMinutes={showMinutes} onClick={handleMarkerClick} />
          <Marker hour={8} showMinutes={showMinutes} onClick={handleMarkerClick} />
          <Marker hour={9} showMinutes={showMinutes} onClick={handleMarkerClick} />
          <Marker hour={10} showMinutes={showMinutes} onClick={handleMarkerClick} />
          <Marker hour={11} showMinutes={showMinutes} onClick={handleMarkerClick} />
          <TimeLabel>
            <HourButton
              label={hours}
              active={selectionMode === Selection.Hour}
              onClick={() => setSelectionMode(Selection.Hour)}
            >
              {hours}
            </HourButton>
            <span>:</span>
            <HourButton
              label={minutes}
              active={selectionMode === Selection.Minutes}
              onClick={() => setSelectionMode(Selection.Minutes)}
            >
              {minutes}
            </HourButton>
            <HourButton
              reduced
              label={midDayMarker}
              onClick={handleMidDayMarkerChange}
            >
              {midDayMarker}
            </HourButton>
          </TimeLabel>
        </Content>
      </OuterRing>
    </StyledClock>
  );
};

export default Clock;
