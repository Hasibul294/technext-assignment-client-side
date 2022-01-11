import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import "./AddMultiEmployee.css";
import { parse } from "papaparse";

const fileTypes = ["csv"];

const AddMultiEmployee = () => {
  const [file, setFile] = useState(null);
  const [infoData, setInfoData] = useState([]);
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);

  // const data = async (file) => {
  //   console.log("this is data");
  //   const text = await file.text();
  //   console.log(text);
  //   console.log("this is test");
  // };

  const handleChange = (file) => {
    if (file.type === "application/vnd.ms-excel") {
      setFile(file);
      const run = async () => {
        const text = await file.text();
        const data = parse(text, { header: true });
        const dataLength = data.data.length;
        let infoLength = 0;
        data.data.map((info) => {
          if (info.firstName && info.lastName && info.companyName) {
            return setInfoData(info);
          } else {
            return setCount(infoLength + 1);
          }
        });
      };
      run();
    } else {
      alert("Please select a CSV file");
    }
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
