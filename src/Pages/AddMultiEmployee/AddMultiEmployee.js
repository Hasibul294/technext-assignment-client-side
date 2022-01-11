import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import "./AddMultiEmployee.css";
import { parse } from "papaparse";
import axios from "axios";

const fileTypes = ["csv"];

const AddMultiEmployee = () => {
  const [file, setFile] = useState(null);
  const [infoData, setInfoData] = useState();

  const handleChange = (file) => {
    if (file.type === "application/vnd.ms-excel") {
      setFile(file);
      const run = async () => {
        const text = await file.text();
        const data = parse(text, { header: true });
        // console.log(data);
        setInfoData(data);
      };
      run();
    } else {
      alert("Please select a CSV file");
      setFile(null);
    }
  };

  const handleSubmit = (value) => {
    let array = [];
    value.data.map((info) => {
      if (info.firstName && info.lastName && info.email) {
        array.push(info);
      }
    });
    axios.post("http://localhost:5000/addMultiEmployee", array).then((res) => {
      if (res.data.insertId) {
        alert("Multiple Employee Added Successfully");
      }
    });
  };
  return (
    <div className="my-4">
      <title>AddMultiple</title>
      <h2>Add Multiple Employee</h2>
      <hr className="mb-5 border-bottom border-4 border-success w-25 mx-auto" />
      <div className="drag-drop">
        <p>
          You can add multiple employee to select a CSV file or Drag and Drop
          any CSV file.
        </p>
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          hoverTitle
        />
        <p>{file ? `File name: ${file.name}` : "No files uploaded yet"}</p>
        <button
          className="btn btn-primary"
          onClick={() => handleSubmit(infoData)}
        >
          Send to database
        </button>
      </div>
    </div>
  );
};

export default AddMultiEmployee;
