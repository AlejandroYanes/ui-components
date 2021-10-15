import React, { FunctionComponent } from 'react';
import Calendar from 'components/base-components/Calendar';
import { ViewProps } from './type';

interface Props extends ViewProps {
  value: Date;
}

const DateView: FunctionComponent<Props> = (props) => {
  const { value, onChange } = props;

  return (
    <Calendar value={value} onChange={onChange} />
  )
};

export default DateView;
