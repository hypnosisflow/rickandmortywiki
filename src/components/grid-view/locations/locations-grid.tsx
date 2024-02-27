import { LocationProps } from "@/models";
import { useInfiniteLocations } from "@/state/useCharacter";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { LocationLarge } from "./location-large.tsx";

export const LocationsGrid = () => {
  const { ref, inView } = useInView();
  const { data, fetchNextPage } = useInfiniteLocations();

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
            {page.results?.map((location: LocationProps) => (
              <LocationLarge item={location} />
            ))}
          </div>
        );
      })}

      <div ref={ref}></div>
    </section>
  );
};
