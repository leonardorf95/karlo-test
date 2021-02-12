import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logInAction } from '../../actions/authAction';
import { showAlert, hideAlert } from '../../actions/alertAction';

const SingIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Instanciacion de Hook history de react-redux
    const history = useHistory();

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

        history.push('/');
    }

    return (
        <Fragment>
            <div className="row">
                <div className="col-md-3"></div>

                <div className="col-md-6 mb-4">
                    <h1>Iniciar Sesión</h1>

                    {alert ? (<p className={alert.classes}>{alert.message}</p>) : null}

                    <form
                        onSubmit={submitLogin}
                    >
                        <div className="form-group">
                            <label for="txtEmail">Email address</label>

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
                            <label for="txtPassword">Password</label>

                            <input
                                type="password"
                                className="form-control"
                                id="txtPassword"
                                name='password'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="form-group float-right">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>

                <div className="col-md-3"></div>
            </div>
        </Fragment>
    )
}

export default SingIn;