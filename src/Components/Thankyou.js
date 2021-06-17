import React from 'react';
import Footer from './Footer';
import {Link} from 'react-router-dom';
const Thankyou = () =>{


    return(
        <div className="text-center mt-5">
          <h1>Your Form Has Been Submitted </h1>
           <p>Please choose the given option below to redirect to payment screen</p>
           <div className="container">
             <div className="row">
             <div className="col-md-6 m-2">
              <Link className="btn btn-danger" to="/medical">Medical Registration Form</Link>
              </div>
              <div className="col-md-4 m-2">

              <Link className="btn btn-primary" to="/engineering"> Engineering Registration Form</Link>
              </div> 
              
             </div>
             <div className="row">
             <div className="col-md-6 m-2">
              <Link className="btn btn-success" to="/undergraduate">Undergraduate Registration Form</Link>
              </div>
              <div className="col-md-4 m-2">

              <Link className="btn btn-dark" to="/oversease"> Oversease Registration Form</Link>
              </div> 
              
             </div>
           </div>
          <div className="fixed-bottom">
          <Footer/>
          </div>
        </div>
    )


}
export default Thankyou