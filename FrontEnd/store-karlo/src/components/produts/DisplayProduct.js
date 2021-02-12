import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import { useDispatch } from 'react-redux';
import { deleteProductAction, getEditProduct } from '../../actions/productAction';

const DisplayProduct = ({ product }) => {
    // Distrocturing
    const { id, name, quantity, price } = product;

    // Instanciacion de Hook dispatch de react-redux
    const dispatch = useDispatch(); // Ejecucion de actions

    // Instanciacion de Hook history de react-redux
    const history = useHistory(); // Habilitar history para redireccion

    // Confirmar para eliminar
    const confirmDeleteProduct = id => {
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
                dispatch(deleteProductAction(id));
            }
        });
    }

    // funcion que redirige 
    const redirectEdition = product => {
        dispatch(getEditProduct(product));
        history.push(`/products/edit/${product.id}`)
    }

    return (
        <Fragment>
            <tr>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>$ {price}</td>
                <td>
                    <button
                        className='btn btn-link mr-2'
                        type='button'
                        onClick={() => redirectEdition(product)}
                    >
                        Editar
                    </button>

                    <button
                        type='button'
                        className='btn btn-danger'
                        onClick={() => confirmDeleteProduct(id)}
                    >
                        Eliminar
                    </button>
                </td>
            </tr>
        </Fragment>
    )
}

export default DisplayProduct;