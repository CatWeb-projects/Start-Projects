import * as c from './types';

export const setIsAuth = (isLoggedIn: boolean) => {
  return {
    type: c.SET_IS_AUTH,
    isLoggedIn
  };
};

export const userLogin = (data: c.ILogin) => {
  return {
    type: c.USER_LOGIN,
    data
  };
};

export const userLoginSuccess = (payload: { token: string; type: string }) => {
  return {
    type: c.USER_LOGIN_SUCCESS,
    payload
  };
};

export const userLoginError = (error: string) => {
  return {
    type: c.USER_LOGIN_ERROR,
    error
  };
};
