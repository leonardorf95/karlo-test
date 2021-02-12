import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import { useDispatch } from 'react-redux';
import { deletePurchaseAction, getPurchaseToAction } from '../../actions/purchaseAction';

const DisplayPurchase = ({ purchase }) => {
    const {id, subTotal, iva, total} = purchase;

    // Instanciacion de Hook dispatch de react-redux
    const dispatch = useDispatch(); // Ejecucion de actions

    // Instanciacion de Hook history de react-redux
    const history = useHistory(); // Habilitar history para redireccion

    // Confirmar para eliminar
    const confirmDeletePurchase = id => {
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
                dispatch(deletePurchaseAction(id));
            }
        });
    }

    // funcion que redirige 
    const redirectToDetail = purchase => {
        dispatch(getPurchaseToAction(purchase));
        history.push(`/purchase/detail/${purchase.id}`)
    }
    return (
        <Fragment>
            <tr>
                <td>{id}</td>
                <td>$ {subTotal}</td>
                <td>$ {iva}</td>
                <td>$ {total}</td>
                <td>
                    <button
                        className='btn btn-link mr-2'
                        type='button'
                        onClick={() => redirectToDetail(purchase)}
                    >
                        Editar
                    </button>

                    <button
                        type='button'
                        className='btn btn-danger'
                        onClick={() => confirmDeletePurchase(id)}
                    >
                        Eliminar
                    </button>
                </td>
            </tr>
        </Fragment>
    )
}

export default DisplayPurchase;