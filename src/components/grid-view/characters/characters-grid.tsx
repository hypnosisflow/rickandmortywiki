import { CharacterProps } from "@/types";
import { useInfiniteCharacters } from "@/state/queries";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { CharacterLarge } from "./character-large";
import { Input } from "@/components/ui/input";

export const CharactersGrid = () => {
  const { ref, inView } = useInView();
  const { data, fetchNextPage } = useInfiniteCharacters();

  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <section data-label="grid" className="">
      <Input
        placeholder="Filter names..."
        value={filterValue}
        onChange={(event) => setFilterValue(event.target.value)}
        className="max-w-sm mx-auto mb-2"
      />

      {data?.pages.map((page, index) => {
        return (
          <div
            key={index}
            className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-4"
          >
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
