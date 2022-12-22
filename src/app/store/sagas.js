import { all } from 'redux-saga/effects';
import authSaga from './auth/saga';

export default function* appSaga() {
  yield all([authSaga()]);
}
