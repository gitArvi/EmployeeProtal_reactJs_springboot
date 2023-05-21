import React, { Component } from 'react'
import EmployeeService from '../Services/EmployeeService';
import { Link } from 'react-router-dom';

 class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
              employees:[],
             
        }
        this.addEmployee=this.addEmployee.bind(this);
        this.editEmployee=this.editEmployee.bind(this);
        this.deleteEmployee=this.deleteEmployee.bind(this);
    }
    deleteEmployee(empid)
    {
      EmployeeService.deleteEmployee(empid).then(res=>{
        this.setState({employees: this.state.employees.filter(employee =>employee.emailid !==empid)})
      })
    }
    editEmployee(empid)
    {
      <div>
      <Link to="/update-employee/${empid}">Update Employee</Link>
      </div>
    }
    componentDidMount()
    {
        EmployeeService.getEmployees().then((res)=>{
            this.setState({employees: res.data});
        });
    }
    addEmployee(){
      <div>
       <Link to="/add-employee">Add Employee</Link>
       </div>
    }
  render() {
    return (
      <div >
        <h2 className="text-center">Employee List</h2>
        <div className="row">
       
          <button className="btn btn-primary" onClick={this.addEmployee} style={{ color: 'blue', backgroundColor: 'white' }}><Link to="/add-employee">Add Employee</Link></button>
      
          </div>
          <div className="row">
            <table className="table table-striped table-bordered">
                  <thead>
                    <tr>  
                      <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        this.state.employees.map(
                            employee=>
                            <tr key={employee.empid}>
                              <td>{employee.empid}</td>
                                <td>{employee.firstname}</td>
                                <td>{employee.lastname}</td>
                                <td>{employee.emailid}</td>
                               <td>
                                <button onClick ={()=> this.editEmployee(employee.empid)}  className="btn btn-info"><Link to="/update-employee/${empid}">Update</Link></button>
                               </td>
                               <td>
                               <button onClick ={()=> this.deleteEmployee(employee.empid)}  className="btn btn-info"><Link to="/employees">Delete</Link></button>
                               </td>
                            </tr>
                        )
                    }
                  </tbody>
            </table>

        </div>
        </div>
    )
  }
}
export default  ListEmployeeComponent