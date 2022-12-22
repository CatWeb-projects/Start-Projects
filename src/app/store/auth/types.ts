export const SET_IS_AUTH = 'SET_IS_AUTH';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';

export interface ILogin {
  email: string;
  password: string;
}
