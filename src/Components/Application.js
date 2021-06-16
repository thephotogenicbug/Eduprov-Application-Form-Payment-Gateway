import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component{
       constructor(){
           super();
           this.state={
            name:'',
            email:'',
            mobile:'',
            dob:'',
            gender:'',
            academic:'',
            activities:'',
            course:'',
            father:'',
            mother:'',
            occupation:'',
            caste:'',
            country:'',
            state:'',
            city:'',
            nationality:'',
            college:'',
            qualification:'',
            address:'',
            message:'',
    

        };
       }

    
      
       processName = (obj) =>{
           this.setState({
               name: obj.target.value
           })
       }

       processEmail = (obj) =>{
           this.setState({
               email:obj.target.value
           })
       }

       processMobile = (obj) =>{
           this.setState({
               mobile:obj.target.value
           })
       }
       processDob = (obj) =>{
        this.setState({
            dob:obj.target.value
        })
    }
    processGender = (obj) =>{
        this.setState({
            gender:obj.target.value
        })
    }
    processAcademic = (obj) =>{
        this.setState({
            academic:obj.target.value
        })
    }
    processActivities = (obj) =>{
        this.setState({
            activities:obj.target.value
        })
    }
    processCourse = (obj) =>{
        this.setState({
            course:obj.target.value
        })
    }
    processFather = (obj) =>{
        this.setState({
            father:obj.target.value
        })
    }
    processMother = (obj) =>{
        this.setState({
            mother:obj.target.value
        })
    }
    processOccupation = (obj) =>{
        this.setState({
            occupation:obj.target.value
        })
    }
    processCaste = (obj) =>{
        this.setState({
            caste:obj.target.value
        })
    }
    processCountry = (obj) =>{
        this.setState({
            country:obj.target.value
        })
    }
    processState = (obj) =>{
        this.setState({
            state:obj.target.value
        })
    }
    processCity = (obj) =>{
        this.setState({
            city:obj.target.value
        })
    }
    processNationality = (obj) =>{
        this.setState({
            nationality:obj.target.value
        })
    }
    processCollege = (obj) =>{
        this.setState({
            college:obj.target.value
        })
    }
    processQualification = (obj) =>{
        this.setState({
            qualification:obj.target.value
        })
    }
    processAddress = (obj) =>{
        this.setState({
            address:obj.target.value
        })
    }
   

       handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            message:"Please Wait Processing...",
        })
        const data = {
          name: this.state.name,
          email: this.state.email,
          mobile: this.state.mobile,
          dob:this.state.dob,
          gender:this.state.gender,
          academic:this.state.academic,
          activities:this.state.activities,
          course:this.state.course,
          father:this.state.father,
          mother:this.state.mother,
          occupation:this.state.occupation,
          caste:this.state.caste,
          country:this.state.country,
          state:this.state.state,
          city:this.state.city,
          nationality:this.state.nationality,
          college:this.state.college,
          qualification:this.state.qualification,
          address:this.state.address,
          date:this.state.date
        };
       
        
     

        axios
          .post("https://eduprov-api.herokuapp.com/api/contact", data)
          .then(res => console.log(res))
          .catch(err => {
              this.setState({
                  message:err.message,
           
                })
               
          });
          window.location.href="#/Thankyou";
         
      };

     render(){
         return(
            <form  className="post"   onSubmit={this.handleSubmit}>
            <div className="container mt-3">
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
                                       <label for="name">Full Name</label>
                                   <input type="text" className="form-control"
                                      value={this.state.name}
                                      onChange={this.processName}
                                      id="name" name="name"
                                      pattern="[a-zA-Z0-9]+" minlength="3" maxlength="50"
                                      required
                                      />
                                      
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Email-ID</label>
                                   <input type="text" className="form-control"
                                       value={this.state.email}
                                       onChange={this.processEmail}
                                       id="email" name="email"
                                       pattern=".+@\.com|.+\.com"
                                       required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Mobile No</label>
                                   <input type="number" className="form-control" 
                                      value={this.state.mobile}
                                      onChange={this.processMobile}
                                      id="number" name="number"
                                      required
                                      pattern="\(?(\d{3})\)?[-\.\s]?(\d{3})[-\.\s]?(\d{4})" minlength="10" maxlength="12"
                                      
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Dob</label>
                                   <input type="date" className="form-control" 
                                      value={this.state.dob}
                                      onChange={this.processDob}
                                      id="dob" name="dob"
                                      required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Gender</label>
                                   <input type="text" className="form-control" 
                                      value={this.state.gender}
                                      onChange={this.processGender}
                                      id="gender" name="gender"
                                   
                                      pattern="[a-zA-Z0-9]+" minlength="3" maxlength="50"
                                      required
                                   
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label >Academics</label>
                                   <input type="text" className="form-control" 
                                       value={this.state.academic}
                                       onChange={this.processAcademic}
                                      
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Activities</label>
                                   <input type="text" className="form-control"
                                     value={this.state.activities}
                                     onChange={this.processActivities}
                                     id="activities" name="activities"
                                     pattern="[a-zA-Z0-9]+" minlength="3" maxlength="50"
                                      required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Course</label>
                                   <input type="text" className="form-control" 
                                     value={this.state.course}
                                     onChange={this.processCourse}
                                     pattern="[a-zA-Z0-9]+" minlength="3" maxlength="50"
                                     required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Father Name</label>
                                   <input type="text" className="form-control" 
                                     value={this.state.father}
                                     onChange={this.processFather}
                                     pattern="[a-zA-Z0-9]+" minlength="3" maxlength="50"
                                      required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Mother Name</label>
                                   <input type="text" className="form-control" 
                                      value={this.state.mother}
                                      onChange={this.processMother}
                                      pattern="[a-zA-Z0-9]+" minlength="3" maxlength="50"
                                      required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Parents Occupation</label>
                                   <input type="text" className="form-control"
                                      value={this.state.occupation}
                                      onChange={this.processOccupation}
                                      pattern="[a-zA-Z0-9]+" minlength="3" maxlength="50"
                                      required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Caste</label>
                                   <input type="text" className="form-control" 
                                     value={this.state.caste}
                                     onChange={this.processCaste}
                                     pattern="[a-zA-Z0-9]+" minlength="3" maxlength="50"
                                     required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Country</label>
                                   <input type="text" className="form-control" 
                                     value={this.state.country}
                                     onChange={this.processCountry}
                                     pattern="[a-zA-Z0-9]+" minlength="3" maxlength="50"
                                     required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">State</label>
                                   <input type="text" className="form-control" 
                                      value={this.state.state}
                                      onChange={this.processState}
                                      pattern="[a-zA-Z0-9]+" minlength="3" maxlength="50"
                                      required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">City</label>
                                   <input type="text" className="form-control" 
                                     value={this.state.city}
                                     onChange={this.processCity}
                                     pattern="[a-zA-Z0-9]+" minlength="3" maxlength="50"
                                      required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Nationality</label>
                                   <input type="text" className="form-control" 
                                     value={this.state.nationality}
                                     onChange={this.processNationality}
                                     pattern="[a-zA-Z0-9]+" minlength="3" maxlength="50"
                                     required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Prefered College</label>
                                   <input type="text" className="form-control" 
                                     value={this.state.college}
                                     onChange={this.processCollege}
                                     pattern="[a-zA-Z0-9]+" minlength="3" maxlength="50"
                                     required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Qualification</label>
                                   <input type="text" className="form-control" 
                                     value={this.state.qualification}
                                     onChange={this.processQualification}
                                     pattern="[a-zA-Z0-9]+" minlength="3" maxlength="50"
                                     required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Address</label>
                                   <input type="text" className="form-control" 
                                      value={this.state.address}
                                      onChange={this.processAddress}
                                      pattern="[a-zA-Z0-9]+" minlength="3" maxlength="50"
                                      required
                                      />
                                   </div>
                                   
                               </div>
                               <br/>
                               <div className="text-center">
                               <button  className="btn btn-success btn-block"   type="submit"   >Send Message</button>
                                
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
export default Form