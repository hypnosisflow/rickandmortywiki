import { useQuery } from "@tanstack/react-query";
import {
  fetchCharacter,
  fetchCharacters,
  fetchEpisode,
  fetchEpisodes,
  fetchLocation,
  fetchLocations,
} from "@/constants/api";

export const useCharacters = (nextPage: string | number) =>
  useQuery({
    queryKey: ["characters", nextPage],
    queryFn: () => fetchCharacters(nextPage),
  });

export const useLocations = () =>
  useQuery({
    queryKey: ["locations"],
    queryFn: () => fetchLocations(),
  });

export const useEpisodes = () =>
  useQuery({
    queryKey: ["episodes"],
    queryFn: () => fetchEpisodes(),
  });

export const useCharacter = (id: string) =>
  useQuery({
    queryKey: ["character", id],
    queryFn: () => fetchCharacter(id),
  });

export const useLocation = (id: string) =>
  useQuery({
    queryKey: ["location", id],
    queryFn: () => fetchLocation(id),
  });

export const useEpisode = (id: string) =>
  useQuery({
    queryKey: ["episode", id],
    queryFn: () => fetchEpisode(id),
  });
