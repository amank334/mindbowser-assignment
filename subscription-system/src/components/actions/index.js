import service from "../../services/service";
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_PLAN,
  CREATE_SUBSCRIPTION,
  FETCH_SUBSCRIPTION,
} from "../Constants";
import { plansData } from "../data";

import history from '../../services/history'


export const signIn = userId => {
    return {
        type : SIGN_IN,
        payload : userId
    }
}

export const signOut = () => {
    return {
        type : SIGN_OUT,
    }
}


export const createSubscription = formValues => async (dispatch) => {
    const response = await service.post('/subscription',formValues);
    dispatch({type:CREATE_SUBSCRIPTION,payload:response.data})
    history.push('/home');
}

export const fetchSubscription = id => async (dispatch) => {
    const response = await service.get(`/subscription/${id}`);
    dispatch({type:FETCH_SUBSCRIPTION,payload:response.data})
}

export const fetchPlans = () => async (dispatch) => {
    //const response = await service.get('/plans');
    console.log(plansData);
    dispatch({type:FETCH_PLAN,payload:plansData})
}