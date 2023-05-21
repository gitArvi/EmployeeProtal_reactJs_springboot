import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService';

const UpdateEmployeeComponent = () => {
  const { empid: routeEmpid } = useParams();
  const [employee, setEmployee] = useState({
    empid: '',
    firstname: '',
    lastname: '',
    emailid: ''
  });

  const { empid, firstname, lastname, emailid } = employee;

  const changeempidHandler = (event) => {
    setEmployee({ ...employee, empid: event.target.value });
  };

  const changefirstnameHandler = (event) => {
    setEmployee({ ...employee, firstname: event.target.value });
  };

  const changelastnameHandler = (event) => {
    setEmployee({ ...employee, lastname: event.target.value });
  };

  const changeemailidHandler = (event) => {
    setEmployee({ ...employee, emailid: event.target.value });
  };

  useEffect(() => {
    EmployeeService.getEmployeeById(routeEmpid).then((res) => {
      let employeeData = res.data;
      setEmployee({
        empid: employeeData.empid,
        firstname: employeeData.firstname,
        lastname: employeeData.lastname,
        emailid: employeeData.emailid
      });
    });
  }, [routeEmpid]);

  const updateEmployee = (event) => {
    event.preventDefault();
    console.log('employee =>', JSON.stringify(employee));
    EmployeeService.createEmployee(employee).then((res) => {
      // Handle the response or redirect if needed
      <Link to="/employees">Update</Link>
    });
    EmployeeService.updateEmployee(employee).then((res)=>{
      <Link to="/employees">Update</Link>
    })
  };

  const cancel = () => {
    // Handle the cancel action or redirect if needed
    <Link to="/employees">Cancel</Link>
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <div className="text-center">Update Employees</div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Employee Id</label>
                  <input
                    placeholder="Employee Id"
                    className="form-control"
                    value={empid}
                    onChange={changeempidHandler}
                  />
                  <label>First Name:</label>
                  <input
                    placeholder="First Name"
                    className="form-control"
                    value={firstname}
                    onChange={changefirstnameHandler}
                  />
                  <label>Last Name:</label>
                  <input
                    placeholder="Last Name"
                    className="form-control"
                    value={lastname}
                    onChange={changelastnameHandler}
                  />
                  <label>Email Id:</label>
                  <input
                    placeholder="Email Id"
                    className="form-control"
                    value={emailid}
                    onChange={changeemailidHandler}
                  />
                </div>
                <button
                  className="btn btn-success"
                  onClick={updateEmployee}
                  style={{ marginLeft: '5px' }}
                >
                  <Link to="/employees">Update</Link>
                </button>
                <button
                  className="btn btn-danger"
                  onClick={cancel}
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
  );
};

export default UpdateEmployeeComponent;

