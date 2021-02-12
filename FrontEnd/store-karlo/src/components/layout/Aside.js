import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Aside = () => {
    return (
        <Fragment>
            <aside className="col-12 col-sm-3 p-0 bg-dark flex-shrink-1">
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark align-items-start flex-sm-column flex-row">
                    &nbsp;
                    <Link to='/' className='navbar-brand'>
                        <i className="bi bi-house"></i>Karlo Store
                    </Link>

                    <a href className="navbar-toggler" data-toggle="collapse" data-target=".sidebar">
                        <span className="navbar-toggler-icon"></span>
                    </a>

                    <div className="collapse navbar-collapse sidebar">
                        <ul className="flex-column navbar-nav w-100 justify-content-between">
                            <li className="nav-item">
                                <Link to='/users/' className='nav-link px-0 text-truncate'>
                                    <i className="fa fa-bullseye fa-fw"></i>Usuarios
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/products/' className='nav-link px-0 text-truncate'>
                                    <i className="fa fa-bullseye fa-fw"></i>Productos
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/purchase/' className='nav-link px-0 text-truncate'>
                                    <i className="fa fa-bullseye fa-fw"></i> Ordenes de Compra
                                </Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link to='/' className='nav-link px-0 text-truncate'>
                                    <i className="fa fa-bullseye fa-fw"></i> Cerrar Sesión
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </aside>
        </Fragment>
    )
}

export default Aside;