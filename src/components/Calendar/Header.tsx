import React, { FunctionComponent, useMemo } from 'react';
import { Button, IconButton } from 'components/Button';
import RenderIf from 'components/RenderIf';
import { DateElement } from './types';
import { StyledHeader } from './styled/header';
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons';
import { useAppLocale } from '../Configuration';
import { capitalizeFirstLetter } from '../../helpers';

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
  const locale = useAppLocale();

  const label = useMemo(() => {
    const monthYearFormatter = new Intl.DateTimeFormat(locale, {
      month: 'long',
      year: 'numeric',
    });
    const monthFormatter = new Intl.DateTimeFormat(locale, {
      month: 'long',
    });
    const yearFormatter = new Intl.DateTimeFormat('default', {
      year: 'numeric',
    });

    if (selecting === DateElement.Day) {
      return capitalizeFirstLetter(
        currentDate.getFullYear() === today.getFullYear()
          ? monthFormatter.format(currentDate)
          : monthYearFormatter.format(currentDate)
      );
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
          icon={<ChevronLeftIcon />}
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
          icon={<ChevronRightIcon />}
          color="background"
          variant="fill"
        />
      </RenderIf>
    </StyledHeader>
  );
};

export default Header;
