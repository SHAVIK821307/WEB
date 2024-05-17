import React, { useState } from 'react';
const RecordItem = ({ name, amount, purpose,deleteRecord,updateRecords,id }) => {
  
  const [readOnly, setReadOnly] = useState(true);
  const [showname, setName] = useState(name);
  const [showamount, setAmount] = useState(amount);
  const [showpurpose, setPurpose] = useState(purpose);

  let toggleReadOnly=()=>{
  setReadOnly(!readOnly)
  let newRecordobj = {
    Name: showname,
    Amount: showamount,
    Purpose: showpurpose,
  }
  
  updateRecords(id,newRecordobj)
  
  }

  return (
    <div className="row text-center my-3 bg-light">
      <div className="col-sm-3 p-2">
        <input className='showName' type="text" value={showname} onChange={(e)=>setName(e.target.value)} readOnly={readOnly} />
      </div>
      <div className="col-sm-3 p-2">
        <input type="text" value={showamount} onChange={(e)=>setAmount(e.target.value)} readOnly={readOnly} />
      </div>
      <div className="col-sm-3 p-2">
        <input type="text" value={showpurpose} onChange={(e)=>setPurpose(e.target.value)} readOnly={readOnly} />
      </div>
      <div className="col-sm-3 p-2">
        <button className="btn btn-warning edit mx-1" onClick={toggleReadOnly}>{readOnly? "Edit":"Save"}</button>
        <button className="btn btn-danger delete"  onClick={()=>deleteRecord(id)}>Delete</button>
      </div>
    </div>
  );
};

export default RecordItem;
