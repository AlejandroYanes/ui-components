import { FunctionComponent } from 'react';
import { Text } from 'components/base-components/Typography';
import { SelectOption } from './';

interface Props {
  label: string;
  value: SelectOption | SelectOption[];
}

const Label: FunctionComponent<Props> = (props) => {
  const { label, value } = props;
  const text = Array.isArray(value)
    ? (value as SelectOption[]).map(v => v.label).join(', ')
    : value?.label;

  if (label) {
    return (
      <Text ellipsis weight="bold">{`${label} ${text}`}</Text>
    );
  }

  return (
    <Text ellipsis>{text}</Text>
  );
};

export default Label;
