import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CharacterProps } from "@/models";

export function CharacterCard({ item }: { item?: CharacterProps }) {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="flex gap-2 items-center">
          <picture>
            <img
              src={item?.image}
              alt="char avatar"
              className="w-14 h-14 rounded-full"
            />
          </picture>
          {item?.name}
        </DialogTitle>
        {item && (
          <DialogDescription className="flex flex-col gap-4">
            <span> {item.status} </span>
            <span> {item.species}</span>
            <span> {item.gender} </span>
            <span> {item.created} </span>
            <span> {item.url}</span>
          </DialogDescription>
        )}
      </DialogHeader>
    </>
  );
}
