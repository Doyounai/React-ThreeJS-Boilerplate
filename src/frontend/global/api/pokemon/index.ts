import axios from 'axios';

const GetPokemonByName = async (payload: { name: string }) => {
  const res = axios.get(`https://pokeapi.co/api/v2/pokemon/${payload.name}`);

  return res;
};

const PokemonAPI = { GetPokemonByName };

export default PokemonAPI;
