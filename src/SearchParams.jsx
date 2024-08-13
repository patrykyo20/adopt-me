import { useState } from "react";
import Pet from "./Pet";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const BREEDS = ["Poodle"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  async function formSubmit(e) {
    e.preventDefault();

    requestPets();
  }

  async function requestPets() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const json = await response.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form onSubmit={formSubmit}>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button>Submit</button>
        </label>

        <label htmlFor="select">
          Animal
          <select
            name="select"
            id="select"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option></option>
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            name="breed"
            id="breed"
            disabled={BREEDS.length === 0}
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option></option>
            {BREEDS.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
      </form>
      {pets.map((pet) => (
        <Pet key={pet} animal={pet.animal} name={pet.name} breed={pet.breed} />
      ))}
    </div>
  );
};

export default SearchParams;
