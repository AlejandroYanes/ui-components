import { isValidEmail, isValidWebSite } from './input-validations';
import { passwordRegex } from './regex-collection';

export enum RuleType {
  Required = 'Required',
  MinLength = 'MinLength',
  MaxLength = 'MaxLength',
  Min = 'Min',
  Max = 'Max',
  Email = 'Email',
  WebSite = 'WebSite',
  MatchRegExp = 'MatchRegExp',
}

export interface ValidationRule {
  type: RuleType;
  value?: number | RegExp;
  message: string;
}

export type FunctionRule<T = any> = (value, entity: T) => string;

export interface ValidationRules {
  [x: string]: (ValidationRule | FunctionRule) [];
}

export const commonRules = {
  required: {
    type: RuleType.Required,
    message: 'We need this information',
  },
  email: {
    type: RuleType.Email,
    message: 'This is not a valid email',
  },
  website: {
    type: RuleType.WebSite,
    message: 'This is not a valid url',
  },
  password: {
    type: RuleType.MatchRegExp,
    value: passwordRegex,
    message: 'The password does not meet the requirements'
  },
};

function hasValue(value) {
  return value !== undefined && value !== null && value !== '';
}

function checkMinLength(value, matchValue, message) {
  return hasValue(value) && value.toString().length < matchValue
    ? message
    : undefined;
}

function checkMaxLength(value, matchValue, message) {
  return hasValue(value) && value.toString().length > matchValue
    ? message
    : undefined;
}

function checkMinValue(value, matchValue, message) {
  return hasValue(value) && parseFloat(value) < matchValue
    ? message
    : undefined;
}

function checkMaxValue(value, matchValue, message) {
  return hasValue(value) && parseFloat(value) > matchValue
    ? message
    : undefined;
}

export function checkCommonRules(rule: ValidationRule, value) {
  const { type, message, value: matchValue } = rule;

  switch (type) {
    case RuleType.Required:
      return !hasValue(value) ? message : undefined;
    case RuleType.MinLength:
      return checkMinLength(value, matchValue, message);
    case RuleType.MaxLength:
      return checkMaxLength(value, matchValue, message);
    case RuleType.Min:
      return checkMinValue(value, matchValue, message);
    case RuleType.Max:
      return checkMaxValue(value, matchValue, message);
    case RuleType.Email:
      return hasValue(value) && !isValidEmail(value) ? message : undefined;
    case RuleType.WebSite:
      return hasValue(value) && !isValidWebSite(value) ? message : undefined;
    case RuleType.MatchRegExp:
      const isMatch = (matchValue as RegExp).test(value);
      return hasValue(value) && !isMatch
        ? message
        : undefined;
    default:
      return undefined;
  }
}

export function checkValidationRules(
  rules: (ValidationRule | FunctionRule)[],
  value,
  entity,
): string {
  let error;

  for (let i = 0; i < rules.length && !error; i += 1) {
    const rule = rules[i];

    if (typeof rule === 'function') {
      error = rule(value, entity);
    } else {
      error = checkCommonRules(rule as ValidationRule, value);
    }
  }

  return error;
}

interface Validation {
  hasErrors: boolean;
  errors: { [field: string]: string };
}

export function validateEntity(entity, rules: ValidationRules): Validation {
  const fieldsToValidate = Object.keys(rules);
  const errors = fieldsToValidate.reduce((accumulated, field) => ({
    ...accumulated,
    [field]: checkValidationRules(rules[field], entity[field], entity),
  }), {} as any);

  return {
    hasErrors: Object.values(errors).some((error) => !!error),
    errors,
  };
}
