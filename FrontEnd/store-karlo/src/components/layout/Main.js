import React, { Fragment } from 'react';

import Aside from './Aside';

const Main = () => {
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row wrapper min-vh-100 flex-column flex-sm-row">
                    <Aside />

                    <main className="col bg-faded py-3">
                        <h1>Bienvenido a Karlo Store</h1>
                    </main>
                </div>
            </div>
        </Fragment>
    )
}

export default Main;