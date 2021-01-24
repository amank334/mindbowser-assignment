import {CREATE_SUBSCRIPTION, FETCH_SUBSCRIPTION} from '../Constants';

export default (state={},action) =>{
    if(action.type===FETCH_SUBSCRIPTION)
        return {...state, ...action.paylod}
    else if(action.type===CREATE_SUBSCRIPTION)
        return {...state, ...action.paylod}
    else
        return state;    
}