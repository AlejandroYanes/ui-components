import React, { FunctionComponent, useMemo } from 'react';
import { Button, IconButton } from 'components/base-components/Button';
import RenderIf from 'components/base-components/RenderIf';
import { monthFormatter, monthYearFormatter, yearFormatter } from './utils';
import { DateElement } from './types';
import { StyledHeader } from './styled/header';

interface Props {
  currentDate: Date;
  selecting: DateElement;
  onChangeSelection: (event) => void;
  onSelectNext: (event) => void;
  onSelectPrevious: (event) => void;
}

const today = new Date();
const monthButtonStyles = { flexGrow: 1 };

const Header: FunctionComponent<Props> = (props) => {
  const {
    currentDate,
    selecting,
    onChangeSelection: changeSelection,
    onSelectNext: selectNext,
    onSelectPrevious: selectPrevious,
  } = props;

  const label = useMemo(() => {
    if (selecting === DateElement.Day) {
      return currentDate.getFullYear() === today.getFullYear()
        ? monthFormatter.format(currentDate)
        : monthYearFormatter.format(currentDate);
    }

    if (selecting === DateElement.Month || selecting === DateElement.Year) {
      return yearFormatter.format(currentDate);
    }

    return null;
  }, [selecting, currentDate]);

  const selectingDay = selecting === DateElement.Day;

  return (
    <StyledHeader centerContent={!selectingDay}>
      <RenderIf condition={selectingDay}>
        <IconButton
          onClick={selectPrevious}
          icon="CHEVRON_LEFT"
          color="background"
          variant="fill"
        />
      </RenderIf>
      <Button
        onClick={changeSelection}
        style={monthButtonStyles}
        label={label}
        variant="fill"
        color="background"
        mR
        mL
      />
      <RenderIf condition={selectingDay}>
        <IconButton
          onClick={selectNext}
          icon="CHEVRON_RIGHT"
          color="background"
          variant="fill"
        />
      </RenderIf>
    </StyledHeader>
  );
};

export default Header;
