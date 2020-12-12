import {useContext } from 'react';
import {EmployeeContext} from '../contexts/EmployeeContext';
import Employee from './Employee';

const EmployeeList = () => {

    const {employees} = useContext(EmployeeContext);

    return (
    <>
    <div className="table-title">
        <div className="row">
            <div className="col-sm-6">
                <h2>Manage <b>Employees</b></h2>
            </div>
            <div className="col-sm-6">
                <a href="#addEmployeeModal" className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></a>					
            </div>
        </div>
    </div>

    <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>

                {
                  employees.map(employee => (
                      <tr key={employee.id}>
                        <Employee employee={employee} />
                    </tr>
                  ))  
                }
                

        </tbody>
    </table>
    </>
    )
}

export default EmployeeList;