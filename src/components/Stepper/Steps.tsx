import { FunctionComponent, memo } from 'react';
import Step from './Step';

interface Props {
  count: number;
  activeStep: number;
  onChange?: (step) => void;
}

const Steps: FunctionComponent<Props> = (props): any => {
  const { count, activeStep, onChange } = props;

  return new Array(count)
    .fill(0)
    .map((_, index) => (
      <Step
        key={index}
        value={index}
        isActive={activeStep === index}
        hideStart={index === 0}
        hideEnd={index === count - 1}
        onClick={onChange}
      />
    ));
};

export default memo<Props>(Steps);
