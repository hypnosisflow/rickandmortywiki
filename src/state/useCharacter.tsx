import {
  fetchCharacter,
  fetchCharacters,
  fetchEpisode,
  fetchEpisodes,
  fetchLocation,
  fetchLocations,
} from "@/constants/api";
import { useQuery } from "@tanstack/react-query";

export const useCharacters = (nextPage) => {
  return useQuery({
    queryKey: ["characters", nextPage],
    queryFn: () => fetchCharacters(nextPage),
  });
};

export const useLocations = () => {
  return useQuery({
    queryKey: ["locations"],
    queryFn: () => fetchLocations(),
  });
};

export const useEpisodes = () => {
  return useQuery({
    queryKey: ["episodes"],
    queryFn: () => fetchEpisodes(),
  });
};

export const useCharacter = (id: string) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: () => fetchCharacter(id),
  });
};

export const useLocation = (id: string) => {
  return useQuery({
    queryKey: ["location", id],
    queryFn: () => fetchLocation(id),
  });
};

export const useEpisode = (id: string) => {
  return useQuery({
    queryKey: ["episode", id],
    queryFn: () => fetchEpisode(id),
  });
};
