import {
    AGREGAR_PRODUCTO, AGREGAR_PRODUCTO_EXITO, AGREGAR_PRODUCTO_ERROR, LISTADO_PRODUCTOS, LISTADO_PRODUCTOS_EXITO, LISTADO_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR, PRODUCTO_ELIMINADO_EXITO, PRODUCTO_ELIMINADO_ERROR, OBTENER_PRODUCTO_EDITAR, COMENZAR_EDICION_PRODUCTO, PRODUCTO_EDITADO_EXITO,
    PRODUCTO_EDITADO_ERROR
} from '../types/index';

import clientAxios from '../config/clientAxios';
import Swal from 'sweetalert2';

const token = localStorage.getItem('token');

// Funcion que se mandara a llamnar en el componente 
export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch(addProduct());

        try {
            // insertar en la api
            await clientAxios.post('/api/products', product, {
                headers: {
                    'x-access-token': token
                }
            });

            // Si todo sale bien
            dispatch(addProductSuccess(product));

            // Alert
            Swal.fire(
                'Éxito',
                'El producto se agrego correctamente',
                'success'
            );
        } catch (error) {
            console.log(error);

            dispatch(addProductError(true));

            // Alert
            Swal.fire({
                icon: 'error',
                title: 'Se produjo un error',
                text: 'Hubo un error verifica que toda la información es correcta'
            });
        }
    }
}

// Funcion para agregar un nuevo producto
const addProduct = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

// Si se guarda en la bd
const addProductSuccess = product => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: product
});

// Si ocurre un error
const addProductError = state => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: state
});

// Funcion que se mandara a llamnar en el componente 
export function getProductsAction() {
    return async (dispatch) => {
        dispatch(getProducts());

        try {
            const response = await clientAxios.get('/api/products', {
                headers: {
                    'x-access-token': token
                }
            });

            dispatch(loadProductsSuccess(response.data.items));
        } catch (error) {
            console.log(error);

            dispatch(loadProductsError(true));

            // Alert
            Swal.fire({
                icon: 'error',
                title: 'Se produjo un error',
                text: 'Hubo un error no se pudo completar la petición'
            });
        }
    }
}

const getProducts = () => ({
    type: LISTADO_PRODUCTOS,
    payload: true
});

const loadProductsSuccess = products => ({
    type: LISTADO_PRODUCTOS_EXITO,
    payload: products
});

const loadProductsError = state => ({
    type: LISTADO_PRODUCTOS_ERROR,
    payload: state
});

// Funcion que se mandara a llamnar en el componente 
export function deleteProductAction(id) {
    return async (dispatch) => {
        dispatch(getProductToDelete(id));

        try {
            await clientAxios.delete(`/api/products/${id}`, {
                headers: {
                    'x-access-token': token
                }
            });

            dispatch(deleteSuccess(id));

            Swal.fire(
                'Eliminado!',
                'El registro ha sido eliminado.',
                'success'
            )
        } catch (error) {
            console.log(error);

            dispatch(deleteError(id));

            // Alert
            Swal.fire({
                icon: 'error',
                title: 'Se produjo un error',
                text: 'Hubo un error no se pudo completar la petición'
            });
        }
    }
}

const getProductToDelete = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
});

const deleteSuccess = () => ({
    type: PRODUCTO_ELIMINADO_EXITO
});

const deleteError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
});

// Funcion que se mandara a llamnar en el componente 
export function getEditProduct(product) {
    return async (dispatch) => {
        dispatch(getProductToAction(product));
    }
}

const getProductToAction = product => ({
    type: OBTENER_PRODUCTO_EDITAR,
    payload: product
});

// Funcion que se mandara a llamnar en el componente 
export function updateProdutAction(product) {
    return async (dispatch) => {
        dispatch(editProduct());

        try {
            await clientAxios.put(`/api/products/${product.id}`, product, {
                headers: {
                    'x-access-token': token
                }
            });

            dispatch(updatedSuccess(product));
        } catch (error) {
            console.log(error);

            dispatch(updateError());

            // Alert
            Swal.fire({
                icon: 'error',
                title: 'Se produjo un error',
                text: 'Hubo un error no se pudo completar la petición'
            });
        }
    }
}

const editProduct = () => ({
    type: COMENZAR_EDICION_PRODUCTO
});

const updatedSuccess = product => ({
    type: PRODUCTO_EDITADO_EXITO,
    payload: product
});

const updateError = () => ({
    type: PRODUCTO_EDITADO_ERROR,
    payload: true
});