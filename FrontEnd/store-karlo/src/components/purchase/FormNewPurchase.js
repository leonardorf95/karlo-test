import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsersAction } from '../../actions/userAction';
import { getProductsAction } from '../../actions/productAction';

import Aside from '../layout/Aside';

const FormNewPurchase = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const loadUsers = () => dispatch(getUsersAction());
        loadUsers();

        const loadProducts = () => dispatch(getProductsAction());
        loadProducts();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const users = useSelector(state => state.users.users);
    const products = useSelector(state => state.products.products);

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row wrapper min-vh-100 flex-column flex-sm-row">
                    <Aside />

                    <main className="col bg-faded py-3">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1>Crear Orden de Compra</h1>

                                <br />
                            </div>
                        </div>

                        <hr />

                        <div className='row'>
                            <div className="col-md-2"></div>

                            <div className="col-md-8">
                                <form>
                                    <div className="form-group row">
                                        <label htmlFor="staticUser" className="col-sm-4 col-form-label">Escoge al Usuario</label>

                                        <div className="col-sm-8">
                                            <select name="userPurchase" id="userPurchase" className='form-control text-uppercase'>
                                                {
                                                    users.length === 0 ? (<option value={0}>No hay Usuarios</option>)
                                                        : (users.map(user => (
                                                            <option value={user.id}>{user.name}</option>
                                                        )))
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="staticProduct" className="col-sm-12 col-form-label">Selecciona el producto (Click en el producto para agregar)</label>
                                    </div>
                                </form>
                            </div>

                            <div className="col-md-2"></div>
                        </div>
                    </main>
                </div>
            </div>
        </Fragment >
    )
}

export default FormNewPurchase;