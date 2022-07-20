import { REGISTER_FAILURE, REGISTER_SUCCESS } from "../actions/types";

const initialState = {
    isAuthenticated : null,
    firstname:'',
    lastname:'',
    city:'',
    phone:''
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
        default: 
            return state    
    }


}
