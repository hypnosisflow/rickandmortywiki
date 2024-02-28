import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { LocationLarge } from "./location-large.tsx";
import { Loader } from "@/components/ui/loader";
import { Error } from "@/components/ui/error";

import { LocationProps } from "@/types";
import { useInfiniteLocations } from "@/state/queries.tsx";

export const LocationsGrid = () => {
  const { ref, inView } = useInView();
  const { data, isLoading, isError, fetchNextPage } = useInfiniteLocations();

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
            {page.results?.map((location: LocationProps) => (
              <LocationLarge item={location} />
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
