import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "monkey", "crocodile", "elephant"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");

  return (
    <div className="search-params">
      <form>
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
          <select
            name="select"
            id="select"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          >
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
