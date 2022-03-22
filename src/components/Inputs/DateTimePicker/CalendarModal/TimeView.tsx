import React, { FunctionComponent, useState } from 'react';
import { useAppLocale } from 'components/Configuration';
import Clock from 'components/Clock';
import { Button } from 'components/Button';
import { Footer } from './styled';
import { ViewProps } from './type';
import { translations } from './translations';

interface Props extends ViewProps {
  value: Date;
}

const TimeView: FunctionComponent<Props> = (props) => {
  const { value, onChange, onClose } = props;
  const [time, setTime] = useState(value);
  const locale = useAppLocale();

  const sendDateSelected = () => onChange(time);

  return (
    <>
      <Clock value={time} onChange={setTime} />
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
  )
};

export default TimeView;
