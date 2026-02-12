import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchTrains() {
  const [search, setSearch] = useState({});
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = () => {
    const trains = JSON.parse(localStorage.getItem("trains")) || [];
    const filtered = trains.filter(t =>
      t.source === search.source &&
      t.destination === search.destination &&
      t.date === search.date
    );
    setResults(filtered);
  };

  return (
    <div style={{textAlign:"center",backgroundColor:"lightgreen",padding:"75px"}}>
      <h2>Page for Searching Trains</h2>
      <input placeholder="Source"
        onChange={e => setSearch({...search, source:e.target.value})} />
      <input placeholder="Destination"
        onChange={e => setSearch({...search, destination:e.target.value})} /> <br></br>
      <input type="date"
        onChange={e => setSearch({...search, date:e.target.value})} /> <br></br>
      <button onClick={handleSearch}>Search</button>

      {results.map(train => (
        <div key={train.id}>
          <h4>{train.name}</h4>
          <p>Seats Available: {train.seats}</p>
          <button onClick={() => navigate(`/booking/${train.id}`)}>
            Book
          </button>
        </div>
      ))}
    </div>
  );
}

export default SearchTrains;