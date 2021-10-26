import themesReducer from '@redux/reducers/themes';
import {createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({themesReducer});
const store = createStore(rootReducer);
export let storeRef = store;
const configureStore = () => {
  return store;
};

export default configureStore;
