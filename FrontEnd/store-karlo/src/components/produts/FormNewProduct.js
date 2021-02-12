import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createNewProductAction } from '../../actions/productAction';
import { showAlert, hideAlert } from '../../actions/alertAction';

import Aside from '../layout/Aside';

const FormNewProduct = ({ history }) => {
    // state del componente
    const [name, setName] = useState('');
    const [quantity, setQty] = useState(0);
    const [price, setPrice] = useState(0);

    // utiliza use dispatch y te crea una funcion
    const dispatch = useDispatch();

    // Mandar llamar el ation de product Action
    const addProduct = product => dispatch(createNewProductAction(product));

    // Acceder al state del store
    const loadingProcess = useSelector(state => state.products.loading);
    const errorProcess = useSelector(state => state.products.error);
    const alert = useSelector(state => state.alert.alert);

    // Cuando el usuario haga submit
    const submitANewProdut = e => {
        e.preventDefault();

        if (name.trim() === '' || quantity <= 0 || price <= 0) {
            const response = {
                message: 'Ambos campos son obligatorios',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }

            dispatch(showAlert(response));

            return;
        }

        dispatch(hideAlert());

        addProduct({
            name,
            quantity,
            price
        });

        history.push('/products/');
    }

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row wrapper min-vh-100 flex-column flex-sm-row">
                    <Aside />

                    <main className="col bg-faded py-3">
                        <h1>Crear Producto</h1>

                        {alert ? (<p className={alert.classes}>{alert.message}</p>) : null}

                        <form
                            onSubmit={submitANewProdut}
                        >
                            <div className="form-group">
                                <label htmlFor="txtName">Nombre</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    id="txtName"
                                    name='name'
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="txtQty">Cantidad</label>

                                <input
                                    type="number"
                                    className="form-control"
                                    id="txtQty"
                                    name='quantity'
                                    min='0'
                                    value={quantity}
                                    onChange={e => setQty(Number(e.target.value))}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="txtPrice">Precio</label>

                                <input
                                    type="number"
                                    className="form-control"
                                    id="txtPrice"
                                    name='price'
                                    min='0'
                                    step="0.01"
                                    value={price}
                                    onChange={e => setPrice(Number(e.target.value))}
                                />
                            </div>

                            <div className="form-group float-right">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>

                        {loadingProcess ? <p>Cargando...</p> : null}
                        {errorProcess ? <p className='alert alert-danger p2 mt-4 text-center'>Hubo un Error</p> : null}
                    </main>
                </div>
            </div>
        </Fragment>
    )
}

export default FormNewProduct;