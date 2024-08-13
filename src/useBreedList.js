import { useEffect, useState } from "react";

const localCache = {};

function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      const response = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}`
      );

      const json = await response.json();

      const allBreds = json.pets.map(pet => pet.breed)

      localCache[animal] = allBreds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status]
}

export default useBreedList;
