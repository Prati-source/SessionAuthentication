import { LOAD_USER_PROFILE_FAIL,
         LOAD_USER_PROFILE_SUCCESS ,
         UPDATE_USER_PROFILE_FAIL,
        UPDATE_USER_PROFILE_SUCCESS,
           } from "./types";
import axios from "axios";
import Cookies from "js-cookie";
axios.defaults.withCredentials = true


export const update_user = ( firstname, lastname,city, phone) => async dispatch => {
    const config = {
        headers: {
            'Accept' :'application/json',
            'Content-Type' : 'application/json',
            'X-CSRFToken' : Cookies.get('csrftoken'),

        }
    };

    const body = JSON.stringify({ firstname, lastname,  city, phone});

    try {
            const res = await axios.put('http://localhost:8000/user_profile/update/', body, config);

            if(res.data.error){
               dispatch({
                type : UPDATE_USER_PROFILE_FAIL
               })
            }
            else{
                dispatch({
                    type : UPDATE_USER_PROFILE_SUCCESS,
                    payload: res.data
                })
            }
    } catch (err) {
        dispatch({type: UPDATE_USER_PROFILE_FAIL})
    }

};

export const load_user = () => async dispatch => {
    const config = ({
        headers: {
            'Accept' :'application/json',
            'Content-Type' : 'application/json',
            
        }
    });

    
    try{
         const res = await axios.get('http://localhost:8000/user_profile/profile', config)

        if(res.data.error){
            dispatch({
                type: LOAD_USER_PROFILE_FAIL
            })
        }
        else{
         dispatch({
            type: LOAD_USER_PROFILE_SUCCESS,
            payload: res.data
         })
        }
    }
    catch(err){
        dispatch({
            type: LOAD_USER_PROFILE_FAIL,
        })
    }


}