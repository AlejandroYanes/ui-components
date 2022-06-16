import React, { FunctionComponent, useState } from 'react';
import { Layout, useAppLocale } from 'components/Configuration';
import FlexBox from 'components/FlexBox';
import RenderIf from 'components/RenderIf';
import Calendar from 'components/Calendar';
import RenderByLayout from 'components/RenderByLayout';
import { Button } from 'components/Button';
import Options from './Options';
import { Footer } from './styled';
import { ViewProps } from './type';
import { translations } from './translations';

const PrimaryRender: FunctionComponent<ViewProps> = (props) => {
  const { value, showOptions, onChange, onClose } = props;
  const [dates, setDates] = useState(value);
  const locale = useAppLocale();

  const sendDateSelected = () => onChange(dates);

  return (
    <>
      <FlexBox align="stretch">
        <RenderIf condition={showOptions}>
          <Options onSelect={setDates} />
        </RenderIf>
        <Calendar useRange value={dates} onChange={setDates} />
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

const MobileRender: FunctionComponent<ViewProps> = (props) => {
  const { value, onChange, onClose } = props;
  const [dates, setDates] = useState(value);
  const locale = useAppLocale();

  const sendDateSelected = () => onChange(dates);

  return (
    <>
      <Calendar useRange value={dates} onChange={setDates} />
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

const DateRangeView: FunctionComponent<ViewProps> = (props) => {
  return (
    <RenderByLayout options={renderMap} {...props} />
  );
};

export default DateRangeView;
