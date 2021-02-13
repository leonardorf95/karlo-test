import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { getUsersAction } from '../../actions/userAction';
import { getProductsAction } from '../../actions/productAction';
import { createNewPurchaseAction } from '../../actions/purchaseAction';

import Aside from '../layout/Aside';

const FormNewPurchase = () => {
    // State del usuario
    const [subTotal, setSubTotal] = useState(0);
    const [iva, setIva] = useState(0);
    const [total, setTotal] = useState(0);

    // Instanciacion de Hook history de react-redux
    const history = useHistory();

    const dispatch = useDispatch();

    const addPurchase = purchase => dispatch(createNewPurchaseAction(purchase));

    useEffect(() => {
        const loadUsers = () => dispatch(getUsersAction());
        loadUsers();

        const loadProducts = () => dispatch(getProductsAction());
        loadProducts();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const users = useSelector(state => state.users.users);
    const products = useSelector(state => state.products.products);

    const submitPurchase = e => {
        e.preventDefault();

        const user = document.querySelector('select');
        const isMatch = document.querySelectorAll('input[type="checkbox"]');
        const isValue = document.querySelectorAll('input[type="number"]');
        const isValuedTotal = document.querySelectorAll('td');
        const sinIva = 0.16;
        const conIva = 1.16;

        let productsSend = [];
        let quantities = [];
        let subtotals = [];
        let subtotal = 0;
        let iva = 0;
        let total = 0;

        // Usuario
        const userId = user.value;

        // Obtiene todos los seleccionados
        for (let i = 0; i < isMatch.length; i++) {
            if (isMatch[i].checked) {
                productsSend.push({ id: isMatch[i].id });
            }
        }

        // Diferentes a cero
        for (let i = 0; i < isValue.length; i++) {
            if (isValue[i].value !== '') {
                quantities.push({ id: isValue[i].id, qty: isValue[i].value });
            }
        }

        for (let i = 0; i < isValuedTotal.length; i++) {
            if (isValuedTotal[i].id !== '') {
                subtotals.push({ id: isValuedTotal[i].id, value: isValuedTotal[i].textContent.substring(2) });
            }
        }

        for (let i = 0; i < quantities.length; i++) {
            for (let j = 0; j < subtotals.length; j++) {
                if (quantities[i].id === subtotals[j].id) {
                    let value = parseInt(quantities[i].qty) * parseFloat(subtotals[j].value);
                    subtotal += value;
                }
            }
        }

        setSubTotal(subtotal);
        iva = parseFloat(subtotal) * sinIva;
        setIva(iva);
        total = parseFloat(subtotal) * conIva;
        setTotal(total);

        addPurchase({
            subTotal: subtotal,
            iva: iva,
            total: total,
            userId: userId,
            products: productsSend
        });

        setTimeout(() => {
            history.push('/purchase/');
        }, 3000);
    }

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
                                <form
                                    onSubmit={submitPurchase}
                                >
                                    <div className="form-group row">
                                        <label htmlFor="staticUser" className="col-sm-4 col-form-label">Escoge al Usuario</label>

                                        <div className="col-sm-8">
                                            <select name="userPurchase" id="userPurchase" className='form-control text-uppercase'>
                                                {
                                                    users.length === 0 ? (<option value={0}>No hay Usuarios</option>)
                                                        : (users.map(user => (
                                                            <option
                                                                value={user.id}
                                                            >{user.name}</option>
                                                        )))
                                                }
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="staticProduct" className="col-sm-12 col-form-label">Selecciona el producto (Click en el producto para agregar y agregue la cantidad)</label>

                                        <div className="col-sm-12">
                                            <table className='table'>
                                                <thead className='thead-dark'>
                                                    <tr>
                                                        <th scope='col'>Id</th>
                                                        <th scope='col'>Nombre</th>
                                                        <th scope='col'>Precio Unitario</th>
                                                        <th scope='col'>Cantidad</th>
                                                        <th scope='col'>Agregar</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        products.length === 0 ? (<tr><th>No hay Productos</th></tr>)
                                                            : (products.map(product => (
                                                                <tr id={product.id}>
                                                                    <td>{product.id}</td>
                                                                    <td>{product.name}</td>
                                                                    <td id={product.id}>$ {product.price}</td>
                                                                    <td><input type="number" min='0' step='1' id={product.id} className='form-control' /></td>
                                                                    <td>
                                                                        <input
                                                                            type="checkbox"
                                                                            name="agregar"
                                                                            id={product.id}
                                                                            className='form-control'
                                                                        /></td>
                                                                </tr>
                                                            )))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <hr />
                                    <div className="form-group">
                                        <label htmlFor="staticSubTotal" className="col-sm-8 col-form-label">SubTotal de Orden de Compra</label>

                                        <div className="col-sm-4 float-right">
                                            <input type="text" className="form-control" id="txtSubTotal" value={`$ ${subTotal}`} readOnly />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="staticIVA" className="col-sm-8 col-form-label">IVA</label>

                                        <div className="col-sm-4 float-right">
                                            <input type="text" className="form-control small" id="txtIVA" value={`$ ${iva}`} readOnly />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="staticTotal" className="col-sm-8 col-form-label">Total</label>

                                        <div className="col-sm-4 float-right">
                                            <input type="text" className="form-control small" id="txtTotal" value={`$ ${total}`} readOnly />
                                        </div>
                                    </div>

                                    <div className="form-group row float-right mt-2">
                                        <Link to={'/purchase'} className='btn btn-danger'>Regresar</Link> &nbsp; &nbsp;
                                        <button type="submit" className='btn btn-primary'>Crear</button>
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