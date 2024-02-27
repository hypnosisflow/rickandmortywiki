import { columns } from "../columns";
import { TableWrapper } from "../table-wrapper";
import { usePage } from "../usePage";
import { useLocations } from "@/state/queries";
import { LocationCard } from "./location-card";

const Locations = () => {
  const { page, next, prev } = usePage();
  const { data: locations, isFetched } = useLocations(page);

  return (
    <>
      {isFetched && (
        <TableWrapper
          columns={columns.locationsCols}
          info={locations.info}
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
