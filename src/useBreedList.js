import fetchBreedList from "./fetchBreedList";
import { useQuery } from "@tanstack/react-query";


function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);

  console.log(results)

  return [results?.data?.breeds ?? [], results.status];
}

export default useBreedList;
