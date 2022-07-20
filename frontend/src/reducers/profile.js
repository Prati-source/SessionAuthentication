import { LOAD_USER_PROFILE_FAIL,
         LOAD_USER_PROFILE_SUCCESS,
         UPDATE_USER_PROFILE_FAIL,
         UPDATE_USER_PROFILE_SUCCESS
         } from "../actions/types";


         const initialState = {
            username:'',
            firstanem:'',
            lastname:'',
            city:'',
            phone:'',
        
           
        };



export default function ( state = initialState, action ){
    const {type,payload} = action;
    switch(type){
        case LOAD_USER_PROFILE_SUCCESS:
        case UPDATE_USER_PROFILE_SUCCESS:
            return{
                
                username: payload.username,
                firstname: payload.profile.firstname,
                lastname: payload.profile.lastname,
                city: payload.profile.city,
                phone: payload.profile.phone,
            }
        case LOAD_USER_PROFILE_FAIL:
            return{
                
                username: '',
                firstname: '',
                lastname: '',
                city: '',
                phone:'',          }
        case UPDATE_USER_PROFILE_FAIL:
            return{
                ...state
            }
        default:
            return{
                state
            }
    }
}

