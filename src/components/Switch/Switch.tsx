import React, { FunctionComponent } from 'react';
import { CaseProps } from 'components/Switch/Case';

interface SwitchProps {
  by: any;
  compareBy?: string;
  comparisonFunction?: (by, caseValue) => boolean;
}

const Switch: FunctionComponent<SwitchProps> = (props) => {
  const { by, compareBy, comparisonFunction, children } = props;

  const cases: CaseProps[] = React.Children.map(
    children,
    ((child: any) => child.props),
  );

  const validCase = cases.find((childCase) => {
    if (comparisonFunction) {
      return comparisonFunction(by, childCase.value);
    }

    if (compareBy) {
      return by[compareBy] === childCase.value[compareBy];
    }

    return by === childCase.value;
  });

  if (validCase) {
    const { component: CaseComponent, value: _caseValue, ...rest } = validCase;

    return <CaseComponent {...rest} />;
  }

  return null;
};

export default Switch;
