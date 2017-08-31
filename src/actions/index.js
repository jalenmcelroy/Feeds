import { INITIALIZE_NAVIGATOR, TOGGLE_APP_PICKER, LOGIN } from './types';

export const initializeNavigator = (navigator) => {
  return {
    type: INITIALIZE_NAVIGATOR,
    payload: navigator
  };
};

export const togglePicker = () => {
  return { type: TOGGLE_APP_PICKER };
};

export const login = (loginInfo) => {
  return {
    type: LOGIN,
    payload: loginInfo
  };
};
