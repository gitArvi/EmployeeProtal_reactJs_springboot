import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService';
 class CreateEmployeeComponent extends Component {
    constructor(props)
    {
                super(props)
                this.state={
                    empid:'',
                     firstname:'',
                     lastname:'',
                     emailid:''
                }
                this.changeempidHandler=this.changeempidHandler.bind(this);
                this.changefirstnameHandler=this.changefirstnameHandler.bind(this);
                this.changelastnameHandler=this.changelastnameHandler.bind(this);
                this.changeemailidHandler=this.changeemailidHandler.bind(this);
                this.saveEmployee=this.saveEmployee.bind(this);
    }
    changeempidHandler(event)
    {
        this.setState({empid: event.target.value});
    }
    changefirstnameHandler(event)
    {
        this.setState({firstname: event.target.value});
    }
    changelastnameHandler(event)
    {
        this.setState({lastname: event.target.value});
    }
    changeemailidHandler(event){
        this.setState({emailid: event.target.value});
    }
    saveEmployee(event){
      event.preventDefault();
      let employee = {empid:this.state.empid,firstname:this.state.firstname,lastname:this.state.lastname,emailid:this.state.emailid};
      console.log('employee =>' + JSON.stringify(employee));


      EmployeeService.createEmployee(employee).then(res=>{
        <Link to="/employees">Save</Link>
      });
    }
    cancel(){
        // this.props.history.push('/employees');
        <Link to="/employees">Cancel</Link>
    }
  render() {
    return (
      <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <div className="text-center">Add Employees</div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Employee Id</label>
                  <input placeholder="Employee Id" className="form-control"
value={this.state.empid} onChange={this.changeempidHandler}/>
<label>First Name:</label>
<input placeholder="First Name" className="form-control"
value={this.state.firstname} onChange={this.changefirstnameHandler}/>
 <label>Last Name:</label>
<input placeholder="Last Name" className="form-control"
value={this.state.lastname} onChange={this.changelastnameHandler}/>
  <label>Last Name:</label>
<input placeholder="Email Id" className="form-control"
value={this.state.emailid} onChange={this.changeemailidHandler}/>

                </div>
                <button
                  className="btn btn-success"
                  onClick={this.saveEmployee}
                  style={{ marginLeft: '5px' }}
                >
                  <Link to="/employees">Save</Link>
                </button>
                <button
                  className="btn btn-danger"
                  onClick={this.cancel.bind(this)}
                  style={{ marginLeft: '10px' }}
                >
                  <Link to="/employees">Cancel</Link>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}


export default CreateEmployeeComponent;

