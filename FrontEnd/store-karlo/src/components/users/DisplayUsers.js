import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import { useDispatch } from 'react-redux';

import { deleteUserAction, getUserToAction } from '../../actions/userAction';

const DisplayUsers = ({ user }) => {
    const { id, name, email } = user;

    // Instanciacion de Hook dispatch de react-redux
    const dispatch = useDispatch(); // Ejecucion de actions

    // Instanciacion de Hook history de react-redux
    const history = useHistory(); // Habilitar history para redireccion

    // Confirmar para eliminar
    const confirmDeleteUser = id => {
        // Preguntar al usuario
        Swal.fire({
            title: '¿Esta seguro de eliminarlo?',
            text: "Esta opción no podra ser revertida!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminalo!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                // pasarlo al action
                dispatch(deleteUserAction(id));
            }
        });
    }

    const redirectDetail = user => {
        dispatch(getUserToAction(user));
        history.push(`/users/detail/${user.id}`)
    }

    return (
        <Fragment>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                    <button
                        className='btn btn-link mr-2'
                        type='button'
                        onClick={() => redirectDetail(user)}
                    >
                        Ver detalle
                    </button>
                </td>
                <td>
                    <button
                        type='button'
                        className='btn btn-danger'
                        onClick={() => confirmDeleteUser(id)}
                    >
                        Eliminar
                    </button>
                </td>
            </tr>
        </Fragment>
    )
}

export default DisplayUsers;