import React, { createContext, FunctionComponent, useMemo } from 'react';
import { ValidationRules } from 'helpers';

interface Props {
  state: any;
  setField: (fields) => void;
  errors?: { [x: string]: string };
  setErrors?: (errors) => void;
  rules?: ValidationRules;
}

const FormContext = createContext<Props>(undefined);

export const FormProvider: FunctionComponent<Props> = (props) => {
  const { state, setField, errors, setErrors, rules, children } = props;
  const providerValue = useMemo(() => (
    {
      state,
      setField,
      errors,
      setErrors,
      rules,
    }
  ), [state, setField, errors, setErrors, rules]);

  return (
    <FormContext.Provider value={providerValue}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
