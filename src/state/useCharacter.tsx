import {
  useQuery,
  keepPreviousData,
  useInfiniteQuery,
} from "@tanstack/react-query";
import {
  fetchCharacter,
  fetchCharacters,
  fetchEpisode,
  fetchEpisodes,
  fetchInfiniteCharacters,
  fetchLocation,
  fetchLocations,
} from "@/constants/api";

export const useCharacters = (nextPage: number) =>
  useQuery({
    queryKey: ["characters", nextPage],
    queryFn: () => fetchCharacters(nextPage),
    placeholderData: keepPreviousData,
  });

export const useLocations = (nextPage: number) =>
  useQuery({
    queryKey: ["locations", nextPage],
    queryFn: () => fetchLocations(nextPage),
  });

export const useEpisodes = (nextPage: number) =>
  useQuery({
    queryKey: ["episodes", nextPage],
    queryFn: () => fetchEpisodes(nextPage),
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

export const useInfiniteCharacters = () =>
  useInfiniteQuery({
    queryKey: ["characters"],
    queryFn: ({ pageParam }) => fetchInfiniteCharacters(pageParam),
    initialPageParam: 1,
    getPreviousPageParam: (firstPage) => firstPage.info.prev ?? undefined,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.info.pages !== allPages.length
        ? allPages.length + 1
        : lastPage.info.pages,

    // somehow returns string. so it breakes the query
    // lastPage.info.next ?? undefined,
  });
