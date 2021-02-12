import {
    SINGIN, SINGIN_EXITO, SINGIN_ERROR, SINGOUT
} from '../types/index';

const initialState = {
    token: null,
    user: null,
    error: false,
    loading: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case SINGIN:
            return {
                ...state,
                loading: action.payload
            }
        case SINGIN_EXITO:
            return {
                ...state,
                token: action.payload
            }
        case SINGIN_ERROR:
            return {
                ...state,
                token: null,
                user: null,
                error: false,
                loading: false
            }
        case SINGOUT:
            return {
                ...state,
                token: null,
                user: null
            }
        default:
            return state;
    }
}