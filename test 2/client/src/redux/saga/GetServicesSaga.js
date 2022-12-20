import {
  call, put, takeEvery, 
} from 'redux-saga/effects';
import axios from 'axios';
import { failServices, successServicess, successOneService } from '../reducers/GetServicesReducer';

const fetchServicess = () => axios.get('http://localhost:7070/api/services');
const fetchOneService = (id) => axios.get(` http://localhost:7070/api/services/${id} `);

function* servicessSagaWorker(action) {
  try {
    const res = yield call(fetchServicess, action.payload);
    // console.log(res.data)
    yield put(successServicess(res.data));
  } catch (e) {
    yield put(failServices());
  }
}

function* servicessSagaWatcher() {
  yield takeEvery('GET_SERVICESS', servicessSagaWorker);
}
function* serviceSagaWorker(action) {
  try {
    const res = yield call(fetchOneService, action.payload);
    yield put(successOneService(res.data));
  } catch (e) {
    yield put(failServices());
  }
}

function* serviceSagaWatcher() {
  yield takeEvery('GET_ONESERVICE', serviceSagaWorker);
}

export { servicessSagaWatcher, serviceSagaWatcher };
