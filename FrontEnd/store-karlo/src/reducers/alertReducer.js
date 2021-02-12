import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../types';

const initialState = {
    alert: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case MOSTRAR_ALERTA:
            return {
                ...state,
                alert: action.payload
            }
        case OCULTAR_ALERTA:
            return {
                ...state,
                alert: null
            }
        default:
            return state;
    }
}