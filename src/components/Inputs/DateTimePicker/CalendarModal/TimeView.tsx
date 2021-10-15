import React, { FunctionComponent, useState } from 'react';
import Clock from 'components/Clock';
import { Button } from 'components/Button';
import { Footer } from './styled';
import { ViewProps } from './type';

interface Props extends ViewProps {
  value: Date;
}

const TimeView: FunctionComponent<Props> = (props) => {
  const { value, onChange, onClose } = props;
  const [time, setTime] = useState(value);

  const sendDateSelected = () => onChange(time);

  return (
    <>
      <Clock value={time} onChange={setTime} />
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
  )
};

export default TimeView;
