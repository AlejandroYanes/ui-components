import React, { FunctionComponent } from 'react';
import { AnimatePresence } from 'framer-motion';
import { HourButton as StyledHourButton, HourLabel } from './styled/hour-button';

interface Props {
  active?: boolean;
  reduced?: boolean;
  label: string;
  onClick: () => void;
}

const hourLabelVariants = {
  up: { top: -40, opacity: 0 },
  enter: { top: 0, opacity: 1 },
  down: { top: 40, opacity: 0 },
};

const HourButton: FunctionComponent<Props> = (props) => {
  const { active, reduced, label, onClick } = props;

  return (
    <StyledHourButton active={active} onClick={onClick}>
      <AnimatePresence initial={false}>
        <HourLabel
          reduced={reduced}
          key={label}
          variants={hourLabelVariants}
          initial="up"
          animate="enter"
          exit="down"
        >
          {label}
        </HourLabel>
      </AnimatePresence>
    </StyledHourButton>
  );
};

export default HourButton;
