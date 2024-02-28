import { useEpisodes } from "@/state/queries";
import { columns } from "../columns";
import { TableWrapper } from "../table-wrapper";
import { usePage } from "../usePage";
import { EpisodeCard } from "./episode-card";
import { Loader } from "@/components/ui/loader";
import { Error } from "@/components/ui/error";

const Episodes = () => {
  const { page, next, prev } = usePage();

  const { data: episodes, isLoading, isError, isFetched } = useEpisodes(page);

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

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
