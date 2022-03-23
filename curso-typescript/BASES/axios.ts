import axios from "axios";

export const getPokemon = async (id: number) => {
  return await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
};
