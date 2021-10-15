import React, {
  forwardRef,
  ReactNode,
  useCallback
} from 'react';
import { PositionProps, ValidationRules } from 'helpers';
import { FormProvider } from './context';
import { Form as StyledForm } from './styled';

interface Props extends PositionProps {
  id?: string;
  state: any;
  onChange: (value) => void;
  errors?: { [x: string]: string };
  onError?: (errors) => void;
  rules?: ValidationRules;
  children?: ReactNode;
}

const disableOnSubmit = (event) => {
  event.stopPropagation();
  event.preventDefault();
};

const Form = forwardRef<HTMLFormElement, Props>((props, ref) => {
  const {
    id,
    state,
    onChange,
    errors,
    onError,
    rules,
    children,
    ...rest
  } = props;

  const setField = useCallback((value) => {
    const nextState = { ...state, ...value };
    onChange(nextState);
  }, [state, onChange]);

  const setErrors = useCallback((error) => {
    if (errors && onError) {
      const nextErrors = { ...errors, ...error };
      onError(nextErrors);
    }
  }, [errors, onError]);

  return (
    <StyledForm id={id} ref={ref} onSubmit={disableOnSubmit} {...rest}>
      <FormProvider
        state={state}
        setField={setField}
        errors={errors}
        setErrors={setErrors}
        rules={rules}
      >
        {children}
      </FormProvider>
    </StyledForm>
  );
});

export default Form;
