import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LocationProps } from "@/types";

export function LocationCard({ item }: { item?: LocationProps }) {
  const date = item ? new Date(item.created).toLocaleDateString() : "";

  return (
    <>
      <DialogHeader >
        <DialogTitle className="flex flex-col mx-auto items-center">
          <span className="text-xl">{item?.name}</span>
          <DialogDescription >
            <span> {item?.type} </span>
          </DialogDescription>
        </DialogTitle>
      </DialogHeader>

      <div>
        <p>
          Dimension: <span className="font-medium ml-1">{item?.dimension}</span>
        </p>
        <p>
          Residents:{" "}
          <span className="font-medium ml-1">{item?.residents?.length}</span>
        </p>

        <p>
          Created: <span className="font-medium ml-1">{date}</span>
        </p>
      </div>
    </>
  );
}
