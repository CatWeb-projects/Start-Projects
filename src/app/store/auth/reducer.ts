import * as c from './types';

const initialState = {
  isLoggedIn: false,
  data: {},
  loading: false,
  error: null
};

const Auth = (
  state = initialState,
  action: { type: string; [key: string]: any } = { type: '' }
) => {
  const { type }: { type: string } = action;

  switch (type) {
    case c.SET_IS_AUTH: {
      return {
        ...state,
        isLoggedIn: action.isLoggedIn
      };
    }
    case c.USER_LOGIN: {
      return {
        ...state,
        data: action.data,
        loading: true,
        error: null
      };
    }
    case c.USER_LOGIN_SUCCESS: {
      return {
        ...state,
        data: { ...action.data },
        loading: false,
        error: null,
        isLoggedIn: true
      };
    }
    case c.USER_LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      };
    }
    default:
      return state;
  }
};

export default Auth;
