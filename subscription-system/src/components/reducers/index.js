import { combineReducers } from 'redux'
import planReducer from './planReducer'
import subscriptionReducer from './subscriptionReducer'
import authReducers from "./authReducers";

export default combineReducers({
    plans: planReducer,
    subnscription: subscriptionReducer,
    auth: authReducers
})