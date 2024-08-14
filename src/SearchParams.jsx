import { useState } from "react";
import useBreedList from "./useBreedList";
import SearchPetsResults from "./SearchPetsResults";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetchSearch";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  function submitForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const petObject = {
      animal: formData.get("animal") ?? "",
      breed: formData.get("breed") ?? "",
      location: formData.get("location") ?? "",
    };

    console.log(petObject);

    setRequestParams(petObject);
  }

  return (
    <div className="search-params">
      <form onSubmit={submitForm}>
        <label htmlFor="location">
          Location
          <input name="location" type="text" id="location" />
        </label>

        <label htmlFor="select">
          Animal
          <select
            name="animal"
            id="select"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setRequestParams({...requestParams, breed: ''});
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
          <select name="breed" id="breed" disabled={breeds.length === 0}>
            <option></option>
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <SearchPetsResults pets={pets} />
    </div>
  );
};

export default SearchParams;
