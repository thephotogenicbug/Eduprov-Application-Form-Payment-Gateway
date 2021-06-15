import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component{
       constructor(){
        super()
        this.state={
            student:[],
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
            date:'',
            message:'',
            success:'',
            fields: {},
            errors: {}

        }
       }

        handleValidation(){
            let fields = this.state.fields;
            let errors = {};
            let formIsValid = true;

            //Name
            if(!fields["name"]){
               formIsValid = false;
               errors["name"] = "Cannot be empty";
            }
      
            if(typeof fields["name"] !== "undefined"){
               if(!fields["name"].match(/^[a-zA-Z]+$/)){
                  formIsValid = false;
                  errors["name"] = "Only letters";
               }        
            }
       
            //Email
            if(!fields["email"]){
               formIsValid = false;
               errors["email"] = "Cannot be empty";
            }
      
            if(typeof fields["email"] !== "undefined"){
               let lastAtPos = fields["email"].lastIndexOf('@');
               let lastDotPos = fields["email"].lastIndexOf('.');

               if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                  formIsValid = false;
                  errors["email"] = "Email is not valid";
                }
           }  

           this.setState({errors: errors});
           return formIsValid;
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
    processDate = (obj) =>{
        this.setState({
            date:obj.target.value
        })
    }

       handleSubmit = e => {
           this.setState({
            msg: "Please wait Processing....",
            student:[]
        })
        e.preventDefault();
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
              this.setState({message:err.message})
          });
      };

     render(){
         return(
            <form  className="post" onSubmit={this.handleSubmit}>
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
                                      value={this.state.name}
                                      onChange={this.processName}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Email-ID</label>
                                   <input type="text" className="form-control"
                                       value={this.state.email}
                                       onChange={this.processEmail}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Mobile No</label>
                                   <input type="number" className="form-control" 
                                      value={this.state.mobile}
                                      onChange={this.processMobile}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Dob</label>
                                   <input type="text" className="form-control" 
                                      value={this.state.dob}
                                      onChange={this.processDob}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Gender</label>
                                   <input type="text" className="form-control" 
                                      value={this.state.gender}
                                      onChange={this.processGender}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Academics</label>
                                   <input type="text" className="form-control" 
                                       value={this.state.academic}
                                       onChange={this.processAcademic}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Activities</label>
                                   <input type="text" className="form-control"
                                     value={this.state.activities}
                                     onChange={this.processActivities}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Course</label>
                                   <input type="text" className="form-control" 
                                     value={this.state.course}
                                     onChange={this.processCourse}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Father Name</label>
                                   <input type="text" className="form-control" 
                                     value={this.state.father}
                                     onChange={this.processFather}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Mother Name</label>
                                   <input type="text" className="form-control" 
                                      value={this.state.mother}
                                      onChange={this.processMother}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Parents Occupation</label>
                                   <input type="text" className="form-control"
                                      value={this.state.occupation}
                                      onChange={this.processOccupation}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Caste</label>
                                   <input type="text" className="form-control" 
                                     value={this.state.caste}
                                     onChange={this.processCaste}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Country</label>
                                   <input type="text" className="form-control" 
                                     value={this.state.country}
                                     onChange={this.processCountry}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>State</label>
                                   <input type="text" className="form-control" 
                                      value={this.state.state}
                                      onChange={this.processState}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>City</label>
                                   <input type="text" className="form-control" 
                                     value={this.state.city}
                                     onChange={this.processCity}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Nationality</label>
                                   <input type="text" className="form-control" 
                                     value={this.state.nationality}
                                     onChange={this.processNationality}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Prefered College</label>
                                   <input type="text" className="form-control" 
                                     value={this.state.college}
                                     onChange={this.processCollege}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Qualification</label>
                                   <input type="text" className="form-control" 
                                     value={this.state.qualification}
                                     onChange={this.processQualification}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Address</label>
                                   <input type="text" className="form-control" 
                                      value={this.state.address}
                                      onChange={this.processAddress}
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label>Application Date</label>
                                   <input type="text" className="form-control" 
                                     value={this.state.date}
                                     onChange={this.processDate}
                                      />
                                   </div>
                                   
                               </div>
                               <br/>
                               <div className="text-center">
                               <button  className="btn btn-success btn-block" type="submit" >Send Message</button>
                                
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