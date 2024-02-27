import { EpisodeProps } from "@/models";
import { useInfiniteCharacters } from "@/state/useCharacter";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { EpisodesLarge } from "./episodes-large";

export const EpisodesGrid = () => {
  const { ref, inView } = useInView();
  const { data, fetchNextPage } = useInfiniteCharacters();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <section className="">
      {data?.pages.map((page, index) => {
        return (
          <div
            key={index}
            className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-4"
          >
            {page.results?.map((episode: EpisodeProps) => (
              <EpisodesLarge item={episode} />
            ))}
          </div>
        );
      })}

      <div ref={ref}></div>
    </section>
  );
};
