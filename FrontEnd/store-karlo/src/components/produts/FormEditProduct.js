import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { updateProdutAction } from '../../actions/productAction';

import Aside from '../layout/Aside';

const FormEditProduct = () => {
    // Instanciacion de Hook history de react-redux
    const history = useHistory();

    // Instanciacion de Hook dispatch de react-redux
    const dispatch = useDispatch();

    // State del componente
    const [product, setProduct] = useState({
        name: '',
        quantity: 0,
        price: 0
    });

    // Instanciacionn del Hook para poder acceder al state
    const productEdit = useSelector(state => state.products.productUpdate);

    // Hook para visualizar la informacion
    useEffect(() => {
        setProduct(productEdit);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productEdit]);

    // Listener que obtiene la informacion de los inputs
    const onChangeForm = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    // Distrocturing
    const { name, quantity, price } = product;

    // Metodo para enviar la informacion al dispatch de actualizado
    const sumitUpdateProduct = e => {
        e.preventDefault();

        dispatch(updateProdutAction(product));

        // Redirect a inicio de productos
        history.push('/products/');
    }

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row wrapper min-vh-100 flex-column flex-sm-row">
                    <Aside />

                    <main className="col bg-faded py-3">
                        <h1>Edita el producto</h1>

                        <form
                            onSubmit={sumitUpdateProduct}
                        >
                            <div className="form-group">
                                <label htmlFor="txtName">Nombre</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    id="txtName"
                                    name='name'
                                    value={name}
                                    onChange={onChangeForm}
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
                                    onChange={onChangeForm}
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
                                    onChange={onChangeForm}
                                />
                            </div>

                            <div className="form-group float-right">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        </Fragment>
    )
}

export default FormEditProduct;