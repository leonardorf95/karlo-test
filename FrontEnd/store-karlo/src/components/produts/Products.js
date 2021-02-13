import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getProductsAction } from '../../actions/productAction';

import Aside from '../layout/Aside';
import DisplayProduct from './DisplayProduct';

const Products = () => {
    // Instanciacion de Hook dispatch de react-redux
    const dispatch = useDispatch();

    // Hook para visualizar la informacion
    useEffect(() => {
        const loadProducts = () => dispatch(getProductsAction());
        loadProducts();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Obtener el state del store
    const products = useSelector(state => state.products.products);
    const error = useSelector(state => state.products.error);
    const loadingProcess = useSelector(state => state.products.loading);

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row wrapper min-vh-100 flex-column flex-sm-row">
                    <Aside />

                    <main className="col bg-faded py-3">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1>Listado de productos</h1>

                                <br />

                                {error ? (<p className='font-weight-bold alert alert-danger text-center mt-4'>Hubo un error</p>) : null}

                                {loadingProcess ? (<p className='text-center mt-4'>Cargando...</p>) : null}
                            </div>
                        </div>

                        <hr />

                        <div className="row">
                            <div className="col-md-3"></div>

                            <div className="col-md-6 text-center">
                                <table className='table table-responsive'>
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th scope='col'>Nombre</th>
                                            <th scope='col'>Cantidad</th>
                                            <th scope='col'>Precio</th>
                                            <th scope='col'>Acciones</th>
                                            <th scope='col'>
                                                <Link to={'/products/new'} className='btn btn-success btn-small'>
                                                    <i class="fas fa-plus"></i>
                                                </Link>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products.length === 0 ? (<tr><th>No hay Productos</th></tr>)
                                                : (products.map(product => (
                                                    <DisplayProduct
                                                        key={product.id}
                                                        product={product} />
                                                )))
                                        }
                                    </tbody>
                                </table>
                            </div>

                            <div className="col-md-3"></div>
                        </div>
                    </main>
                </div>
            </div>
        </Fragment>
    )
}

export default Products;