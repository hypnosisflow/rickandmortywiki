import { DialogHeader } from "@/components/ui/dialog";
import { EpisodeProps } from "@/types";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog";

export const EpisodeCard = ({ item }: { item?: EpisodeProps }) => {
  const date = item ? new Date(item.created).toLocaleDateString() : "";

  return (
    <>
      <DialogHeader>
        <DialogTitle className="flex flex-col mx-auto items-center">
          <span className="font-medium text-xl">{item?.name}</span>
          <DialogDescription className=" gap-4">
            {item?.episode}
          </DialogDescription>
        </DialogTitle>
      </DialogHeader>

      <div>
        <p>
          Air Date: <span className="font-medium ml-1">{item?.air_date}</span>
        </p>
        <p>
          Characters:{" "}
          <span className="font-medium ml-1">{item?.characters?.length}</span>
        </p>
        {/* {item.residents?.map((char) => (
          <p key={char}>{char}</p>
        ))} */}
        <p>
          Created:<span className="font-medium ml-1"> {date}</span>
        </p>
      </div>
    </>
  );
};
