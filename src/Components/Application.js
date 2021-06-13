import React, {Component} from  'react'
class Application extends Component{




    render(){
        return(
            <div className="container mt-2">
              <div className="row">
                  <div>
                  <div className="col-lg-12">
                        <h3 className="text-center text-primary"> Student Application Form </h3>
                        <p className="text-center text-success"></p>
                    </div>
                    <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-10">
                        <div className="card">
                            <div className="card-header bg-success text-white">Enter Student Details </div>
                            <div className="card-body">
                             <div className="row form-group">
                                 <div className="col-lg-4 mt-2">
                                     <label>Full Name</label>
                                 <input type="text" className="form-control" 
                                
                                    />
                                 </div>
                                 <div className="col-lg-4 mt-2">
                                     <label>Email-ID</label>
                                 <input type="text" className="form-control" 
                                  
                                    />
                                 </div>
                                 <div className="col-lg-4 mt-2">
                                     <label>Mobile No</label>
                                 <input type="number" className="form-control" 
                                   
                                    />
                                 </div>
                                 <div className="col-lg-4 mt-2">
                                     <label>Dob</label>
                                 <input type="text" className="form-control" 
                                 
                                    />
                                 </div>
                                 <div className="col-lg-4 mt-2">
                                     <label>Gender</label>
                                 <input type="text" className="form-control" 
                                   
                                    />
                                 </div>
                                 <div className="col-lg-4 mt-2">
                                     <label>Academics</label>
                                 <input type="text" className="form-control" 
                                   
                                    />
                                 </div>
                                 <div className="col-lg-4 mt-2">
                                     <label>Activities</label>
                                 <input type="text" className="form-control" 
                                 
                                    />
                                 </div>
                                 <div className="col-lg-4 mt-2">
                                     <label>Course</label>
                                 <input type="text" className="form-control"
                                   
                                    />
                                 </div>
                                 <div className="col-lg-4 mt-2">
                                     <label>Father Name</label>
                                 <input type="text" className="form-control" 
                                   
                                    />
                                 </div>
                                 <div className="col-lg-4 mt-2">
                                     <label>Mother Name</label>
                                 <input type="text" className="form-control" 
                                  
                                    />
                                 </div>
                                 <div className="col-lg-4 mt-2">
                                     <label>Parents Occupation</label>
                                 <input type="text" className="form-control" 
                                   
                                    />
                                 </div>
                                 <div className="col-lg-4 mt-2">
                                     <label>Caste</label>
                                 <input type="text" className="form-control" 
                                  
                                    />
                                 </div>
                                 <div className="col-lg-4 mt-2">
                                     <label>Country</label>
                                 <input type="text" className="form-control" 
                                    
                                    />
                                 </div>
                                 <div className="col-lg-4 mt-2">
                                     <label>State</label>
                                 <input type="text" className="form-control" 
                                  
                                    />
                                 </div>
                                 <div className="col-lg-4 mt-2">
                                     <label>City</label>
                                 <input type="text" className="form-control" 
                                  
                                    />
                                 </div>
                                 <div className="col-lg-4 mt-2">
                                     <label>Nationality</label>
                                 <input type="text" className="form-control" 
                                 
                                    />
                                 </div>
                                 <div className="col-lg-4 mt-2">
                                     <label>Prefered College</label>
                                 <input type="text" className="form-control" 
                               
                                    />
                                 </div>
                                 <div className="col-lg-4 mt-2">
                                     <label>Qualification</label>
                                 <input type="text" className="form-control" 
                                   
                                    />
                                 </div>
                                 <div className="col-lg-4 mt-2">
                                     <label>Address</label>
                                 <input type="text" className="form-control" 
                                  
                                    />
                                 </div>
                                 <div className="col-lg-4 mt-2">
                                     <label>Application Date</label>
                                 <input type="text" className="form-control" 
                                   
                                    />
                                 </div>
                                 
                             </div>
                             <br/>
                             <div className="text-center">
                             <button  className="btn btn-success btn-block" >Send Message</button>
                             </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    </div>
                  </div>
              </div>
              <br/>
            
          </div>
            
        )
    }

}
export default Application;