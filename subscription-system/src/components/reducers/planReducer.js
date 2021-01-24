import {FETCH_PLAN} from '../Constants';

export default (state=[],action) =>{
    if(action.type===FETCH_PLAN)
        return [...state, action.paylod]
    else
        return state;    
}