import { takeEvery, fork, put, all } from 'redux-saga/effects';
import { Action } from 'redux';
import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import * as c from './types';
import * as actions from './actions';

interface TaskAction extends Action, c.ILogin {
  type: typeof c.USER_LOGIN;
}

function* userLogin(data: c.ILogin) {
  try {
    const response: { token: string; type: string } = yield axios.get(
      `${process.env.PUBLIC_URL}/auth`,
      {
        data
      }
    );
    yield put(actions.userLoginSuccess(response));
    toastr.success('Success', 'You have logged in successfully');
  } catch (error) {
    const typedError = error as Error;
    yield put(actions.userLoginError(typedError.message));
    toastr.error('Error', typedError.toString());
  }
}

export function* watchUserLogin() {
  yield takeEvery<TaskAction>(c.USER_LOGIN, userLogin);
}

function* authSaga() {
  yield all([fork(watchUserLogin)]);
}

export default authSaga;
