import { REGISTER_FAILURE,
         REGISTER_SUCCESS, 
         LOGIN_FAILURE, 
         LOGIN_SUCCESS, 
         LOGOUT_FAIL, 
         LOGOUT_SUCCESS,
         AUTHENTICATED_FAIL,
         AUTHENTICATED_SUCCESS,
         } from "../actions/types";

const initialState = {
    isAuthenticated : null,

   
};


export default function (state = initialState, action ) {
    const { type, payload} = action;

    switch(type) {
        case REGISTER_SUCCESS:
            return{
                ...state,
                isAuthenticated: false 
            }
        case REGISTER_FAILURE:
            return {
                state
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                isAuthenticated:true,
                username: payload.username
            }
        case LOGIN_FAILURE:
            return{
                state
            }    
        case LOGOUT_SUCCESS:
            return{
                ...state,
                isAuthenticated:false,
            }    
        case LOGOUT_FAIL:
            return{
                state
            }
        case AUTHENTICATED_SUCCESS:    
        case AUTHENTICATED_FAIL:
            return{
                ...state,
                isAuthenticated:payload,
            
            }
        
        default: 
            return state    
    }


}
