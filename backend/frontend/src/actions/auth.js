import axios from 'axios';
import Cookies from 'js-cookie';
import { REGISTER_SUCCESS, REGISTER_FAILURE } from './types';

export const register = (username, password, re_password) => async dispatch => {
    const config = {
        headers: {
            'Accept' :'application/json',
            'Content-Type' : 'application/json',
            'X-CSRFToken' : Cookies.get('csrftoken')
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

    }



}