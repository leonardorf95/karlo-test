import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPurchasesAction } from '../../actions/purchaseAction';

import Aside from '../layout/Aside';
import DisplayPurchase from './DisplayPurchase';

const Purchases = () => {
    // Instanciacion de Hook dispatch de react-redux
    const dispatch = useDispatch();

    // Hook para visualizar la informacion
    useEffect(() => {
        const loadPurchases = () => dispatch(getPurchasesAction());
        loadPurchases();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Obtener el state del store
    const purchases = useSelector(state => state.purchases.purchases);
    const error = useSelector(state => state.purchases.error);
    const loadingProcess = useSelector(state => state.purchases.loading);

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row wrapper min-vh-100 flex-column flex-sm-row">
                    <Aside />

                    <main className="col bg-faded py-3">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1>Listado de Ordenes de compra</h1>

                                <br />

                                {error ? (<p className='font-weight-bold alert alert-danger text-center mt-4'>Hubo un error</p>) : null}

                                {loadingProcess ? (<p className='text-center mt-4'>Cargando...</p>) : null}
                            </div>
                        </div>

                        <hr />

                        <div className="row">
                            <div className="col-md-2"></div>

                            <div className="col-md-8 text-center">
                                <table className='table table-responsive'>
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th scope='col'>Folio</th>
                                            <th scope='col'>SubTotal</th>
                                            <th scope='col'>Iva</th>
                                            <th scope='col'>Total</th>
                                            <th scope='col'>Acciones</th>
                                            <th scope='col'>
                                                <Link to={'/purchase/new'} className='btn btn-success btn-small'>
                                                    <i class="fas fa-plus"></i>
                                                </Link>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            purchases.length === 0 ? (<tr><th>No hay Ordenes de compra</th></tr>)
                                                : (purchases.map(purchase => (
                                                    <DisplayPurchase
                                                        key={purchase.id}
                                                        purchase={purchase} />
                                                )))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            
                            <div className="col-md-2"></div>
                        </div>
                    </main>
                </div>
            </div>
        </Fragment >
    )
}

export default Purchases;