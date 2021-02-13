import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import { getUserToAction } from '../../actions/userAction';

import Aside from '../layout/Aside';

const FormEditUser = () => {
    // Instanciacion de Hook history de react-redux
    const history = useHistory();

    // Instanciacion de Hook dispatch de react-redux
    // const dispatch = useDispatch();

    // State del componente
    const [user, setUser] = useState({
        name: '',
        email: ''
    });

    // Instanciacionn del Hook para poder acceder al state
    const userDetail = useSelector(state => state.users.userByOne);

    // Hook para visualizar la informacion
    useEffect(() => {
        setUser(userDetail);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userDetail]);

    // Listener que obtiene la informacion de los inputs
    // const onChangeForm = e => {
    //     setUser({
    //         ...user,
    //         [e.target.name]: e.target.value
    //     });
    // }

    // Distrocturing
    const { name, email } = user;

    // Metodo para enviar la informacion al dispatch de actualizado
    const submitDetail = e => {
        e.preventDefault();

        // Redirect a inicio de productos
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
                                <h1>Detalle de Usuario</h1>

                                <br />
                            </div>
                        </div>

                        <hr />

                        <div className="row">
                            <div className="col-md-2"></div>

                            <div className="col-md-8">
                                <form
                                    onSubmit={submitDetail}
                                >
                                    <div className="form-group">
                                        <label htmlFor="txtName">Nombre</label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            id="txtName"
                                            name='name'
                                            disabled={true}
                                            value={name} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="txtEmail">Email address</label>

                                        <input
                                            type="email"
                                            className="form-control"
                                            id="txtEmail"
                                            name='email'
                                            disabled={true}
                                            value={email} />
                                    </div>

                                    <div className="form-group float-right">
                                        <button type="submit" className="btn btn-primary">Regresar</button>
                                    </div>
                                </form>
                            </div>

                            <div className="col-md-2"></div>
                        </div>
                    </main>
                </div>
            </div>
        </Fragment>
    )
}

export default FormEditUser;