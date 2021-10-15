import React, { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import Steps from './Steps';
import { StyledStepper, StepsContainer, Content } from './styled';

interface Props extends PositionProps {
  activeStep: number;
  onChange?: (step: number) => void;
}

const Stepper: FunctionComponent<Props> = (props) => {
  const { activeStep, onChange, children, ...rest } = props;
  const steps = React.Children.map(children, (child: any) => child);
  const isValidStep = activeStep >= 0 && activeStep < steps.length;
  const step = isValidStep ? steps[activeStep] : steps[0];

  return (
    <StyledStepper {...rest} data-el="stepper">
      <StepsContainer data-el="stepper--numbers">
        <Steps
          count={steps.length}
          activeStep={activeStep}
          onChange={onChange}
        />
      </StepsContainer>
      <Content data-el="stepper-content">
        {step}
      </Content>
    </StyledStepper>
  );
};

export default Stepper;
