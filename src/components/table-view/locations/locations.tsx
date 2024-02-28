import { columns } from "../columns";
import { TableWrapper } from "../table-wrapper";
import { usePage } from "../usePage";
import { useLocations } from "@/state/queries";
import { LocationCard } from "./location-card";
import { Loader } from "@/components/ui/loader";
import { Error } from "@/components/ui/error";

const Locations = () => {
  const { page, next, prev } = usePage();
  const { data: locations, isLoading, isError, isFetched } = useLocations(page);

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <>
      {isFetched && locations && (
        <TableWrapper
          info={locations.info}
          columns={columns.locationsCols}
          data={locations.results}
          next={next}
          prev={prev}
          cur={page}
        >
          <LocationCard />
        </TableWrapper>
      )}
    </>
  );
};

export default Locations;
