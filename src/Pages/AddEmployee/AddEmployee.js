import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddEmployee.css";

const AddEmployee = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/addEmployee", data).then((res) => {
      if (res.data.insertId) {
        alert("New Employee Added Successfully");
        reset();
      }
    });
  };
  return (
    <div className="container my-4">
      <title>AddEmployee</title>
      <h2>Add A New Employee</h2>
      <hr className="mb-3 border-bottom border-4 border-success w-25 mx-auto" />
      <form className="book-form mb-5" onSubmit={handleSubmit(onSubmit)}>
        <label className="text-start fs-4 fw-bold">First Name:</label>
        <input
          {...register("fastName", {
            required: true,
            minLength: 2,
            maxLength: 15,
          })}
          className="m-0"
          placeholder="Enter Your First Name"
        />
        {errors.fastName && (
          <span className="text-danger text-start mb-2">
            {errors.fastName.type === "required" && "This field is required"}
            {errors.fastName.type === "minLength" &&
              "Enter minimum 2 character."}
            {errors.fastName.type === "maxLength" &&
              "Enter maximum 15 character."}
          </span>
        )}
        <label className="text-start fs-4 fw-bold mt-3">Last Name:</label>
        <input
          {...register("lastName", {
            required: true,
            minLength: 2,
            maxLength: 15,
          })}
          className="m-0"
          placeholder="Enter Your Last Name"
        />
        {errors.lastName && (
          <span className="text-danger text-start mb-2">
            {errors.lastName.type === "required" && "This field is required"}
            {errors.lastName.type === "minLength" &&
              "Enter minimum 2 character."}
            {errors.lastName.type === "maxLength" &&
              "Enter maximum 15 character."}
          </span>
        )}
        <label className="text-start fs-4 fw-bold mt-3">Email Address:</label>
        <input
          type="email"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
          className="m-0"
          placeholder="Enter Your Email"
        />
        {errors.email && (
          <span className="text-danger text-start mb-2">
            {errors.email.type === "required" && "This field is required"}
            {errors.email.type === "pattern" &&
              "Please enter valid email address."}
          </span>
        )}
        <label className="text-start fs-4 fw-bold mt-3">Company Name:</label>
        <input
          {...register("companyName", {
            required: true,
            minLength: 5,
            maxLength: 25,
          })}
          className="m-0"
          placeholder="Enter Company Name"
        />
        {errors.companyName && (
          <span className="text-danger text-start mb-2">
            {errors.companyName.type === "required" && "This field is required"}
            {errors.companyName.type === "minLength" &&
              "Enter minimum 5 character."}
            {errors.companyName.type === "maxLength" &&
              "Enter maximum 25 character."}
          </span>
        )}
        <label className="text-start fs-4 fw-bold mt-3">Address:</label>
        <textarea placeholder="Your Address (optional)" />
        <input
          style={{ backgroundColor: "#ff7f47" }}
          className="border-0 py-2 rounded-pill text-white"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddEmployee;
