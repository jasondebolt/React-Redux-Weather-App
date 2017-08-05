import { combineReducers } from 'redux';
import WeatcherReducer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatcherReducer
});

export default rootReducer;
