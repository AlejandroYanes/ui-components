/* eslint-disable max-len */
import { emailRegex, urlRegex } from './regex-collection';

export const isValidEmail = (email: string): boolean => {
  if (email === '') {
    return true;
  }
  return emailRegex.test(email);
};

export const isValidWebSite = (url: string): boolean => {
  if (url === '') {
    return true;
  }

  return urlRegex.test(url);
};
