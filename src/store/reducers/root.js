import { combineReducers } from 'redux';
import cartCounterReducer from './cartCounter';
import cartProductReducer from './cartProduct';
import todoReducer from './todo';

const rootReducer = combineReducers({
    count: cartCounterReducer,
    cart: cartProductReducer,
    todos: todoReducer
});

export default rootReducer;