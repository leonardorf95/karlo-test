import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { logInAction } from '../../actions/authAction';
import { showAlert, hideAlert } from '../../actions/alertAction';

import logo from '../../img/user.png'

const SingIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // utiliza use dispatch y te crea una funcion
    const dispatch = useDispatch();

    // Mandar llamar el action de user Action
    const login = user => dispatch(logInAction(user));

    const alert = useSelector(state => state.alert.alert);

    const submitLogin = e => {
        e.preventDefault();

        if (email.trim() === '' || password.trim() === '') {
            const response = {
                message: 'Todos los campos son obligatorios.',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }

            dispatch(showAlert(response));

            return;
        }

        dispatch(hideAlert());

        login({
            email,
            password
        });
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>

                    <div className="col-md-6 text-center">
                        <div className="row">
                            <img src={logo} className='center' alt="" srcSet="" />

                            {alert ? (<p className={alert.classes}>{alert.message}</p>) : null}
                        </div>

                        <form
                            onSubmit={submitLogin}
                        >
                            <div className="form-group">
                                <label htmlFor="txtEmail">Correo Electrónico</label>

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
                                <label htmlFor="txtPassword">Contraseña</label>

                                <input
                                    type="password"
                                    className="form-control"
                                    id="txtPassword"
                                    name='password'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="form-group ">
                                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                            </div>

                            <div className="form-group ">
                                <Link to={'/auth/singup'} className='btn btn-link'>
                                    Crear cuenta
                                </Link>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-3"></div>
                </div>

            </div>
        </Fragment>
    )
}

export default SingIn;