import axios from 'axios';

const EMPLOYEE_API_URL ="http://localhost:8080/employees"
const EMPLOYEE_API_URL_update ="http://localhost:8080/updateemployees";
const EMPLOYEE_API_URL_delete ="http://localhost:8080/deleteemployees";
class EmployeeService{
         
    getEmployees()
    {
        return axios.get(EMPLOYEE_API_URL);
    }
    createEmployee(employee)
    {  return axios.post(EMPLOYEE_API_URL,employee);

    }
    getEmployeeById(employee)
    {
        return axios.get(EMPLOYEE_API_URL,employee);
    }
    updateEmployee(employee)
    {
        return axios.put(EMPLOYEE_API_URL_update ,employee);
    }
    deleteEmployee(employeeId)
    {
        return axios.delete(EMPLOYEE_API_URL_delete + '/' + employeeId);
    }
}

export default new EmployeeService()