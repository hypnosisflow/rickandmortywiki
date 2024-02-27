import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CharacterProps } from "@/types";

export function CharacterCard({ item }: { item?: CharacterProps }) {
  const date = item ? new Date(item.created).toLocaleDateString() : "";

  return (
    <>
      <DialogHeader>
        <DialogTitle className="flex flex-col gap-2 items-center">
          <picture>
            <img
              src={item?.image}
              alt="char avatar"
              className="w-14 h-14 rounded-full"
            />
          </picture>
          <span className="text-xl">{item?.name}</span>
          <DialogDescription className="flex flex-col gap-2">
            {item?.gender}
          </DialogDescription>
        </DialogTitle>
      </DialogHeader>

      <div>
        <p>
          Status: <span className="font-medium ml-1">{item?.status}</span>
        </p>
        <p>
          Species: <span className="font-medium ml-1">{item?.species}</span>
        </p>
        <p>
          Type:{" "}
          <span className="font-medium ml-1">
            {item?.type == "" ? "---" : item?.type}{" "}
          </span>
        </p>
        <p>
          Origin: <span className="font-medium ml-1">{item?.origin?.name}</span>
        </p>
        <p>
          Location:{" "}
          <span className="font-medium ml-1">{item?.location?.name}</span>
        </p>
        <p>
          Created: <span className="font-medium ml-1">{date}</span>
        </p>
      </div>
    </>
  );
}
