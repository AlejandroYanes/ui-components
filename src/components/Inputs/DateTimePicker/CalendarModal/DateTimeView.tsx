import React, { FunctionComponent, useState } from 'react';
import { formatDateTime } from 'helpers';
import { useAppLocale } from 'components/Configuration';
import FlexBox from 'components/FlexBox';
import { Text } from 'components/Typography';
import { Tab, Tabset } from 'components/Tabset';
import RenderIf from 'components/RenderIf';
import Calendar from 'components/Calendar';
import Clock from 'components/Clock';
import { Button } from 'components/Button';
import { ClockWrapper, Footer } from './styled';
import { ViewProps } from './type';
import { translations } from './translations';
import { CalendarIcon, ClockIcon } from '../../../Icons';

interface Props extends ViewProps {
  value: Date;
}

const expander = <div style={{ flex: 1 }} />

enum Tabs {
  Calendar = 'Calendar',
  Clock = 'Clock',
}

const DateTimeView: FunctionComponent<Props> = (props) => {
  const { value, onChange, onClose } = props;
  const [activeTab, setActiveTab] = useState(Tabs.Calendar);
  const [date, setDate] = useState(value);
  const locale = useAppLocale();

  const handleChange = (nextValue) => {
    setActiveTab(Tabs.Clock);
    setDate(nextValue);
  };

  const sendDateSelected = () => onChange(date);

  return (
    <>
      <Tabset activeTab={activeTab} onTabChange={setActiveTab} fullWidth mB>
        <Tab name={Tabs.Calendar} icon={<CalendarIcon />} />
        <Tab name={Tabs.Clock} icon={<ClockIcon />} />
      </Tabset>
      <RenderIf condition={activeTab === Tabs.Calendar}>
        <Calendar value={date} onChange={handleChange} />
      </RenderIf>
      <RenderIf condition={activeTab === Tabs.Clock}>
        <ClockWrapper data-el="clock-wrapper">
          <Clock value={date} onChange={setDate} />
        </ClockWrapper>
      </RenderIf>
      {expander}
      <FlexBox justify="flex-end" mB mT>
        <Text weight="bold">{formatDateTime(date, locale)}</Text>
      </FlexBox>
      <Footer>
        <Button
          onClick={onClose}
          label={translations[locale].cancelButton}
          color="brand"
          variant="outline"
          mR
        />
        <Button
          variant="fill"
          label={translations[locale].acceptButton}
          onClick={sendDateSelected}
        />
      </Footer>
    </>
  );
};

export default DateTimeView;
