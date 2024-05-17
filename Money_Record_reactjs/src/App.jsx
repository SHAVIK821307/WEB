import React, { useState, useEffect } from "react";
import RecordForm from "./RecordForm.jsx";
import RecordItem from "./RecordItem";
import "./App.css";

const App = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Money_Records")) || [];
    setRecords(data);
  }, []);

  const addRecord = (newRecord) => {
    const updatedRecords = [...records, newRecord];
    setRecords(updatedRecords);
    localStorage.setItem("Money_Records", JSON.stringify(updatedRecords));
  };

  const updateRecords = (index, newdata) => {
    const newRecords = [...records];
    newRecords[index] = newdata;
    setRecords(newRecords);
    localStorage.setItem("Money_Records", JSON.stringify(newRecords));
  };

  const deleteRecord = (id) => {
    const updatedRecords = records.filter((record, index) => index !== id);
    setRecords(updatedRecords);
    localStorage.setItem("Money_Records", JSON.stringify(updatedRecords));
  };

  return (
    <>
      <div className="head_container bg-dark bg-gradient">
        <h1 className="head">Money Record using React</h1>
      </div>
      <div className="container-fluid my-3">
        <div className="container">
          <RecordForm addRecord={addRecord} />
          <div className="show">
            {records.map((record, index) => (
              <RecordItem
                key={index}
                name={record.Name}
                amount={record.Amount}
                purpose={record.Purpose}
                deleteRecord={deleteRecord}
                updateRecords={updateRecords}
                id={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
