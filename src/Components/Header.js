import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{
    return(
        <div className="container mt-2">
            <div className="row">
                <div className="col-lg-8 text-center">
                </div>
                <div className="col-xl-4 text-center">
                    <div className="btn-group">
                    <Link className="btn btn-danger" to="/">Application Form</Link>
                        <Link className="btn btn-success" to="/medical">Medical course</Link>
                       
               

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;