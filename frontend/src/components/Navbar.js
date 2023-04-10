import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav className={'navbar bg-light'}>
                <div className={'container-fluid'}>
                    <Link className={'navbar-brand'} to={'/'}>
                        React CRUD application
                    </Link>
                    <Link className={'btn btn-outline-primary'} to={'/add'}>
                        Add user
                    </Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;