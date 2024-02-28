import {
  CharacterProps,
  EpisodeProps,
  LocationProps,
  ResponseProps,
} from "@/types";

export const BASE_URL = "https://rickandmortyapi.com/api";

export const fetchCharacters = async (
  page: number
): Promise<ResponseProps<CharacterProps[]>> => {
  const res = await fetch(`${BASE_URL}/character/?page=${page}`);
  const characters = await res.json();
  return characters;
};

export const fetchLocations = async (
  page: number
): Promise<ResponseProps<LocationProps[]>> => {
  const res = await fetch(`${BASE_URL}/location/?page=${page}`);
  const locations = await res.json();
  return locations;
};

export const fetchEpisodes = async (
  page: number
): Promise<ResponseProps<EpisodeProps[]>> => {
  const res = await fetch(`${BASE_URL}/episode/?page=${page}`);
  const episodes = await res.json();
  return episodes;
};

// можно будет использовать в будущем.
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
