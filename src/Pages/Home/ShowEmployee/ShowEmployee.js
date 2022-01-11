import React, { useEffect, useState } from "react";
import "./ShowEmployee.css";

const ShowEmployee = () => {
  const pageSize = 5;
  const [employees, setEmployees] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  useEffect(() => {
    fetch(`http://localhost:5000/addEmployee?page=${page}&&size=${pageSize}`)
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data.result);
        const pageNumber = Math.ceil(data.dataCount / pageSize);
        setPageCount(pageNumber);
      });
  }, [page]);
  return (
    <div className="my-3">
      <h2>All Employees Details</h2>
      <hr className="border-bottom border-4 border-success w-25 mx-auto" />
      <div className="table-container">
        <table className="mb-3">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Company Name</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.companyName}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button
            disabled={page === pageCount - 1}
            onClick={() => {
              if (page !== pageCount) {
                setPage(page + 1);
              }
            }}
          >
            Next
          </button>
          {[...Array(pageCount).keys()].map((number) => (
            <button
              key={number}
              className={number === page ? "selected" : ""}
              onClick={() => {
                setPage(number);
              }}
            >
              {number + 1}
            </button>
          ))}
          <button
            disabled={page === 0}
            onClick={() => {
              if (page !== pageCount) {
                setPage(page - 1);
              }
            }}
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowEmployee;
