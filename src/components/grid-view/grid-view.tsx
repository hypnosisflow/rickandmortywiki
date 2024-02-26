import { useEffect } from "react";
import { CharacterLarge } from "./cards/character-large";
import { CharacterProps } from "@/models";

import { useInView } from "react-intersection-observer";
import { useInfiniteCharacters } from "@/state/useCharacter";

export const GridView = () => {
  const { ref, inView } = useInView();
  const { data, fetchNextPage } = useInfiniteCharacters();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <section className="">
      {data?.pages.map((page) => {
        return (
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-4">
            {page.results?.map((character: CharacterProps) => (
              <CharacterLarge item={character} />
            ))}
          </div>
        );
      })}

      <div ref={ref}></div>
    </section>
  );
};
