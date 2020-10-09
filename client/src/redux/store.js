import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import * as apis from '../apis';

const devtool = (process.env.NODE_ENV === 'development' && typeof window === 'object')
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  })
  : compose;

const store = createStore(reducer, devtool(
  applyMiddleware(thunk.withExtraArgument({ apis })),
));

export default store;
