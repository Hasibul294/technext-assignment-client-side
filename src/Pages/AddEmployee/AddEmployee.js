import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddEmployee.css";

const AddEmployee = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    // axios
    //   .post("https://scary-broomstick-16729.herokuapp.com/packages", data)
    //   .then((res) => {
    //     if (res.data.insertedId) {
    //       alert("New Package Added Successfully");
    //       reset();
    //     }
    //   });
  };
  return (
    <div className="container my-4">
      <h2>Add A New Employee</h2>
      <hr className="mb-5 border-bottom border-4 border-success w-25 mx-auto" />
      <form className="book-form mb-5" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First Name" required />
        <input {...register("lastName")} placeholder="Last Name" required />
        <input {...register("email")} placeholder="Your Email" required />
        <input
          {...register("phoneNumber")}
          placeholder="Your Phone Number"
          required
        />
        <textarea placeholder="Address (optional)" />
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
