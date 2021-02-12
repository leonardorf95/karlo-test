import {
    AGREGAR_ORDEN_COMPRA, AGREGAR_ORDEN_COMPRA_EXITO, AGREGAR_ORDEN_COMPRA_ERROR, LISTADO_ORDEN_COMPRA, LISTADO_ORDEN_COMPRA_EXITO, LISTADO_ORDEN_COMPRA_ERROR,
    OBTENER_ORDEN_COMPRA_ELIMINAR, ORDEN_COMPRA_ELIMINADO_EXITO, ORDEN_COMPRA_ELIMINADO_ERROR, OBTENER_ORDEN_COMPRA
} from '../types/index';

const initialState = {
    purchases: [],
    error: false,
    loading: false,
    purchaseToDelete: null,
    purchaseByOne: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case AGREGAR_ORDEN_COMPRA:
        case LISTADO_ORDEN_COMPRA:
            return {
                ...state,
                loading: action.payload
            }
        case AGREGAR_ORDEN_COMPRA_EXITO:
            return {
                ...state,
                loading: false,
                purchases: [...state.purchases, action.payload]
            }
        case AGREGAR_ORDEN_COMPRA_ERROR:
        case LISTADO_ORDEN_COMPRA_ERROR:
        case ORDEN_COMPRA_ELIMINADO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case LISTADO_ORDEN_COMPRA_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                purchases: action.payload
            }
        case OBTENER_ORDEN_COMPRA_ELIMINAR:
            return {
                ...state,
                purchaseToDelete: action.payload
            }
        case ORDEN_COMPRA_ELIMINADO_EXITO:
            return {
                ...state,
                purchasehases: state.purchases.filter(user => user.id !== state.userToDelete)
            }
        case OBTENER_ORDEN_COMPRA:
            return {
                ...state,
                purchaseByOne: action.payload
            }
        default:
            return state;
    }
}