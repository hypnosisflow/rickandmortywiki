import { useCharacters } from "@/state/queries";
import { columns } from "../columns";
import { TableWrapper } from "../table-wrapper";
import { usePage } from "../usePage";
import { CharacterCard } from "./character-card";
import { Loader } from "@/components/ui/loader";
import { Error } from "@/components/ui/error";

const Characters = () => {
  const { page, next, prev } = usePage();

  const {
    data: characters,
    isLoading,
    isError,
    isFetched,
  } = useCharacters(page);

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <>
      {isFetched && characters && (
        <TableWrapper
          info={characters.info}
          columns={columns.charsCols}
          data={characters.results}
          next={next}
          prev={prev}
          cur={page}
        >
          <CharacterCard />
        </TableWrapper>
      )}
    </>
  );
};

export default Characters;
