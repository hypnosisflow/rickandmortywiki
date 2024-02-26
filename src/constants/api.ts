export const BASE_URL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async (page?: number) => {
  const res = await fetch(`${BASE_URL}/character/?page=${page}`);
  const characters = await res.json();
  return characters;
};

export const fetchLocations = async (page: number) => {
  const res = await fetch(`${BASE_URL}/location/?page=${page}`);
  const locations = await res.json();
  return locations;
};

export const fetchEpisodes = async (page: number) => {
  const res = await fetch(`${BASE_URL}/episode/?page=${page}`);
  const episodes = await res.json();
  return episodes;
};

export const fetchCharacter = async (id: string) => {
  const res = await fetch(`${BASE_URL}/character/${id}`);
  const character = await res.json();
  return character;
};

export const fetchLocation = async (id: string) => {
  const res = await fetch(`${BASE_URL}/location/${id}`);
  const location = await res.json();
  return location;
};

export const fetchEpisode = async (id: string) => {
  const res = await fetch(`${BASE_URL}/episode/${id}`);
  const episode = await res.json();
  return episode;
};

export const fetchInfiniteCharacters = async (pageParam: number) => {
  const res = await fetch(`${BASE_URL}/character/?page=` + pageParam);
  const characters = await res.json();
  return characters;
};
