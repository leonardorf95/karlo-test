import {
    AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_EXITO, AGREGAR_PRODUCTO_ERROR, LISTADO_PRODUCTOS, LISTADO_PRODUCTOS_EXITO, LISTADO_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR, PRODUCTO_ELIMINADO_EXITO, PRODUCTO_ELIMINADO_ERROR, OBTENER_PRODUCTO_EDITAR, COMENZAR_EDICION_PRODUCTO, PRODUCTO_EDITADO_EXITO, PRODUCTO_EDITADO_ERROR
} from '../types/index';

const initialState = {
    products: [],
    error: false,
    loading: false,
    productDelete: null,
    productUpdate: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case LISTADO_PRODUCTOS:
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                loading: action.payload
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        case LISTADO_PRODUCTOS_ERROR:
        case AGREGAR_PRODUCTO_ERROR:
        case PRODUCTO_ELIMINADO_ERROR:
        case PRODUCTO_EDITADO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case LISTADO_PRODUCTOS_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }
        case OBTENER_PRODUCTO_ELIMINAR:
            return {
                ...state,
                productDelete: action.payload
            }
        case PRODUCTO_ELIMINADO_EXITO:
            return {
                ...state,
                products: state.products.filter(product => product.id !== state.productDelete)
            }
        case OBTENER_PRODUCTO_EDITAR:
            return {
                ...state,
                productUpdate: action.payload
            }
        case PRODUCTO_EDITADO_EXITO:
            return {
                ...state,
                productUpdate: null,
                products: state.products.map(product => product.id === action.payload.id ? product = action.payload : product)
            }
        default:
            return state;
    }
}