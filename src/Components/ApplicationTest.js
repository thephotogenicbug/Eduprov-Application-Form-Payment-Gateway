import React, {Component} from 'react';
import axios from 'axios';

class FormTest extends Component{
       constructor(){
        super();
        this.state={
            input:{},
            message:'',
            error:{},
            updated:"No"
        }


    }

    processInput = (obj) =>{
        let input = this.state.input;
        input[obj.target.name] = obj.target.value;
        this.setState({
            input
        })
    }

    updateInfo = () =>{
        let formStatus = true;
        let error = this.state.error;
        if( (!this.state.input["name"]) || (this.state.input["name"]=="")) {
            formStatus =false;
            error["nameError"] = "Enter Your Name !";
        }else{
            error["nameError"] = "";
        }

        //mobile validation 
        let mpattern = /^[6-9]\d{9}$/;
        if(!mpattern.test(this.state.input["mobile"]))
         {
            formStatus =false;
            error["mobileError"] = "Enter 10 Digits Mobile No !";
        }else{
            error["mobileError"] = "";
        }

        this.setState({
            error
        })

        if(formStatus==true){
            let jsonData = JSON.stringify(this.state.input); // array to json
            let url = "https://eduprov-api.herokuapp.com/api/contact";
            axios.post(url , jsonData).then(response=>{
                this.setState({
                    message:response.data.status,
                    updated:response.data.update
                })
            })
        }

    }

     render(){
         return(
            <form  className="post"  >
            <div className="container mt-4">
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
                                     name="name" onChange={this.processInput}
                                      />
                                      <small className="text-danger">{this.state.error["nameError"]}</small>
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Email-ID</label>
                                   <input type="text" className="form-control"
                                      name="email" onChange={this.processInput}
                                      />
                                       
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Mobile No</label>
                                   <input type="number" className="form-control" 
                                     name="mobile" onChange={this.processInput}
                                      />
                                       <small className="text-danger">{this.state.error["mobileError"]}</small>
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Dob</label>
                                   <input type="text" className="form-control" 
                                        name="dob" onChange={this.processInput}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Gender</label>
                                   <input type="text" className="form-control" 
                                       name="gender" onChange={this.processInput}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Academics</label>
                                   <input type="text" className="form-control" 
                                         name="academic" onChange={this.processInput}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Activities</label>
                                   <input type="text" className="form-control"
                                     name="activities" onChange={this.processInput}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Course</label>
                                   <input type="text" className="form-control" 
                                       name="course" onChange={this.processInput}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Father Name</label>
                                   <input type="text" className="form-control" 
                                       name="father" onChange={this.processInput}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Mother Name</label>
                                   <input type="text" className="form-control" 
                                        name="mother" onChange={this.processInput}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Parents Occupation</label>
                                   <input type="text" className="form-control"
                                        name="occupation" onChange={this.processInput}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Caste</label>
                                   <input type="text" className="form-control" 
                                     name="caste" onChange={this.processInput}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Country</label>
                                   <input type="text" className="form-control" 
                                       name="country" onChange={this.processInput}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>State</label>
                                   <input type="text" className="form-control" 
                                       name="state" onChange={this.processInput}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>City</label>
                                   <input type="text" className="form-control" 
                                      name="city" onChange={this.processInput}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Nationality</label>
                                   <input type="text" className="form-control" 
                                       name="nationality" onChange={this.processInput}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Prefered College</label>
                                   <input type="text" className="form-control" 
                                       name="college" onChange={this.processInput}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Qualification</label>
                                   <input type="text" className="form-control" 
                                       name="qualification" onChange={this.processInput}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Address</label>
                                   <input type="text" className="form-control" 
                                      name="address" onChange={this.processInput}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Application Date</label>
                                   <input type="text" className="form-control" 
                                       name="date" onChange={this.processInput}
                                      />
                                   </div>
                                   
                               </div>
                               <br/>
                               <div className="text-center">
                               <button  className="btn btn-success btn-block" onClick={this.updateInfo}   type="submit" >Send Message</button>
                                
                               </div>
                               <div className="mt-2">
                               {this.state.message &&
                               <h6 className="text-danger">{this.state.message} </h6>}
                               </div>
                               {this.state.msg}
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-1"></div>
                      </div>
                    </div>
                </div>
                <br/>
                
            </div>
            </form>
         )
     }
}
export default FormTest