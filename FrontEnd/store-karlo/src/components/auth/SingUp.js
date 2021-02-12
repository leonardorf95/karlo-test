import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createNewUserAction } from '../../actions/userAction';
import { showAlert, hideAlert } from '../../actions/alertAction';

const SingUp = ({ history }) => {
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

        history.push('/auth/singin');
    }

    return (
        <Fragment>
            <div className="row">
                <div className="col-md-3"></div>

                <div className="col-md-6 mb-4">
                    <h1>Crear Cuenta</h1>

                    {alert ? (<p className={alert.classes}>{alert.message}</p>) : null}

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

                <div className="col-md-3"></div>
            </div>
        </Fragment>
    )
}

export default SingUp;