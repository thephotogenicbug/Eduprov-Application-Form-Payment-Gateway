import React, {Component} from 'react';
import axios from 'axios';
import Footer from './Footer';
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
            coursetwo:'',
            coursethree:'',
            coursefour:'',
            father:'',
            mother:'',
            pmobile:'',
            occupation:'',
            occupationtwo:'',
            caste:'',
            country:'',
            state:'',
            city:'',
            nationality:'',
            college:'',
            collegetwo:'',
            collegethree:'',
            collegefour:'',
            qualification:'',
            address:'',
            achievements:'',
            message:''
    

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
    processCourseTwo = (obj) =>{
        this.setState({
            coursetwo:obj.target.value
        })
    }
    processCourseThree = (obj) =>{
        this.setState({
            coursethree:obj.target.value
        })
    }
    processCourseFour= (obj) =>{
        this.setState({
            coursefour:obj.target.value
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
    processPmobile = (obj) =>{
        this.setState({
            pmobile:obj.target.value
        })
    }
    processOccupation = (obj) =>{
        this.setState({
            occupation:obj.target.value
        })
    }
    processOccupationTwo = (obj) =>{
        this.setState({
            occupationtwo:obj.target.value
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
    processCollegeTwo = (obj) =>{
        this.setState({
            collegetwo:obj.target.value
        })
    }
    processCollegeThree = (obj) =>{
        this.setState({
            collegethree:obj.target.value
        })
    }
    processCollegeFour = (obj) =>{
        this.setState({
            collegefour:obj.target.value
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
    processAch = (obj) =>{
        this.setState({
            achievements:obj.target.value
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
          coursetwo:this.state.coursetwo,
          coursethree:this.state.coursethree,
          coursefour:this.state.coursefour,
          father:this.state.father,
          mother:this.state.mother,
          pmobile:this.state.pmobile,
          occupation:this.state.occupation,
          occupationtwo:this.state.occupationtwo,
          caste:this.state.caste,
          country:this.state.country,
          state:this.state.state,
          city:this.state.city,
          nationality:this.state.nationality,
          college:this.state.college,
          collegetwo:this.state.collegetwo,
          collegethree:this.state.collegethree,
          collegefour:this.state.collegefour,
          qualification:this.state.qualification,
          address:this.state.address,
          achievements:this.state.achievements,
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
                                       <label for="name">Full Name <i className="text-danger"> *</i></label>
                                   <input type="text" className="form-control"
                                      value={this.state.name}
                                      onChange={this.processName}
                                      id="name" name="name"
                               
                                      required
                                      />
                                      
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Email-ID <i className="text-danger"> *</i></label>
                                   <input type="text" className="form-control"
                                       value={this.state.email}
                                       onChange={this.processEmail}
                                       id="email" name="email"
                                       pattern=".+@\.com|.+\.com"
                                       required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Mobile No <i className="text-danger"> *</i></label>
                                   <input type="text" className="form-control" 
                                      value={this.state.mobile}
                                      onChange={this.processMobile}
                                      id="number" name="number"
                                      required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Dob <i className="text-danger"> *</i></label>
                                   <input type="date" className="form-control" 
                                      value={this.state.dob}
                                      onChange={this.processDob}
                                      id="dob" name="dob"
                                      required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Gender <i className="text-danger"> *</i></label>
                                   <input type="text" className="form-control" 
                                      value={this.state.gender}
                                      onChange={this.processGender}
                                      id="gender" name="gender"
                                      required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Extra Curricular Activities <i className="text-danger"> *</i></label>
                                   <input type="text" className="form-control"
                                     value={this.state.activities}
                                     onChange={this.processActivities}
                                     id="activities" name="activities"
                                      required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Preferred Course <i className="text-danger"> *</i></label>
                                   <input type="text" className="form-control" 
                                     value={this.state.course}
                                     onChange={this.processCourse}
                                     required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Preferred Course 2 (optional)</label>
                                   <input type="text" className="form-control" 
                                     value={this.state.coursetwo}
                                     onChange={this.processCourseTwo}
                            
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Preferred Course 3 (optional)</label>
                                   <input type="text" className="form-control" 
                                     value={this.state.coursethree}
                                     onChange={this.processCourseThree}
                               
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Preferred Course 4 (optional)</label>
                                   <input type="text" className="form-control" 
                                     value={this.state.coursefour}
                                     onChange={this.processCourseFour}
                                  
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Father Name <i className="text-danger"> *</i></label>
                                   <input type="text" className="form-control" 
                                     value={this.state.father}
                                     onChange={this.processFather}
                                   
                                      required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Mother Name <i className="text-danger"> *</i></label>
                                   <input type="text" className="form-control" 
                                      value={this.state.mother}
                                      onChange={this.processMother}
                                   
                                      required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Parents Mobile No <i className="text-danger"> *</i></label>
                                   <input type="text" className="form-control" 
                                      value={this.state.pmobile}
                                      onChange={this.processPmobile}
                                   
                                      required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Mother Occupation <i className="text-danger"> *</i></label>
                                   <input type="text" className="form-control"
                                      value={this.state.occupation}
                                      onChange={this.processOccupation}
                                 
                                      required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Father Occupation <i className="text-danger"> *</i></label>
                                   <input type="text" className="form-control"
                                      value={this.state.occupationtwo}
                                      onChange={this.processOccupationTwo}
                                 
                                      required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Caste <i className="text-danger"> *</i></label>
                                   <input type="text" className="form-control" 
                                     value={this.state.caste}
                                     onChange={this.processCaste}
                                 
                                     required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Country <i className="text-danger"> *</i></label>
                                   <input type="text" className="form-control" 
                                     value={this.state.country}
                                     onChange={this.processCountry}
                                  
                                     required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">State <i className="text-danger"> *</i></label>
                                   <input type="text" className="form-control" 
                                      value={this.state.state}
                                      onChange={this.processState}
                                
                                      required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">City <i className="text-danger"> *</i></label>
                                   <input type="text" className="form-control" 
                                     value={this.state.city}
                                     onChange={this.processCity}
                                   
                                      required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Nationality <i className="text-danger"> *</i></label>
                                   <input type="text" className="form-control" 
                                     value={this.state.nationality}
                                     onChange={this.processNationality}
                                   
                                     required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Preferred College <i className="text-danger"> *</i></label>
                                   <input type="text" className="form-control" 
                                     value={this.state.college}
                                     onChange={this.processCollege}
                                     required
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Preferred College 2 (optional)</label>
                                   <input type="text" className="form-control" 
                                     value={this.state.collegetwo}
                                     onChange={this.processCollegeTwo}
                                  
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Preferred College 3 (optional)</label>
                                   <input type="text" className="form-control" 
                                     value={this.state.collegethree}
                                     onChange={this.processCollegeThree}
                                    
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Preferred College 4 (optional)</label>
                                   <input type="text" className="form-control" 
                                     value={this.state.collegefour}
                                     onChange={this.processCollegeFour}
                                   
                                      />
                                   </div>
                                   <div className="col-lg-4 mt-2">
                                       <label for="name">Student Qualification <i className="text-danger"> *</i></label>
                                   <input type="text" className="form-control" 
                                     value={this.state.qualification}
                                     onChange={this.processQualification}
                                    
                                     required
                                      />
                                   </div>
                                   <div className="col-lg-8 mt-2">
                                       <label for="name">Sports and Achievements <i className="text-danger"> *</i></label>
                                   <input type="text" className="form-control" 
                                     value={this.state.achievements}
                                     onChange={this.processAch}
                                    
                                     required
                                      />
                                   </div>
                                   <div className="col-lg-12 mt-2">
                                       <label for="name">Address <i className="text-danger"> *</i> </label>
                                   <textarea className="form-control"  value={this.state.address}
                                      onChange={this.processAddress}
                                     
                                      required>

                                      </textarea>

                                   </div>
                                   
                               </div>
                               <br/>
                               <div className="text-center">
                               <button  className="btn btn-success btn-block"   type="submit"   >Submit </button>
                                
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
                <Footer/>
            </div>
            </form>
         )
     }
}
export default Form