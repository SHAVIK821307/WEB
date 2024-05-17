import React, { useState, useEffect } from "react";

const RecordForm = ({ addRecord }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call a function to handle form submission
    let newRecordobj = {
      Name: name,
      Amount: amount,
      Purpose: purpose,
    };
    addRecord(newRecordobj);
    setName("");
    setAmount("");
    setPurpose("");
  };

  return (
    <form onSubmit={handleSubmit} className="row text-center my-3">
      <div className="col-sm-3 p-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
      </div>
      <div className="col-sm-3 p-2">
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
      </div>
      <div className="col-sm-3 p-2 ">
        <input
          type="text"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          placeholder="Purpose"
        />
      </div>
      <div className="col-sm-3 p-2">
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default RecordForm;
