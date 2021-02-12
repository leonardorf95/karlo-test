import {
    AGREGAR_USUARIO, AGREGAR_USUARIO_EXITO, AGREGAR_USUARIO_ERROR, LISTADO_USUARIOS, LISTADO_USUARIOS_EXITO, LISTADO_USUARIOS_ERROR,
    OBTENER_USUARIO_ELIMINAR, USUARIO_ELIMINADO_EXITO, USUARIO_ELIMINADO_ERROR, OBTENER_USUARIO_EDITAR, USUARIO_EDITADO_EXITO, USUARIO_EDITADO_ERROR,
    COMENZAR_EDICION_USUARIO
} from '../types/index';

const initialState = {
    users: [],
    error: false,
    loading: false,
    userToDelete: null,
    userToUpdate: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case AGREGAR_USUARIO:
        case LISTADO_USUARIOS:
            return {
                ...state,
                loading: action.payload
            }
        case AGREGAR_USUARIO_EXITO:
            return {
                ...state,
                loading: false,
                users: [...state.users, action.payload]
            }
        case AGREGAR_USUARIO_ERROR:
        case LISTADO_USUARIOS_ERROR:
        case USUARIO_ELIMINADO_ERROR:
        case USUARIO_EDITADO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case LISTADO_USUARIOS_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                users: action.payload
            }
        case OBTENER_USUARIO_ELIMINAR:
            return {
                ...state,
                userToDelete: action.payload
            }
        case USUARIO_ELIMINADO_EXITO:
            return {
                ...state,
                users: state.users.filter(user => user.id !== state.userToDelete)
            }
        case OBTENER_USUARIO_EDITAR:
            return {
                ...state,
                userToUpdate: action.payload
            }
        case USUARIO_EDITADO_EXITO:
            return {
                ...state,
                userToUpdate: null,
                users: state.users.map(user => user.id === action.payload ? user = action.payload : user)
            }
        default:
            return state;
    }
}