import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUsersAction } from '../../actions/userAction';

import Aside from '../layout/Aside';
import DisplayUsers from './DisplayUsers';

const Users = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const loadUsers = () => dispatch(getUsersAction());
        loadUsers();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const users = useSelector(state => state.users.users);
    const error = useSelector(state => state.users.error);
    const loadingProcess = useSelector(state => state.users.loading);

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row wrapper min-vh-100 flex-column flex-sm-row">
                    <Aside />

                    <main className="col bg-faded py-3">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1>Listado de Usuarios</h1>

                                <br />

                                {error ? (<p className='font-weight-bold alert alert-danger text-center mt-4'>Hubo un error</p>) : null}

                                {loadingProcess ? (<p className='text-center mt-4'>Cargando...</p>) : null}
                            </div>
                        </div>

                        <hr/>

                        <div className="row">
                            <div className="col-md-2"></div>

                            <div className="col-md-8">
                                <table className='table table-responsive'>
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th scope='col'>Nombre</th>
                                            <th scope='col'>Email</th>
                                            <th scope='col'>Acciones</th>
                                            <th scope='col'>
                                                <Link to={'/users/new'} className='btn btn-success btn-small'>
                                                    <i class="fas fa-plus"></i>
                                                </Link>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.length === 0 ? (<tr><th>No hay Usuarios</th></tr>)
                                                : (users.map(user => (
                                                    <DisplayUsers
                                                        key={user.id}
                                                        user={user} />
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
        </Fragment>
    )
}

export default Users;