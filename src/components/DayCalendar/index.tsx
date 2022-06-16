import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { PositionProps } from 'helpers';
import RenderIf from 'components/RenderIf';
import { IconButton } from 'components/Button';
import Days from './Days';
import { Edge, List, ListContainer, Wrapper } from './styled';
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons';

interface Props extends PositionProps {
  days: Date[];
  value: Date;
  onChange: (date: Date) => void;
}

const DayCalendar: FunctionComponent<Props> = (props) => {
  const { days, value, onChange, ...rest } = props;
  const [showArrows, setShowArrows] = useState(false);
  const containerRef = useRef(undefined);
  const listRef = useRef(undefined);

  const handleLeftEdgeClick = useCallback(() => {
    containerRef.current.scrollBy(-48, 0);
  }, []);

  const handleRightEdgeClick = useCallback(() => {
    containerRef.current.scrollBy(48, 0);
  }, []);

  const handleDayClick = useCallback((event) => {
    const { day } = event.target.dataset;
    onChange(new Date(day));
  }, [onChange]);

  useEffect(() => {
    const containerWidth = containerRef.current.getBoundingClientRect().width;
    const listWidth = listRef.current.getBoundingClientRect().width;

    if (listWidth > containerWidth) {
      setShowArrows(true);
    }
  }, [days]);

  return (
    <Wrapper {...rest} data-el="day_calendar-wrapper">
      <Edge side="left" data-el="day_calendar-left_edge">
        <RenderIf condition={showArrows}>
          <IconButton
            onClick={handleLeftEdgeClick}
            icon={<ChevronLeftIcon />}
            color="font"
            variant="flat"
          />
        </RenderIf>
      </Edge>
      <ListContainer ref={containerRef} data-el="day_calendar-list_container">
        <List ref={listRef}>
          <AnimateSharedLayout>
            <Days days={days} value={value} handleDayClick={handleDayClick} />
          </AnimateSharedLayout>
        </List>
      </ListContainer>
      <Edge side="right" data-el="day_calendar-right_edge">
        <RenderIf condition={showArrows}>
          <IconButton
            onClick={handleRightEdgeClick}
            icon={<ChevronRightIcon />}
            color="font"
            variant="flat"
          />
        </RenderIf>
      </Edge>
    </Wrapper>
  );
};

export default DayCalendar;
