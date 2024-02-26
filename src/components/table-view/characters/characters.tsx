import { useCharacters } from "@/state/useCharacter";
import { charsCols } from "../columns";
import { TableWrapper } from "../table-wrapper";
import { usePage } from "../usePage";
import { CharacterCard } from "./character-card";

const Characters = () => {
  const { page, next, prev } = usePage();

  const { data: characters, isFetched } = useCharacters(page);

  return (
    <>
      {isFetched && (
        <TableWrapper
          columns={charsCols}
          data={characters}
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
