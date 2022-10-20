import { SIGNUP_USER, LOGIN_USER, LOG_USER_IN } from "../action/userAppStorage";


const initialState = {
    token: "",
    expiresIn: "",
    admin: null
}



export const userAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_USER:
            if (action.payload) {
                console.log(action.payload)
                return {
                    ...state,
                }
            }
            break;
        case LOGIN_USER:
            return {
                ...state,
                admin: action.payload.admin,
            }

            break;
        case LOG_USER_IN:
            return {
                ...state,
                admin: action.payload.admin,
            }

            break;


        default:
            return state
            break;
    }

}

