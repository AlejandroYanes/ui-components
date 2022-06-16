import React, { FunctionComponent } from 'react';
import { Marker as StyledMarker } from './styled/marker';

interface Props {
  hour: number;
  showMinutes: boolean;
  onClick: (event) => void;
  label?: string;
}

const Marker: FunctionComponent<Props> = (props) => {
  const { hour, showMinutes, label, onClick } = props;
  const multiplier = showMinutes ? 5 : 1;
  const buttonLabel = label || hour * multiplier;

  return (
    <StyledMarker
      data-el="marker"
      data-hour={hour}
      data-min={hour === 12 ? 0 : hour * 5}
      onClick={onClick}
    >
      {buttonLabel}
    </StyledMarker>
  );
};

export default Marker;
