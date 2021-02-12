import {
    AGREGAR_USUARIO, AGREGAR_USUARIO_EXITO, AGREGAR_USUARIO_ERROR, LISTADO_USUARIOS, LISTADO_USUARIOS_EXITO, LISTADO_USUARIOS_ERROR,
    OBTENER_USUARIO_ELIMINAR, USUARIO_ELIMINADO_EXITO, USUARIO_ELIMINADO_ERROR, OBTENER_USUARIO
} from '../types/index';

import clientAxios from '../config/clientAxios';
import Swal from 'sweetalert2';

const token = localStorage.getItem('token');

export function createNewUserAction(user) {
    return async (dispatch) => {
        dispatch(addUser());

        try {
            await clientAxios.post('/api/auth', user, {
                headers: {
                    'x-access-token': token
                }
            });

            dispatch(addUserSuccess(user));

            Swal.fire(
                'Éxito',
                'El usuario se agrego correctamente',
                'success'
            );
        } catch (error) {
            console.log(error);

            dispatch(addUserError(true));

            Swal.fire({
                icon: 'error',
                title: 'Se produjo un error',
                text: 'Hubo un error verifica que toda la información es correcta'
            });
        }
    }
}

const addUser = () => ({
    type: AGREGAR_USUARIO,
    payload: true
});

const addUserSuccess = user => ({
    type: AGREGAR_USUARIO_EXITO,
    payload: user
});

const addUserError = state => ({
    type: AGREGAR_USUARIO_ERROR,
    payload: state
});

export function getUsersAction() {
    return async (dispatch) => {
        dispatch(getUsers());

        try {
            const response = await clientAxios.get('/api/users', {
                headers: {
                    'x-access-token': token
                }
            });

            dispatch(getUsersSuccess(response.data.items));
        } catch (error) {
            console.log(error);

            dispatch(getUsersError(true));

            Swal.fire({
                icon: 'error',
                title: 'Se produjo un error',
                text: 'Hubo un error verifica que la conexión sea estable'
            });
        }
    }
}

const getUsers = () => ({
    type: LISTADO_USUARIOS,
    payload: true
});

const getUsersSuccess = users => ({
    type: LISTADO_USUARIOS_EXITO,
    payload: users
});

const getUsersError = state => ({
    type: LISTADO_USUARIOS_ERROR,
    payload: state
});

export function deleteUserAction(id) {
    return async (dispatch) => {
        dispatch(getUserToDelete(id));

        try {
            await clientAxios.delete(`/api/users/${id}`, {
                headers: {
                    'x-access-token': token
                }
            });

            dispatch(deleteUserSuccess(id));

            Swal.fire(
                'Eliminado!',
                'El registro ha sido eliminado.',
                'success'
            )
        } catch (error) {
            console.log(error);

            dispatch(deleteUserError(true));

            Swal.fire({
                icon: 'error',
                title: 'Se produjo un error',
                text: 'Hubo un error verifica que la conexión sea estable'
            });
        }
    }
}

const getUserToDelete = id => ({
    type: OBTENER_USUARIO_ELIMINAR,
    payload: id
});

const deleteUserSuccess = id => ({
    type: USUARIO_ELIMINADO_EXITO,
    payload: id
});

const deleteUserError = state => ({
    type: USUARIO_ELIMINADO_ERROR,
    payload: state
});

export function getUserToAction(user) {
    return async (dispatch) => {
        dispatch(getUser(user));
    }
}

const getUser = user => ({
    type: OBTENER_USUARIO,
    payload: user
});
