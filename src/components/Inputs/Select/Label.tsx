import { FunctionComponent } from 'react';
import { Text } from 'components/Typography';
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
      <Text ellipsis weight="bold" color="current">{`${label} ${text}`}</Text>
    );
  }

  return (
    <Text color="current" ellipsis>{text}</Text>
  );
};

export default Label;
