import { DialogHeader } from "@/components/ui/dialog";
import { EpisodeProps } from "@/models";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import React from "react";

export const EpisodeCard = ({
  selectedItem,
}: {
  selectedItem?: EpisodeProps;
}) => {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="flex gap-2 items-center">
          {selectedItem?.name}
        </DialogTitle>
        <DialogDescription className="flex flex-col gap-4">
          <span> {selectedItem?.air_date} </span>
          <span> {selectedItem?.episode}</span>
          {/* todo: chars */}
          {/* {selectedItem?.characters?.map((char) => (
            <span key={char}> {char} </span>
          ))} */}
          <span> {selectedItem?.created} </span>
          <span> {selectedItem?.url}</span>
        </DialogDescription>
      </DialogHeader>
    </>
  );
};
