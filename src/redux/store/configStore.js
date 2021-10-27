import newstoriesReducer from '@redux/reducers/newstories';
import themesReducer from '@redux/reducers/themes';
import userReducer from '@redux/reducers/user';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  themesReducer,
  userReducer,
  newstoriesReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export let storeRef = store;
const configureStore = () => {
  return store;
};

export default configureStore;
