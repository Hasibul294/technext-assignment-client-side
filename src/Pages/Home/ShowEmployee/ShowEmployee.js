import React, { useEffect, useState } from "react";
import "./ShowEmployee.css";

const ShowEmployee = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch("./fake-data.json")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);
  return (
    <div className="my-3">
      <h2>All Employees Details</h2>
      <hr className="border-bottom border-4 border-success w-25 mx-auto" />
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowEmployee;
