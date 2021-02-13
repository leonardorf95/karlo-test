import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createNewUserAction } from '../../actions/userAction';
import { showAlert, hideAlert } from '../../actions/alertAction';

import Aside from '../layout/Aside';

const FormNewUser = ({ history }) => {
    // state del componente
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // utiliza use dispatch y te crea una funcion
    const dispatch = useDispatch();

    // Mandar llamar el action de user Action
    const addUser = user => dispatch(createNewUserAction(user));

    // Acceder al state del store
    const loadingProcess = useSelector(state => state.users.loading);
    const errorProcess = useSelector(state => state.users.error);
    const alert = useSelector(state => state.alert.alert);

    const submitANewUser = e => {
        e.preventDefault();

        if (name.trim() === '' || email.trim() === '' || password.trim() === '' || password.trim() === '') {
            const response = {
                message: 'Todos los campos son obligatorios.',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }

            dispatch(showAlert(response));

            return;
        }

        if (password !== confirmPassword) {
            const response = {
                message: 'Las contraseñas no coinciden.',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }

            dispatch(showAlert(response));

            return;
        }

        if (password.length < 6 || confirmPassword.length < 6) {
            const response = {
                message: 'Alguna de las contraseñas no tiene la longitud esperada esta son minimo 6.',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }

            dispatch(showAlert(response));

            return;
        }

        dispatch(hideAlert());

        addUser({
            name,
            email,
            password
        });

        history.push('/users/');
    }

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row wrapper min-vh-100 flex-column flex-sm-row">
                    <Aside />

                    <main className="col bg-faded py-3">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1>Crear Nuevo Usuario</h1>

                                <br />

                                {loadingProcess ? (<p className='text-center mt-4'>Cargando...</p>) : null}
                            </div>
                        </div>

                        <hr />

                        <div className="row">
                            <div className="col-md-2"></div>

                            <div className="col-md-8">
                                <form
                                    onSubmit={submitANewUser}
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
                                        <label htmlFor="txtEmail">Email address</label>

                                        <input
                                            type="email"
                                            className="form-control"
                                            id="txtEmail"
                                            name='email'
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="txtPassword">Password</label>

                                        <input
                                            type="password"
                                            className="form-control"
                                            id="txtPassword"
                                            name='password'
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="txtConfirmPassword">Confirmar Password</label>

                                        <input
                                            type="password"
                                            className="form-control"
                                            id="txtConfirmPassword"
                                            name='confirm-password'
                                            value={confirmPassword}
                                            onChange={e => setConfirmPassword(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group float-right">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>

                                {loadingProcess ? <p>Cargando...</p> : null}
                                {errorProcess ? <p className='alert alert-danger p2 mt-4 text-center'>Hubo un Error</p> : null}
                            </div>

                            <div className="col-md-2"></div>
                        </div>
                    </main>
                </div>
            </div>
        </Fragment>
    )
}

export default FormNewUser;