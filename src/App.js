import "./App.css";
import { Fragment, useState } from "react";
import { generateID } from "./helpers";

const App = () => {
  const [person, setPerson] = useState({});
  const [people, setPeople] = useState([
    { id: 1, name: "Jan", lastName: "Kowalski" }
  ]);

  const handleChange = (key) => (event) => {
    setPerson({ ...person, [key]: event.target.value });
  };

  const handleAddPerson = (event) => {
    event.preventDefault();
    setPeople([...people, { ...person, id: generateID() }]);
  };

  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
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
          <label>
            Imię
            <input required type="text" onChange={handleChange("name")} />
          </label>
        </div>
        <div className="form-lastname">
          <label>
            Nazwisko
            <input required type="text" onChange={handleChange("lastName")} />
          </label>
        </div>
        <button type="submit" disabled={people.length === 5}>
          Dodaj pracownika
        </button>
      </form>
      <div className="F">
        <p className="F-title">Pracownicy</p>
        {people.map(({ id, name, lastName }) => (
          <Fragment key={id}>
            <p className="F-name">{name}</p>
            <p className="F-lastName">{lastName}</p>
            {/* It was not clear from the instruction, I have added third grid column for the below button */}
            <button className="removeButton" onClick={() => removePerson(id)}>
              Usuń
            </button>
          </Fragment>
        ))}
      </div>
      <footer className="D">D</footer>
    </div>
  );
};

export default App;
