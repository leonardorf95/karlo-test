import {
    AGREGAR_ORDEN_COMPRA, AGREGAR_ORDEN_COMPRA_EXITO, AGREGAR_ORDEN_COMPRA_ERROR, LISTADO_ORDEN_COMPRA, LISTADO_ORDEN_COMPRA_EXITO, LISTADO_ORDEN_COMPRA_ERROR,
    OBTENER_ORDEN_COMPRA_ELIMINAR, ORDEN_COMPRA_ELIMINADO_EXITO, ORDEN_COMPRA_ELIMINADO_ERROR, OBTENER_ORDEN_COMPRA
} from '../types/index';

import clientAxios from '../config/clientAxios';
import Swal from 'sweetalert2';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjEzMTA5MzE2LCJleHAiOjE2MTMxMTI5MTZ9.akw_DYBpPi0y4il-iFayBIw2rP2EFVN1PJeUfELCczM';

export function createNewPurchaseAction(purchase) {
    return async (dispatch) => {
        dispatch(addPurchase());

        try {
            await clientAxios.post('/api/purchase', purchase, {
                headers: {
                    'x-access-token': token
                }
            });

            dispatch(addPurchaseSuccess(purchase));

            Swal.fire(
                'Éxito',
                'La orden de compra se agrego correctamente',
                'success'
            );
        } catch (error) {
            console.log(error);

            dispatch(addPurchaseError(true));

            Swal.fire({
                icon: 'error',
                title: 'Se produjo un error',
                text: 'Hubo un error verifica que toda la información es correcta'
            });
        }
    }
}

const addPurchase = () => ({
    type: AGREGAR_ORDEN_COMPRA,
    payload: true
});

const addPurchaseSuccess = purchase => ({
    type: AGREGAR_ORDEN_COMPRA_EXITO,
    payload: purchase
});

const addPurchaseError = state => ({
    type: AGREGAR_ORDEN_COMPRA_ERROR,
    payload: state
});

export function getPurchasesAction() {
    return async (dispatch) => {
        dispatch(getPurchases());

        try {
            const response = await clientAxios.get('/api/purchase', {
                headers: {
                    'x-access-token': token
                }
            });

            dispatch(getPurchasesSuccess(response.data.items));
        } catch (error) {
            console.log(error);

            dispatch(getPurchasesError(true));

            Swal.fire({
                icon: 'error',
                title: 'Se produjo un error',
                text: 'Hubo un error verifica que la conexión sea estable'
            });
        }
    }
}

const getPurchases = () => ({
    type: LISTADO_ORDEN_COMPRA,
    payload: true
});

const getPurchasesSuccess = purchases => ({
    type: LISTADO_ORDEN_COMPRA_EXITO,
    payload: purchases
});

const getPurchasesError = state => ({
    type: LISTADO_ORDEN_COMPRA_ERROR,
    payload: state
});

export function deletePurchaseAction(id) {
    return async (dispatch) => {
        dispatch(getPurchaseToDelete(id));

        try {
            await clientAxios.delete(`/api/purchase/${id}`, {
                headers: {
                    'x-access-token': token
                }
            });

            dispatch(deletePurchaseSuccess(id));

            Swal.fire(
                'Eliminado!',
                'El registro ha sido eliminado.',
                'success'
            )
        } catch (error) {
            console.log(error);

            dispatch(deletePurchaseError(true));

            Swal.fire({
                icon: 'error',
                title: 'Se produjo un error',
                text: 'Hubo un error verifica que la conexión sea estable'
            });
        }
    }
}

const getPurchaseToDelete = id => ({
    type: OBTENER_ORDEN_COMPRA_ELIMINAR,
    payload: id
});

const deletePurchaseSuccess = id => ({
    type: ORDEN_COMPRA_ELIMINADO_EXITO,
    payload: id
});

const deletePurchaseError = state => ({
    type: ORDEN_COMPRA_ELIMINADO_ERROR,
    payload: state
});

export function getPurchaseToAction(purchase) {
    return async (dispatch) => {
        dispatch(getPurchase(purchase));
    }
}

const getPurchase = purchase => ({
    type: OBTENER_ORDEN_COMPRA,
    payload: purchase
});