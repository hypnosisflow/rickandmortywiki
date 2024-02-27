import { DialogHeader } from "@/components/ui/dialog";
import { EpisodeProps } from "@/models";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog";

export const EpisodeCard = ({ item }: { item?: EpisodeProps }) => {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="flex gap-2 items-center">
          {item?.name}
        </DialogTitle>
        <DialogDescription className="flex flex-col gap-4">
          <span> {item?.air_date} </span>
          <span> {item?.episode}</span>
          {/* todo: chars */}
          {/* {selectedItem?.characters?.map((char) => (
            <span key={char}> {char} </span>
          ))} */}
          <span> {item?.created} </span>
          <span> {item?.url}</span>
        </DialogDescription>
      </DialogHeader>
    </>
  );
};
