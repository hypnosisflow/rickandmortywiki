import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LocationProps } from "@/types";

export function LocationCard({ item }: { item?: LocationProps | undefined }) {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="flex gap-2 items-center">
          {item?.name}
        </DialogTitle>
        <DialogDescription className="flex flex-col gap-4">
          <span> {item?.type} </span>
          <span> {item?.dimension}</span>
          {/* todo: residents */}
          {/* <span> {selectedItem.residents} </span> */}
          <span> {item?.created} </span>
          <span> {item?.url}</span>
        </DialogDescription>
      </DialogHeader>
    </>
  );
}
