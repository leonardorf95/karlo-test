import React, { Fragment } from 'react';
import Aside from '../layout/Aside';

const FormNewPurchase = () => {
    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row wrapper min-vh-100 flex-column flex-sm-row">
                    <Aside />

                    <main className="col bg-faded py-3">
                        <div className="row">
                            <div className="col-md-3"></div>

                            <div className="col-md-6">
                                <h1>Crear orden de compra</h1>

                                <br />

                                <hr />
                            </div>

                            <div className="col-md-3"></div>
                        </div>
                    </main>
                </div>
            </div>
        </Fragment>
    )
}

export default FormNewPurchase;