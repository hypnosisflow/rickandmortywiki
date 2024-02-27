import { useEpisodes } from "@/state/queries";
import { columns } from "../columns";
import { TableWrapper } from "../table-wrapper";
import { usePage } from "../usePage";
import { EpisodeCard } from "./episode-card";

const Episodes = () => {
  const { page, next, prev } = usePage();

  const { data: episodes, isFetched } = useEpisodes(page);

  return (
    <>
      {isFetched && episodes && (
        <TableWrapper
          info={episodes.info}
          columns={columns.episodeCols}
          data={episodes.results}
          next={next}
          prev={prev}
          cur={page}
        >
          <EpisodeCard />
        </TableWrapper>
      )}
    </>
  );
};

export default Episodes;
