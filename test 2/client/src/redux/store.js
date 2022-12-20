import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import GetServicesReducer from './reducers/GetServicesReducer';
import { rootSaga } from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: {
    services: GetServicesReducer,
  },
  middleware: (mid) => [...mid({
    serializableCheck: false,
  }), sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
