import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddlewre from "redux-saga";
import { appReducer } from "./reducer";
import { rootSaga } from "./sagas";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddlewre();

export default createStore(
  appReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
