import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { EpisodesLarge } from "./episodes-large";
import { Error } from "@/components/ui/error";
import { Loader } from "@/components/ui/loader";

import { useInfiniteEpisodes } from "@/state/queries";
import { EpisodeProps } from "@/types";

export const EpisodesGrid = () => {
  const { ref, inView } = useInView();
  const { data, isLoading, isError, fetchNextPage } = useInfiniteEpisodes();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (isLoading) return <Loader />;

  if (isError) return <Error />;

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

      <div ref={ref}>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Error />
        ) : (
          <p className="mx-auto">"Pages loaded"</p>
        )}
      </div>
    </section>
  );
};
