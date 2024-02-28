import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { Loader } from "@/components/ui/loader";
import { Error } from "@/components/ui/error";
import { CharacterLarge } from "./character-large";

import { CharacterProps } from "@/types";
import { useInfiniteCharacters } from "@/state/queries";

export const CharactersGrid = () => {
  const { ref, inView } = useInView();
  const { data, isLoading, isError, fetchNextPage } = useInfiniteCharacters();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (isLoading) return <Loader />;

  if (isError) return <Error />;

  return (
    <section data-label="grid">
      {data?.pages.map((page, index) => {
        return (
          <div
            key={index}
            className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-4"
          >
            {page.results?.map((character: CharacterProps) => (
              <CharacterLarge item={character} key={character.id} />
            ))}
          </div>
        );
      })}

      <div ref={ref} className="w-full ">
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
