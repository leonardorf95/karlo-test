import {
    SINGIN, SINGIN_EXITO, SINGIN_ERROR
} from '../types/index';

import clientAxios from '../config/clientAxios';
import Swal from 'sweetalert2';

export function logInAction(user) {
    return async (dispatch) => {
        dispatch(singIn());

        try {
            const response = await clientAxios.post(`/api/users/`, user);

            const token = response.data.token;

            localStorage.setItem('token', token);

            dispatch(singInSuccess(token));

            Swal.fire(
                'Éxitoso',
                'Se ha iniciado sesión de manera correcta',
                'success'
            )

            setTimeout(() => {
                window.location.href = '/';
            }, 3000);
        } catch (error) {
            console.log(error);

            dispatch(singInError(true));

            // Alert
            Swal.fire({
                icon: 'error',
                title: 'Se produjo un error',
                text: 'Hubo un error verifica que toda la información es correcta'
            });
        }
    }
}

const singIn = () => ({
    type: SINGIN,
    payload: true
});

const singInSuccess = token => ({
    type: SINGIN_EXITO,
    payload: token
});

const singInError = state => ({
    type: SINGIN_ERROR,
    payload: state
});