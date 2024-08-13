import Pet from "./Pet";

const SearchPetsResults = ({pets}) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet}
            name={pet.name}
            location={pet.location}
            animal={pet.animal}
            images={pet.images}
            breed={pet.breed}
          />
        ))
      )}
    </div>
  );
};

export default SearchPetsResults;
