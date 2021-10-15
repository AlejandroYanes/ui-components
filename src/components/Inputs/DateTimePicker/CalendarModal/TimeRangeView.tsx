import React, { FunctionComponent, useState } from 'react';
import { Layout } from 'components/base-components/Configuration';
import Clock from 'components/base-components/Clock';
import FlexBox from 'components/base-components/FlexBox';
import { Tab, Tabset } from 'components/base-components/Tabset';
import RenderByLayout from 'components/base-components/RenderByLayout';
import { Button } from 'components/base-components/Button';
import { Footer } from './styled';
import { ViewProps } from './type';

const PrimaryRender = (props: ViewProps) => {
  const { value, onChange, onClose } = props;
  const [times, setTimes] = useState(value);

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
        <Clock value={value[0]} onChange={handleStartChange} />
        <Clock value={value[1]} onChange={handleEndChange} />
      </FlexBox>
      <Footer>
        <Button
          onClick={onClose}
          label="Cancel"
          color="background"
          variant="fill"
          mR
        />
        <Button
          variant="fill"
          label="Select"
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

  const handleChange = (nextTime) => {
    const parsedIndex = parseInt(index);
    setTimes(parsedIndex ? [times[0], nextTime] : [nextTime, times[1]]);
  };

  const sendDateSelected = () => onChange(times);

  return (
    <>
      <Tabset activeTab={index} onTabChange={setIndex} fullWidth mB>
        <Tab name="0" label="Start" />
        <Tab name="1" label="End" />
      </Tabset>
      <Clock value={value[parseInt(index)]} onChange={handleChange} />
      <Footer>
        <Button
          onClick={onClose}
          label="Cancel"
          color="background"
          variant="fill"
          mR
        />
        <Button
          variant="fill"
          label="Select"
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
