const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes) {
    throw new Error(`details/${id} fetch is not ok`);
  }

  return await apiRes.json();
};

export default fetchPet;
