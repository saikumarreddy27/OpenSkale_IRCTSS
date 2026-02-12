import { useState } from "react";
import { v4 as uuid } from "uuid";

function Admin() {
  const [train, setTrain] = useState({});

  const addTrain = () => {
    const trains = JSON.parse(localStorage.getItem("trains")) || [];
    trains.push({ ...train, id: uuid(), seats: 50 });
    localStorage.setItem("trains", JSON.stringify(trains));
    alert("Train Added");
  };

  return (
    <div style={{background:"orange"}}>
      <h2>Add Train</h2>
      <input placeholder="Train Name"
        onChange={e => setTrain({...train, name:e.target.value})} />
      <input placeholder="Source"
        onChange={e => setTrain({...train, source:e.target.value})} />
      <input placeholder="Destination"
        onChange={e => setTrain({...train, destination:e.target.value})} />  <br></br><br></br>
      <input type="date"
        onChange={e => setTrain({...train, date:e.target.value})} />
      <button onClick={addTrain}>Add</button>
    </div>
  );
}

export default Admin;