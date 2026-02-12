import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function Booking() {
  const { trainId } = useParams();
  const navigate = useNavigate();
  const [passenger, setPassenger] = useState({});

  const handleBooking = () => {
    const trains = JSON.parse(localStorage.getItem("trains"));
    const train = trains.find(t => t.id === trainId);

    if (train.seats <= 0) {
      alert("No seats available");
      return;
    }

    train.seats -= 1;
    localStorage.setItem("trains", JSON.stringify(trains));

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push({
      id: uuid(),
      trainId,
      passenger
    });
    localStorage.setItem("bookings", JSON.stringify(bookings));

    navigate("/confirmation");
  };

  return (
    <div>
      <h2>Passenger Details</h2>
      <input placeholder="Name"
        onChange={e => setPassenger({...passenger, name:e.target.value})} /> <br></br>
      <input placeholder="Age"
        onChange={e => setPassenger({...passenger, age:e.target.value})} /> <br></br>
      <input placeholder="Gender"
        onChange={e => setPassenger({...passenger, gender:e.target.value})} /> <br></br>
      <button onClick={handleBooking}>Pay & Confirm</button>
    </div>
  );
}

export default Booking;