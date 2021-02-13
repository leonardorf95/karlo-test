import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';

const Aside = () => {
    // Instanciacion de Hook history de react-redux
    const history = useHistory();

    const submitLogut = e => {
        e.preventDefault();

        localStorage.removeItem('token');

        history.push('/auth/singin');
    }

    return (
        <Fragment>
            <aside className="col-12 col-sm-3 p-0 bg-dark flex-shrink-1">
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark align-items-start flex-sm-column flex-row">
                    &nbsp;
                    <Link to='/' className='navbar-brand'>
                        <i className="fas fa-store"></i> Karlo Store
                    </Link>

                    <a href='#' className="navbar-toggler" data-toggle="collapse" data-target=".sidebar">
                        <span className="navbar-toggler-icon"></span>
                    </a>

                    <div className="collapse navbar-collapse sidebar">
                        <ul className="flex-column navbar-nav w-100 justify-content-between">
                            <li className="nav-item">
                                <Link to='/users/' className='nav-link px-0 text-truncate'>
                                    <i className="fas fa-users"></i>Usuarios
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/products/' className='nav-link px-0 text-truncate'>
                                    <i className="fas fa-tshirt"></i>Productos
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/purchase/' className='nav-link px-0 text-truncate'>
                                    <i className="fas fa-file-invoice"></i> Ordenes de Compra
                                </Link>
                            </li>

                            <li className="nav-item">
                                <button
                                    type='button'
                                    className='btn btn-link px-0 text-truncate'
                                    onClick={submitLogut}
                                >
                                    <i className="fas fa-sign-out-alt"></i> Cerrar Sesión
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </aside>
        </Fragment>
    )
}

export default Aside;