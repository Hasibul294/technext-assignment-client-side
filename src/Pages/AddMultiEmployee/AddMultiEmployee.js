import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import "./AddMultiEmployee.css";

const fileTypes = ["csv"];

const AddMultiEmployee = () => {
  const [file, setFile] = useState(null);
  console.log(file);

  const handleChange = (file) => {
    setFile(file);
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
      </div>
    </div>
  );
};

export default AddMultiEmployee;
