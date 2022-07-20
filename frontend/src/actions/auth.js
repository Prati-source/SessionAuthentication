import axios from 'axios';
import Cookies from 'js-cookie';
import { REGISTER_SUCCESS,
         REGISTER_FAILURE, 
         LOGIN_FAILURE, 
         LOGIN_SUCCESS, 
         LOGOUT_FAIL, 
         LOGOUT_SUCCESS,
         AUTHENTICATED_FAIL,
         AUTHENTICATED_SUCCESS,
          } from './types';
import {load_user} from './profile';
axios.defaults.withCredentials = true


export const checkAuthenticated = () => async dispatch => {
    const config = {
        headers: {
            'Accept' :'application/json',
            'Content-Type' : 'application/json',
            'X-CSRFToken' : Cookies.get('csrftoken'),

        }
    };



    try{
        const res = await axios.get('http://localhost:8000/account/authenticate',config);
        if(res.data.error || res.data.isAuthenticated === 'error'){
            dispatch({
                type:AUTHENTICATED_FAIL,
                payload:false
            })
        }
        else if (res.data.isAuthenticated === 'success'){
            dispatch({
                type:AUTHENTICATED_SUCCESS,
                payload:true
            })
        }
        else {
            dispatch({
                type:AUTHENTICATED_FAIL,
                payload:false
            })
        }
    }
    catch(err){
        dispatch({
            type:AUTHENTICATED_FAIL
        })
    }
};


export const login = (username,password) => async dispatch => {
    const config = {
        headers: {
            'Accept' :'application/json',
            'Content-Type' : 'application/json',
            'X-CSRFToken' : Cookies.get('csrftoken'),

        }
    };
    const body = JSON.stringify({username, password});

    try{
        const res = await axios.post('http://localhost:8000/account/login/',body,config);
        if(res.data.success){
            dispatch({
                type:LOGIN_SUCCESS,
                payload:res.data
            });
            dispatch(load_user());
        }
        else{
            dispatch({
                type:LOGIN_FAILURE
            })
        }
    }
    catch(err){
        dispatch({
            type:LOGIN_FAILURE
        })
    }
};


export const register = (username, password, re_password) => async dispatch => {
    const config = {
        headers: {
            'Accept' :'application/json',
            'Content-Type' : 'application/json',
            'X-CSRFToken' : Cookies.get('csrftoken'),

        }
    };

    const body = JSON.stringify({username, password, re_password});

    try {
            const res = await axios.post('http://localhost:8000/account/register/', body, config);

            if(res.data.error){
               dispatch({
                type : REGISTER_FAILURE
               })
            }
            else{
                dispatch({
                    type : REGISTER_SUCCESS
                })
            }
    } catch (err) {
        dispatch({type: REGISTER_FAILURE})
    }

};


export const logout = () => async dispatch => {
    const config = {
        headers: {
            'Accept' :'application/json',
            'Content-Type' : 'application/json',
            'X-CSRFToken' : Cookies.get('csrftoken')

        }
    };
    const body = ({ 'withCredentials' : true });

    try{
        const res = await axios.post('http://localhost:8000/account/logout/',body,config);
        if(res.data.success){
            dispatch({
                type:LOGOUT_SUCCESS,
               
            })
        }
        else{
            dispatch({
                type: LOGOUT_FAIL
            })
        }
    }
    catch(err){
        dispatch({
            type: LOGOUT_FAIL
        })
    }
};