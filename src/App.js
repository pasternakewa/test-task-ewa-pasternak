import "./App.css";
import { useState } from "react";

const App = () => {
  const [person, setPerson] = useState({});
  const [people, setPeople] = useState([{ name: "Jan", lastName: "Kowalski" }]);

  const handleChange = (key) => (event) => {
    setPerson({ ...person, [key]: event.target.value });
  };

  const handleAddPerson = (event) => {
    event.preventDefault();
    setPeople([...people, person]);
  };

  return (
    <div className="App">
      <header className="A">A</header>
      <div className="B">
        B
        <div className="C">
          C<div className="E">E</div>
        </div>
      </div>
      <form className="form" onSubmit={handleAddPerson}>
        <div className="form-name">
          <label>Imię</label>
          <input required type="text" onChange={handleChange("name")} />
        </div>
        <div className="form-lastname">
          <label>Nazwisko</label>
          <input type="text" onChange={handleChange("lastName")} />
        </div>
        <button type="submit">Add</button>
      </form>
      <div className="F">
        <p className="F-title">Pracownicy</p>
        {people.map(({ name, lastName }) => (
          <>
            <p className="F-name">{name}</p>
            <p className="F-lastName">{lastName}</p>
          </>
        ))}
        F
      </div>
      <footer className="D">D</footer>
    </div>
  );
};

export default App;
