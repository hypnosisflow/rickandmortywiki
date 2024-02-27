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
