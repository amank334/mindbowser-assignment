import {
    SIGN_IN,
    SIGN_OUT
} from '../Constants'
const INITIAL_STATE = {
    isSignedIn: null,
    managerId : null
}

export default (state=INITIAL_STATE,action) =>{
    switch (action.type) {
        case SIGN_IN:
            return {...state, isSignedIn: true, managerId: action.payload};
        case SIGN_OUT:
            return {...state, isSignedIn: false, managerId: null};
        default:
            return state;
    }
}