import { all } from 'redux-saga/effects';
import { servicessSagaWatcher, serviceSagaWatcher } from './GetServicesSaga';

export function* rootSaga() {
  yield all([
    servicessSagaWatcher(),
    serviceSagaWatcher(),
  ]);
}
