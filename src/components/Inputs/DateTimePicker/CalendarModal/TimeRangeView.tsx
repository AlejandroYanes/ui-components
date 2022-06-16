import React, { FunctionComponent, useState } from 'react';
import { Layout, useAppLocale } from 'components/Configuration';
import Clock from 'components/Clock';
import FlexBox from 'components/FlexBox';
import { Tab, Tabset } from 'components/Tabset';
import RenderByLayout from 'components/RenderByLayout';
import { Button } from 'components/Button';
import { Footer } from './styled';
import { ViewProps } from './type';
import { translations } from './translations';

const PrimaryRender = (props: ViewProps) => {
  const { value, onChange, onClose } = props;
  const [times, setTimes] = useState(value);
  const locale = useAppLocale();

  const handleStartChange = (startTime) => {
    setTimes([startTime, times[1]]);
  };

  const handleEndChange = (endTime) => {
    setTimes([times[0], endTime]);
  };

  const sendDateSelected = () => onChange(times);

  return (
    <>
      <FlexBox>
        <Clock value={times[0]} onChange={handleStartChange} />
        <Clock value={times[1]} onChange={handleEndChange} />
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

const MobileRender = (props: ViewProps) => {
  const { value, onChange, onClose } = props;
  const [times, setTimes] = useState(value);
  const [index, setIndex] = useState('0');
  const locale = useAppLocale();

  const handleChange = (nextTime) => {
    const parsedIndex = parseInt(index);
    setTimes(parsedIndex ? [times[0], nextTime] : [nextTime, times[1]]);
  };

  const sendDateSelected = () => onChange(times);

  return (
    <>
      <Tabset activeTab={index} onTabChange={setIndex} fullWidth mB>
        <Tab name="0" label={translations[locale].timeRange.start} />
        <Tab name="1" label={translations[locale].timeRange.end} />
      </Tabset>
      <Clock value={value[parseInt(index)]} onChange={handleChange} />
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

const renderMap = {
  [Layout.DESKTOP]: PrimaryRender,
  [Layout.TABLET]: PrimaryRender,
  [Layout.MOBILE]: MobileRender,
};

const TimeView: FunctionComponent<ViewProps> = (props) => {
  return (
    <RenderByLayout options={renderMap} {...props} />
  );
};

export default TimeView;
